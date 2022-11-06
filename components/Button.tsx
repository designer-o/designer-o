import React from "react";
import { useRouter } from "next/router";

const Button = ({ text, href }: { text: String; href: string }) => {
  const router = useRouter();

  return (
    <>
      <button
        data-cursor-magnetic
        data-cursor-size="80px"
        onClick={() => router.push(encodeURI(href), href, { scroll: false })}
        className="px-10 rounded-full py-5 inline-block bg-black text-white font-medium text-2xl"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
