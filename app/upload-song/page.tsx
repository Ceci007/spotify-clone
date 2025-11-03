"use client"

import { FormEvent, useEffect, useState } from "react"
import Image from "next/image"
import { supabase } from "@/lib/SupabaseClient";
import { useRouter } from "next/navigation";
import useUserSession from "@/custom-hooks/useUserSession";

const Page = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const {session} = useUserSession();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/");
      } else {
        setPageLoading(false);
      }
    });
  }, [router]);

  if(pageLoading) return null;

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if(!title.trim() || !artist.trim() || !audioFile || !imageFile) {
      setMessage("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const timestamp = Date.now();
      const imagepath = `images/${timestamp}_${imageFile.name}`;
      const { error: imgError } = await supabase.storage
        .from("cover-images")
        .upload(imagepath, imageFile);

      if (imgError) {
        setMessage(imgError.message);
        console.log("Image Error: " + imgError.message);
        setLoading(false);
        return;
      }

      const {
        data: { publicUrl: imageUrl },
      } = supabase.storage.from("cover-images").getPublicUrl(imagepath);

      const audioPath = `audio/${timestamp}_${audioFile.name}`;
      const { error: audioError } = await supabase.storage
        .from("songs")
        .upload(audioPath, audioFile);

      if (audioError) {
        setMessage(audioError.message);
        console.log("Audio Error:" + audioError.message);
        setLoading(false);
        return;
      }

      const {
        data: { publicUrl: audioUrl },
      } = supabase.storage.from("songs").getPublicUrl(audioPath);

      const { error: dbError } = await supabase.from("songs").insert({
        title,
        artist,        
        cover_image_url: imageUrl,
        audio_url: audioUrl,
        user_id: session?.user.id,
      });

      if (dbError) {
        setMessage(dbError.message);
        console.log("Table Error:" + dbError.message);
        setLoading(false);
        return;
      }

      setTitle("");
      setArtist("");
      setImageFile(null);
      setAudioFile(null);
      setMessage("Song uploaded successfully!");
      setLoading(false);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch(err) {
      console.log("Catched error: ", err);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center w-full bg-hover">
      <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
        <Image src="/images/logo.png" alt="logo" width={300} height={300} className="w-11 h-11" />
        <h2 className="text-2xl font-bold text-white my-2 mb-8 text-center">Upload to Spotify</h2>
        <form onSubmit={handleUpload}>
        {message && <p className="bg-primary font-semibold text-center mb-4 py-1">{message}</p>}
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <label htmlFor="audio" className="block py-2 text-secondary-text">Audio</label>
          <input 
            accept="audio/*"
            id="audio" 
            type="file" 
            onChange={(e) => {
              const files = e.target.files;

              if(!files) return;

              const file = files[0];
              setAudioFile(file);
            }} 
            className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" 
          />
          <label htmlFor="cover" className="block py-2 text-secondary-text">Cover Image</label>
          <input 
            accept="images/*"
            id="cover" 
            type="file" 
            onChange={(e) => {
              const files = e.target.files;

              if(!files) return;

              const file = files[0];
              setImageFile(file);
            }}
            className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" 
          />
          {loading ? 
          <button className="bg-primary py-3 rounded-full w-full font-bold cursor-pointer">Uploading...</button> :
          <button className="bg-primary py-3 rounded-full w-full font-bold cursor-pointer">Add Song</button>
          }
        </form>
      </div>
    </div>
  )
}

export default Page