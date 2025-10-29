import AllSongs from "@/components/AllSongs";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Sidebar />
        <MusicPlayer />
        <AllSongs />
      </main>
    </div>
  )
}

export default Home;
