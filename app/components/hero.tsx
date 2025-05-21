import React from "react";
import Image from "next/image";
import myPic from "../../public/imgs/myphoto.png";
const Hero = () => {
  return (
    <div className="w-8/12 h-11/12 flex mx-auto">
      <div className="w-1/2">
        <h1>PORTFOLIO</h1>
      </div>

      <div className="bg-sky w-1/2 p-10 rounded-2xl flex flex-col justify-between items-center gap-4">
        <div className="flex justify-center items-center border-8 border-orange rounded-full w-60 h-60">
          <div className="bg-orange w-52 h-52 rounded-full">
            <Image
              src={myPic}
              alt="my image"
              className="w-72 h-72 object-cover"
            />
          </div>
        </div>
        <div className="font-roboto text-navy text-2xl">
          <h1 className="text-3xl">Hello I am</h1>
          <h1 className="font-anton text-6xl py-5">Shiho Kazama</h1>
          <h2>Front-end developer</h2>
          <h2>UI designer</h2>
          <h3>Based in Vancouver BC, Canada</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
