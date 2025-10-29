"use client"

import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react"
import MusicPlayer from "@/components/MusicPlayer"
import Navbar from "@/components/Navbar"
import Queue from "@/components/Queue"
import Sidebar from "@/components/Sidebar"

type PlayerContextType = {
  isQueueModalOpen: boolean;
  setIsQueueModalOpen: Dispatch<SetStateAction<boolean>>
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

const FrontendLayout = ({children}: Readonly<{ children: ReactNode }>) => {
  const [isQueueModalOpen, setIsQueueModalOpen] = useState(false);

  return (
    <PlayerContext.Provider value={{ isQueueModalOpen, setIsQueueModalOpen }}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Sidebar />
          <Queue />
          <MusicPlayer />
          {children}
        </main>
      </div>
    </PlayerContext.Provider>
  )
}

export default FrontendLayout