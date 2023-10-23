import PhotoGallery from "../components/PhotoGallery";

function Home() {
  return (
    <main className="bg-blue-200 p-6 min-h-screen sm:h-full">
      <h1 className="text-center text-white text-4xl font-thin">My Gallery</h1>
      <PhotoGallery />
    </main>
  );
}

export default Home;
