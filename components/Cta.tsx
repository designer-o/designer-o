import React from "react";

const Cta = () => {
  return (
    <>
      <div className="py-7 rounded-3xl bg-black flex items-center justify-center min-h-[600px] h-[50vh] my-16">
        <a
          href="#about"
          className="px-10 rounded-full py-5 inline-block text-black font-medium text-2xl bg-white"
        >
          want to discuss project
        </a>
      </div>
      <div className="text-white">footer</div>
    </>
  );
};

export default Cta;
