import { connectDB } from "../../utils/features";
import { Task } from "../../models/task";

const handler = async (req, res) => {
  await connectDB();

  await Task.create({
    title: "Sample Title",
    description: "Sample Description",
    user: "sample",
  });

  res.json({ success: true });
};

export default handler;
