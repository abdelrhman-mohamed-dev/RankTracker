import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import LogoutLink from "./LogoutLink";

const Header = async () => {
  const session = await getServerSession(authOptions);
  //   console.log(session);
  const user = session?.user;
  //   console.log(user);
  return (
    <header className="max-w-4xl px-2 mx-auto my-4 flex items-center justify-between">
      <Link
        href="/"
        className="text-3xl font-bold bg-gradient-to-r to-blue-600 from-indigo-900 text-transparent bg-clip-text"
      >
        RankTracker
      </Link>
      <div className="flex items-center gap-2 p-1  rounded-xl">
        <Image
          src={user?.image}
          alt="user Image"
          height={32}
          width={32}
          className="rounded-full"
        />
        <div className="pr-2 leading-5">
          <h3 className="font-bold">{user?.name}</h3>
          <LogoutLink />
        </div>
      </div>
    </header>
  );
};

export default Header;
