import ReynaAboutPhoto from "../assets/reyna-about-img.jpeg";
import { useState, useEffect } from "react";

function About() {
  const [fadeIn, setFadeIn] = useState(false);
  const [imageMoveIn, setImageMoveIn] = useState(false);

  useEffect(() => {
    setImageMoveIn(true);
  }, []);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="container min-h-screen  mx-auto p-6 mt-8">
      <h1 className="text-3xl mb-4 font-light text-center sm:text-left">
        Reyna Nunez
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`sm:ml-0 ml-20 mb-4 text-lg ${
            imageMoveIn
              ? "transform translate-x-0 opacity-100 transition-transform duration-1000 ease-out"
              : "transform -translate-x-full opacity-0"
          }`}
        >
          <img
            src={ReynaAboutPhoto}
            alt="Reyna Nunez"
            className="w-[75%] rounded-xl border-8 border-blue-400"
          />
        </div>
        <div
          className={`text-container ${
            fadeIn ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 ease-in-out`}
        >
          <p className="text-lg">
            Reyna Nunez is a talented Mexican American photographer known for
            her breathtaking nature photography. With a passion for capturing
            the beauty of the natural world, Reyna's work is a visual
            celebration of the diverse landscapes found in the United States.
          </p>
          <p className="text-lg mt-4">
            Her keen eye for detail and her ability to play with light and
            composition result in stunning photographs that transport viewers to
            serene, natural settings. Reyna's work is a testament to her love
            for the outdoors and her dedication to showcasing the importance of
            preserving our environment.
          </p>
          <p className="text-lg mt-4">
            I believe that through photography, we can gain a deeper
            appreciation for the environment and the importance of preserving
            it. My work seeks to inspire others to connect with nature, explore
            the great outdoors, and join the global efforts to protect our
            planet.
          </p>
          <p className="text-lg mt-4">
            Thank you for visiting my portfolio. I hope you enjoy my photography
            as much as I enjoy creating it. If you have any questions or would
            like to collaborate on a project, please don't hesitate to reach
            out. Let's explore the world together, one photograph at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
