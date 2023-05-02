import { connectDB } from "../../utils/features";
import { Task } from "../../models/task";
import { asyncError, errorHandler } from "../../middlewares/error";


const handler = async (req, res) => {
  if(req.method !== "POST")
  return errorHandler(res, 400, "Only POST Method is allowed");

  await connectDB();


  const { title, description } = req.body;


  await Task.create({
    title,
    description,
    // user: "user",
  });

  res.json({
    success: true,
    message: "Task Created",
  });
};

export default handler;

