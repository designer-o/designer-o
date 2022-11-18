import React from "react";

const Cta = () => {
  return (
    <>
      <div className="py-7 rounded-3xl bg-black flex items-center justify-center min-h-[600px] h-[50vh] my-16">
        <a
          data-cursor-magnetic
          data-cursor-size="180px"
          href="mailto:crazy4designes@gmail.com?subject=I%20would%20like%20to%20hire%20you%20as%20my%20designer%2Fdeveloper&body=Hlo%2C%20Let's%20discuss%20on%20a%20cool%20project."
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
