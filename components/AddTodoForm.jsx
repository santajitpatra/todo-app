"use client"

import React from "react";

const AddTodoForm = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="w-1/2 bg-white">
        <form action="" className="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Task Title"
            className="h-12 w-96 m-4 p-4 border border-black rounded"
          />
          <input
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
