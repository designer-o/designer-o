import React from "react";
import Image from "next/image";

const Work = ({ data }: { data: any }) => {
  return (
    <div
      className="min-h-screen flex flex-col py-10 sm-py-0 justify-center"
      id="work"
    >
      <h2 className="text-6xl sm:text-7xl 2xl:text-8xl font-semibold leading-tight mb-16">
        recent work
      </h2>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
        {data.map((i: any) => (
          <Card key={i.id} src={i.images.hidpi} url={i.html_url} />
        ))}
      </div>
      <a
        href="https://dribbble.com/crazy4designs"
        target="_blank"
        className="px-10 rounded-full py-5 inline-block bg-black text-white font-medium text-2xl mt-10 text-center mx-auto"
      >
        see all work
      </a>
    </div>
  );
};

export default Work;

type cardType = {
  src: String;
  url: String;
};

const Card = (props: cardType) => {
  return (
    <a
      href={`${props.url}`}
      target="_blank"
      className="flex flex-col w-full p-4 rounded-2xl"
    >
      <div
        className="rounded-xl w-full relative overflow-hidden"
        style={{ aspectRatio: 4 / 3 }}
      >
        <Image
          className="scaleHover"
          src={`${props.src}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </a>
  );
};
