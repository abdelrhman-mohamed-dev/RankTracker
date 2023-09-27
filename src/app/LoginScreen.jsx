"use client";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import HeaderTitle from "./components/HeaderTitle";

const LoginScreen = () => {
  return (
    <main className="bg-white mt-8 max-w-md border mx-auto rounded-xl p-4 py-6 border-blue-100 border-b-4 text-center">
      <HeaderTitle
        preTitle={"Welcome back"}
        mainTitle={"Login to your account"}
      />
      <button
        onClick={() => signIn("google")}
        className="mb-4 bg-indigo-500 text-white px-6 py-2 rounded-xl border border-indigo-700 border-b-4 inline-flex gap-2 items-center"
      >
        <Image
          className="invert"
          src={"https://www.svgrepo.com/show/50809/google.svg"}
          alt="google icon"
          height={16}
          width={16}
        />
        Login with Google
      </button>
    </main>
  );
};

export default LoginScreen;
