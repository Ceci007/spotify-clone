"use client"

import { useState, FormEvent } from "react";
import Image from "next/image"
import Link from "next/link"
import loginUser from "@/lib/auth/loginUser";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if(!email.trim() || !password.trim()) {
      setMessage("All fields are required");
      return;
    }

    const result = await loginUser(email, password);

    if(result?.error) {
      setMessage(result.error);
    } else {
      setMessage("Login successful");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center w-full bg-hover">
      <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
        <Image src="/images/logo.png" alt="logo" width={300} height={300} className="w-11 h-11" />
        <h2 className="text-2xl font-bold text-white my-2 mb-8 text-center">Log In to Spotify</h2>
        <form onSubmit={handleLogin}>
          {message && <p className="bg-primary font-semibold text-center mb-4 py-1">{message}</p>}
          <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Your Email" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Your Password" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <button className="bg-primary py-3 rounded-full w-full font-bold cursor-pointer">Continue</button>
          <div className="text-secondary-text text-center my-6">
            <span>Don&apos;t have an account?</span>
            <Link href="/signup" className="ml-2 text-white underline hover:text-primary">Sign Up now</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page