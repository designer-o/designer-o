import React from "react";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col py-10 sm-py-0 justify-center">
      <h2 className="text-6xl sm:text-7xl 2xl:text-8xl font-semibold leading-tight mb-16">
        my skills
      </h2>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        {skillData.map((i) => (
          <Skill key={i.title} title={i.title} exp={i.exp} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

type propsTypes = {
  title: String;
  exp: Number;
};

const Skill = (props: propsTypes) => {
  return (
    <div className="flex gap-4 w-full items-center">
      <div className="relative aspect-square w-1/4 rounded-lg overflow-hidden bg-black">
        {/* <Image src={"/photo.png"} layout="fill" objectFit="cover" /> */}
      </div>
      <div className="flex flex-col w-full">
        <p className="text-2xl font-medium mb-4 leading-normal">
          {props.title}
        </p>
        <div className="bg-black/10 w-full h-2 rounded-full">
          <div
            className="bg-black h-2 rounded-full"
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
    icon: "",
  },
  {
    title: "Photoshop",
    exp: 60,
    icon: "",
  },
  {
    title: "Illustrator",
    exp: 60,
    icon: "",
  },
  {
    title: "HTML 5",
    exp: 90,
    icon: "",
  },
  {
    title: "CSS 3",
    exp: 95,
    icon: "",
  },
  {
    title: "Bootstrap 5",
    exp: 95,
    icon: "",
  },
  {
    title: "Tailwind CSS",
    exp: 95,
    icon: "",
  },
  {
    title: "Javascript",
    exp: 75,
    icon: "",
  },
  {
    title: "React",
    exp: 83,
    icon: "",
  },
  {
    title: "Next js",
    exp: 86,
    icon: "",
  },
];
