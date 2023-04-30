import React from "react";
import Link from "next/link";
import { LogoutBtn } from "../components/Clients"

const header = () => {
  return (
    <div className="flex flex-row justify-between p-4">
      <div>
        <h2>booking app</h2>
      </div>
      <article className="flex flex-row">
        <Link className="mx-2" href={"/"}>
          Home
        </Link>
        <Link className="mx-2" href={"/about"}>
          About
        </Link>

        <LogoutBtn/>

      </article>
    </div>
  );
};

export default header;
