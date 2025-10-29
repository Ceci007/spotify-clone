"use client"

import { useContext } from "react"
import Image from "next/image"
import { PlayerContext } from "@/layouts/FrontendLayout"

const Queue = () => {
  const context = useContext(PlayerContext);

  if(!context) {
    throw new Error("PlayerContext must be within a provider");
  }

  const { isQueueModalOpen } = context;

  if(!isQueueModalOpen) return null;

  return (
    <div className="fixed top-18 right-15 z-50 max-w-[300px] w-full h-[75vh] bg-black border p-4 overflow-y-auto rounded-md">
      <h2>Queue</h2>
      <div className="mt-8">
        <h2 className="text-white font-bold mb-3">Now Playing</h2>
        <div className="flex items-center gap-2 cursor-pointer mb-2 p-2 rounded-lg hover:bg-hover">
          <Image src="/images/cover-3.jpeg" alt="cover 3" width={300} height={300} className="w-10 h-10 object-cover rounded-md" />
          <div>
            <p className="text-primary font-semibold">Diamond</p>
            <p className="text-sm text-secondary-text">Solid</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-white font-bold mb-3">Queue List</h2>
        <div className="flex items-center gap-2 cursor-pointer mb-2 p-2 rounded-lg hover:bg-hover">
          <Image src="/images/cover-3.jpeg" alt="cover 3" width={300} height={300} className="w-10 h-10 object-cover rounded-md" />
          <div>
            <p className="text-white font-semibold">Diamond</p>
            <p className="text-sm text-secondary-text">Solid</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Queue