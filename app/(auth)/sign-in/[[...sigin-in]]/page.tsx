"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import Link from "next/link";

const Signin = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();

  const signInWithEmail = async () => {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      setClerkError(err.errors[0]?.message || "An unexpected error occurred.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmail();
  };

  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4 text-center">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>
          {clerkError && (
            <p className="text-red-500 text-sm">{clerkError}</p>
          )}
<button
  type="submit"
  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center"
  disabled={isLoaded}
>
  {isLoaded ? (
    <>
      <svg
        className="animate-spin h-5 w-5 mr-3 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8H4z"
        ></path>
      </svg>
      Signing in...
    </>
  ) : (
    "Sign In"
  )}
</button>

         
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signin;
