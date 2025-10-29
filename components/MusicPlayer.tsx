"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { IoMdPause, IoMdPlay, IoMdSkipBackward, IoMdSkipForward, IoMdVolumeHigh } from "react-icons/io"
import { LuRepeat1 } from "react-icons/lu"
import { MdOutlineQueueMusic } from "react-icons/md"

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayButton = () => {
    if(!audioRef.current) return;

    if(isPlaying) {
      audioRef.current.pause(); 
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white px-4 py-3 shadow-md z-50">
      <audio src="/audio/bailando-bachata.mp3" controls ref={audioRef}></audio>
      <div className="max-w-8xl w-[95%] mx-auto flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image src="/images/cover-2.jpeg" alt="cover 2" width={300} height={300} className="w-13 h-13 object-cover rounded-md" />
          <div className="text-sm">
            <p className="text-white">Bicycle</p>
            <p className="text-secondary-text font-normal">Emmanuel</p>
          </div>
        </div>
        <div className="max-w-[400px] w-full flex items-center flex-col gap-3">
          <div className="flex gap-4">
            <button className="text-xl text-secondary-text">
              <IoMdSkipBackward />
            </button>
            <button 
              className="bg-white text-xl text-black w-10 h-10 rounded-full grid place-items-center"
              onClick={togglePlayButton}
            >
              {isPlaying ? <IoMdPause /> : <IoMdPlay />}
            </button>
            <button className="text-xl text-secondary-text">
              <IoMdSkipForward />
            </button>
          </div>
          <div className="w-full flex justify-center items-center gap-2">
            <span className="text-secondary-text font-normal text-sm">1:45</span>
            <div className="w-full">
              <input type="range" min="0" max="" className="w-full outline-none h-1 bg-zinc-700 rounded-md appearance-none accent-white" />
            </div>
            <span className="text-secondary-text font-normal text-sm">3:45</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <button>
              <LuRepeat1 />
            </button>
            <button className="text-secondary-text text-xl cursor-pointer">
              <MdOutlineQueueMusic />
            </button>
            <button className="text-secondary-text text-xl cursor-pointer">
              <IoMdVolumeHigh />
            </button>
            <input type="range" min="0" max="100" className="w-[100px] outline-none h-1 bg-zinc-700 accent-white appearance-none" />
          </div>
      </div>
    </div>
  )
}

export default MusicPlayer