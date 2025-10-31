"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { supabase } from "@/lib/SupabaseClient";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/");
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  if(loading) return null;

  return (
    <div className="h-screen flex justify-center items-center w-full bg-hover">
      <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
        <Image src="/images/logo.png" alt="logo" width={300} height={300} className="w-11 h-11" />
        <h2 className="text-2xl font-bold text-white my-2 mb-8 text-center">Upload to Spotify</h2>
        <form>
          <input type="text" placeholder="Title" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <input type="text" placeholder="Artist" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <label htmlFor="audio" className="block py-2 text-secondary-text">Audio</label>
          <input id="audio" type="file" placeholder="Artist" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <label htmlFor="cover" className="block py-2 text-secondary-text">Cover Image</label>
          <input id="cover" type="file" placeholder="Artist" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <button className="bg-primary py-3 rounded-full w-full font-bold cursor-pointer">Add Song</button>
        </form>
      </div>
    </div>
  )
}

export default Page