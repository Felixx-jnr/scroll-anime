import Header from "./components/Header";
import { Hero } from "./components/section/hero";

import "./index.css";
import { Usps } from "./components/section/usps";
import { VideoCarousel } from "./components/section/videoCarousel";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className=" bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]"></div>
      </main>
    </>
  );
}

export default App;
