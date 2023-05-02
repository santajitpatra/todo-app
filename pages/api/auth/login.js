import { asyncError, errorHandler } from "../../../middlewares/error";
import { User } from "../../../models/user";
import {
  connectDB,
  cookieSetter,
  generateToken,
} from "../../../utils/features";
import bcrypt from "bcrypt";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");

  const { email, password } = req.body;

  if (!email || !password)
    return errorHandler(req, 400, "please provide all required fields");

  await connectDB();

  const user = await User.findOne({ email }).select("+password");

  if (!user) return errorHandler(req, 400, "Invalid username or password");

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) return errorHandler(req, 400, "Invalid username or password");

  const token = generateToken(user._id);

  cookieSetter(res, token, true);

  res.status(200).json({
    success: true,
    message: `LogIn successfully Mr. ${user.name}`,
  });
});

export default handler;
