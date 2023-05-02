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

  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return errorHandler(req, 400, "please provide all required fields");

  await connectDB();

  let user = await User.findOne({ email });

  if (user) return errorHandler(req, 400, "User required with this email");

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user._id);

  cookieSetter(res, token, true);

  res.status(201).json({
    success: true,
    message: "Registered successfully",
    // user,
  });
});

export default handler;
