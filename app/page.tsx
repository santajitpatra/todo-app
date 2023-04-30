import React from "react";
import Form from "../components/AddTodoForm";
import { TodoItem } from "../components/ServerComponents";

const page = () => {
  return (
    <div className="">
      <Form />
      <section className="flex justify-center items-center">
        <TodoItem
          title={"Sample Task"}
          descriptions={"add some thing here"}
          id={"SimpleID"}
          completed={true}
        />
      </section>
    </div>
  );
};

export default page;
