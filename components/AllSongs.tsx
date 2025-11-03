"use client"

import Image from "next/image"
import { IoMdPlay } from "react-icons/io"
import { supabase } from "@/lib/SupabaseClient"
import { useQuery } from "@tanstack/react-query"
import { Song } from "@/types/song"

const AllSongs = () => {
  const getAllSongs = async () => {
    const { data, error } = await supabase.from("songs").select("*");

    if(error) {
      console.log("Error while fetching all songs: ", error.message);
    }

    return data;
  }

  const { data: songs, isLoading, error, isError } = useQuery({
    queryFn: getAllSongs,
    queryKey: ["allSongs"]
  });

  if(isLoading) {
    return (
      <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4">
        <h2 className="text-2xl text-white mb-3 font-semibold">New songs</h2>
        <h2 className="text-center text-white text-2xl">Loading</h2>
      </div>
    )
  }

  if(isError) {
    return (
      <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4">
        <h2 className="text-2xl text-white mb-3 font-semibold">New songs</h2>
        <h2 className="text-center text-white text-2xl">{error.message}</h2>
      </div>
    )
  }

  return (
    <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4">
      <h2 className="text-2xl text-white mb-3 font-semibold">New songs</h2>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {songs?.map((song: Song, index) => {
          return (
            <div className="relative bg-background p-3 cursor-pointer rounded-md hover:bg-hover group" key={song.id}>
              <button className="bg-primary w-12 h-12 rounded-full grid place-items-center absolute bottom-8 right-5 opacity-0 group-hover:opacity-100 group-hover:bottom-18 transition-all duration-300 ease-in-out cursor-pointer">
                <IoMdPlay />
              </button>
              <Image src={song.cover_image_url} alt={`${song.title} ${song.id}`} width={500} height={500} className="w-full h-50 object-cover rounded-md" />
              <div className="mt-2">
                <p className="text-primary-text font-semibold">{song.title}</p>
                <p className="text-secondary-text text-sm">By {song.artist}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllSongs