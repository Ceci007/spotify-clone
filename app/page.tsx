import AllSongs from "@/components/AllSongs";
import FrontendLayout from "@/layouts/FrontendLayout";

const Home = () => {
  return (
    <FrontendLayout>
      <div className="min-h-screen">
        <AllSongs />
      </div>
    </FrontendLayout>
  )
}

export default Home;
