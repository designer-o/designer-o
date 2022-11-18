import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col py-10 sm-py-0 justify-center">
      <h2
        data-cursor-magnetic
        data-cursor-size="180px"
        className="text-6xl sm:text-7xl 2xl:text-8xl font-semibold leading-tight mb-16"
      >
        my skills
      </h2>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-14   items-center">
        {skillData.map((i) => (
          <Skill key={i.title} title={i.title} exp={i.exp} icon={i.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

type propsTypes = {
  title: String;
  exp: Number;
  icon: String;
};

const Skill = (props: propsTypes) => {
  const { ref, inView, entry } = useInView();

  return (
    <div className="flex gap-8 w-full items-center" ref={ref}>
      <Image src={`${props.icon}`} height={70} width={70} objectFit="contain" />

      <div className="flex flex-col w-full">
        <p className="text-2xl font-medium mb-4 leading-normal">
          {props.title}
        </p>
        <div className="bg-black/10 w-full h-2 rounded-full">
          <div
            className={`bg-black h-2 rounded-full ${
              inView && "animate-from-zero"
            }`}
            style={{ width: props.exp + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const skillData = [
  {
    title: "Figma",
    exp: 90,
    icon: "/icons/figma.svg",
  },
  {
    title: "Photoshop",
    exp: 60,
    icon: "/icons/adobe-photoshop.svg",
  },
  {
    title: "Illustrator",
    exp: 60,
    icon: "/icons/adobe-illustrator.svg",
  },
  {
    title: "HTML 5",
    exp: 90,
    icon: "/icons/html.svg",
  },
  {
    title: "CSS 3",
    exp: 95,
    icon: "/icons/css3.svg",
  },
  {
    title: "Bootstrap 5",
    exp: 95,
    icon: "/icons/bootstrap.svg",
  },
  {
    title: "Tailwind CSS",
    exp: 95,
    icon: "/icons/tailwind.svg",
  },
  {
    title: "Javascript",
    exp: 75,
    icon: "/icons/javascript.svg",
  },
  {
    title: "React",
    exp: 83,
    icon: "/icons/react.svg",
  },
  {
    title: "Next js",
    exp: 86,
    icon: "/icons/nextjs.svg",
  },
];
