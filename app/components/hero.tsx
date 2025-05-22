import React from "react";
import Image from "next/image";
import myPic from "../../public/imgs/myphoto.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Hero = () => {
  return (
    <div className="w-8/12 h-screen flex mx-auto gap-4">
      <div className="w-1/2">
        <div className="bg-orange p-4 rounded-2xl w-full grid grid-cols-2 justify-items-center items-center gap-4">
          <div className="bg-beige w-32 h-32">sample</div>
          <div className="bg-beige w-32 h-32">sample</div>
          <div className="bg-beige w-32 h-32">sample</div>
          <div className="bg-beige w-32 h-32">sample</div>
        </div>
        <div className="flex justify-between gap-4 items-center pt-4">
          <div className="bg-sky rounded-2xl w-1/2 h-32">about</div>
          <div className="bg-sky rounded-2xl w-1/2 h-32">contact</div>
        </div>
        <h1 className="text-9xl font-anton leading-tight text-navy">
          Portfolio
        </h1>
      </div>

      <div className="bg-sky relative w-1/2 h-9/12 p-10 rounded-2xl flex flex-col justify-between items-center">
        <div className="flex justify-center items-center border-8 border-orange rounded-full w-72 h-72">
          <div className="bg-orange w-64 h-64 rounded-full">
            <Image
              src={myPic}
              alt="my image"
              className="w-80 h-80 object-cover"
            />
          </div>
        </div>
        <div className="font-roboto text-navy text-xl">
          <h1 className="text-2xl">Hello I am</h1>
          <h1 className="font-anton text-6xl py-5">Shiho Kazama</h1>
          <h2>Front-end developer</h2>
          <h2>UI designer</h2>
          <h3>Based in Vancouver BC, Canada</h3>
          <button>Copy Email</button>
        </div>
        <div className="bg-beige absolute -right-3 -bottom-3 w-32 h-32 rounded-2xl text-navy flex flex-col justify-center items-center gap-4">
          <p className="text-lg">scroll</p>
          <ArrowDownwardIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
