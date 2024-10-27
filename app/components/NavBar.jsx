"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

function NavBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  dispatch({type:search,payload:{search} });
  return (
    <div className="flex justify-between border-b-2 border-red-600 p-4">
      <h1 className="font-extrabold text-lg">TuniBest</h1>
      <nav className="flex items-center justify-between w-[35%]">
        <input
          type="text"
          placeholder="Search"
          className="border-2 p-2 rounded-2xl"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link className="text-black no-underline hover:font-bold" href="/">
          home
        </Link>
        <Link href="/list" className="text-black no-underline hover:font-bold">
          list
        </Link>
        <Link href="/login" className="text-black no-underline hover:font-bold">
          login
        </Link>
        <Link
          href="/sign-up"
          className="text-black no-underline hover:font-bold"
        >
          sign up
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
