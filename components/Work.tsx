import React from "react";
import Image from "next/image";
import Button from "./Button";

const Work = ({ data }: { data: any }) => {
  return (
    <div
      className="min-h-screen flex flex-col py-10 sm-py-0 items-center"
      id="work"
    >
      <h2
        data-cursor-magnetic
        data-cursor-size="180px"
        className="text-6xl self-start sm:text-7xl 2xl:text-8xl font-semibold leading-tight mb-16"
      >
        recent work
      </h2>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
        {data.map((i: any) => (
          <Card key={i.id} src={i.images.hidpi} url={i.html_url} />
        ))}
      </div>
      <Button
        text={"see all work"}
        href={"https://dribbble.com/crazy4designs"}
      />
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
      className="flex flex-col w-full p-4 rounded-2xl para"
    >
      <div
        className="rounded-xl w-full relative overflow-hidden"
        style={{ aspectRatio: 4 / 3 }}
      >
        <Image
          className="scaleHover"
          src={`${props.src}`}
          width={445}
          height={334}
          objectFit="cover"
        />
      </div>
    </a>
  );
};
