"use client";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const LoginScreen = () => {
  return (
    <main className="bg-white mt-8 max-w-md border mx-auto rounded-xl p-4 border-blue-100 border-b-4 text-center">
      <h2 className="text-gray-300 text-lg uppercase">Welcome back</h2>
      <h1 className="font-bold text-3xl mb-4">Login to your account</h1>
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
