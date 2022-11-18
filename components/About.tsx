import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div
      className="grid grid-col-1 lg:grid-cols-2 min-h-screen items-center py-10 sm-py-0"
      id="about"
    >
      <div className="lg:max-w-[80%]">
        <h2
          data-cursor-magnetic
          data-cursor-size="180px"
          className="text-6xl sm:text-7xl 2xl:text-8xl font-semibold leading-tight mb-6"
        >
          about me
        </h2>
        <p className="text-xl lg:text-2xl font-medium mb-8 leading-normal">
          A UX Designer and Front-end Developer with a keen eye for detail, who
          brings creativity to life. I love designing and developing beautiful
          user interfaces and intuitive user experiences. I have been a designer
          for 4 years and have worked with many clients. I've been specializing
          in developing great UI design for e-commerce, online web services (web
          apps/SaaS), corporate websites, and landing pages. Additionally, I'm
          able to produce presentation design, ad. banners, and mobile UI/UX
          (iOS, Android both).
        </p>
      </div>
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden">
        <Image src={"/photo.png"} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default About;
