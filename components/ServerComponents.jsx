"use client"

import React from "react";

export const TodoItem = ({ title, description, id, completed }) => {
  return (
    <div className="bg-white w-1/2 p-4 m-4 flex justify-between items-center ">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <TodoButton id={id} completed={completed} />
      </div>
    </div>
  );
};

export const TodoButton = (id, completed) => {
  const deleteHandler = (id) => {
    alert(`Delete ${id}`);
  };
  return (
    <div className="flex justify-center items-center">
      <input type="checkbox" checked={completed} className="w-8 h-8 "/>
      <button className="btn-primary" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </div>
  );
};
