import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-start flex-grow justify-center">
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
        <a
          href="#work"
          className="px-10 rounded-full py-5 inline-block bg-black text-white font-medium text-2xl"
        >
          see my work
        </a>
        <a
          href="#about"
          className="px-10 rounded-full py-5 inline-block text-black font-medium text-2xl"
        >
          about me
        </a>
      </div>
    </div>
  );
};

export default Hero;
