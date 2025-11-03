"use client"

import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react"
import MusicPlayer from "@/components/MusicPlayer"
import Navbar from "@/components/Navbar"
import Queue from "@/components/Queue"
import Sidebar from "@/components/Sidebar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

type PlayerContextType = {
  isQueueModalOpen: boolean;
  setIsQueueModalOpen: Dispatch<SetStateAction<boolean>>
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

const FrontendLayout = ({children}: Readonly<{ children: ReactNode }>) => {
  const queryclient = new QueryClient();
  const [isQueueModalOpen, setIsQueueModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryclient}>
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
    </QueryClientProvider>
  )
}

export default FrontendLayout