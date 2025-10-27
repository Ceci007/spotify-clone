import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Sidebar />
      </main>
    </div>
  )
}

export default Home;
