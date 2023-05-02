import React from "react";
import Link from "next/link";
import { LogoutBtn } from "../components/Clients"

const header = () => {
  return (
    <div className="flex flex-row justify-between p-5 bg-white mb-2">
      <div className=" mx-5">
        <h2 className="text-xl font-semibold">Booking App</h2>
      </div>
      <article className="flex flex-row ">
        <Link className="mx-5" href={"/"}>
          Home
        </Link>
        <Link className="mx-5" href={"/about"}>
          About
        </Link>

        <LogoutBtn/>

      </article>
    </div>
  );
};

export default header;
