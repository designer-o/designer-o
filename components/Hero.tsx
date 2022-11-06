import React from "react";
import Animation from "./Animation";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col items-start flex-grow justify-center relative">
      <div className="z-10">
        <p className="text-2xl font-medium">I ❤️ to</p>
        <h1 className="text-6xl sm:text-7xl 2xl:text-8xl font-semibold leading-tight mb-6">
          design
          <br />
          prototype
          <br />
          develop
          <br />
        </h1>
        <p className="text-2xl font-medium mb-8">
          my name is sirswa & i’m from India.
        </p>
        <div className="flex gap-3">
          <Button text={"see my work"} href={"#work"} />
          <a
            href="#about"
            className="px-10 rounded-full py-5 inline-block text-black font-medium text-2xl"
          >
            about me
          </a>
        </div>
      </div>
      <Animation />
    </div>
  );
};

export default Hero;
