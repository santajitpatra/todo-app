"use client";

import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { Context } from "../components/Clients";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(Context);

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/newtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data = await res.json();

      if (!data.success) return toast.error(data.message);

      toast.success(data.message);
      router.refresh();
      setTitle("");
      setDescription("");
    } catch (error) {
      return toast.error(error);
    }
  };

  if (!user._id) return redirect("/login");

  return (
    <div className="flex justify-center items-center">
      <section className="w-1/2 bg-white">
        <form onSubmit={submitHandler} className="flex flex-col justify-center items-center">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Task Title"
            className="h-12 w-96 m-4 p-4 border border-black rounded"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Task Description"
            className="h-12 w-96 m-4 p-4 border border-black rounded"
          />
          <button
            type="submit"
            className="btn-primary"
          >
         ADD TASK
          </button>
         
        </form>
      </section>
    </div>
  );
};

export default AddTodoForm;
