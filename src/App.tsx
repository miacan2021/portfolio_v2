import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mia.can2021@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="bg-primary w-screen min-h-screen overflow-x-hidden">
      <Header />
      <div className="pt-20 w-10/12 h-screen mx-auto flex justify-between items-start gap-20">
        <div className="w-1/2 h-full">
          <div className="bg-orange rounded-2xl p-5 flex justify-between items-end hover:transform hover:scale-101 transition-transform cursor-pointer">
            <h2 className="text-secoundary font-title text-2xl flex items-center">
              01.works
              <span className="material-symbols-outlined">arrow_right</span>
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-primary rounded-2xl h-40 w-40 text-secoundary flex flex-col justify-center items-center gap-3">
                <h3 className="text-5xl font-bold font-title">2</h3>
                <p className="text-xl font-text w-4/5">AI projects</p>
              </div>
              <div className="bg-primary rounded-2xl h-40 w-40 font-text text-secoundary flex flex-col justify-center items-center gap-3">
                <h3 className="text-5xl font-bold font-title">20+</h3>
                <p className="text-lg font-text leading-tight w-4/5">
                  Professional projects
                </p>
              </div>
              <div className="bg-primary rounded-2xl h-40 w-40 font-text text-secoundary flex flex-col justify-center items-center gap-3">
                <h3 className="text-5xl font-bold font-title">6</h3>
                <p className="text-lg font-text leading-tight w-4/5">
                  Organized tech events
                </p>
              </div>
              <div className="bg-primary rounded-2xl h-40 w-40 font-text text-secoundary flex flex-col justify-center items-center gap-3">
                <h3 className="text-5xl font-bold font-title">5</h3>

                <p className="text-lg font-text leading-tight w-4/5">
                  Professional webdesign UI/UX projects
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-5 h-40">
            <div className="flex items-end bg-blue rounded-2xl p-5 mt-5 w-1/2 hover:transform hover:scale-101 transition-transform cursor-pointer">
              <h2 className="text-secoundary font-title text-2xl flex items-center">
                02.about
                <span className="material-symbols-outlined">arrow_right</span>
              </h2>
            </div>
            <div className="flex items-end bg-blue rounded-2xl p-5 mt-5 w-1/2 hover:transform hover:scale-101 transition-transform cursor-pointer">
              <h2 className="text-secoundary font-title text-2xl flex items-center">
                03.contact
                <span className="material-symbols-outlined">arrow_right</span>
              </h2>
            </div>
          </div>

          <h1 className="text-secoundary font-title text-[180px] tracking-tighter">
            Portfolio
          </h1>
        </div>
        <div className="w-1/2 h-10/11 flex flex-col items-center bg-blue rounded-2xl py-12 px-32 text-secoundary">
          <img
            src="/src/assets/img/hero/photo-me.png"
            alt="myphoto"
            className=" w-auto h-auto rounded-full"
          />
          <div className="flex flex-col items-left justify-center">
            <h1 className="font-text text-2xl pt-5">Hello, I am</h1>
            <h1 className=" font-title text-6xl pt-4">Shiho Kazama</h1>
            <h2 className="text-lg font-text pt-4 pb-4">
              Front-end web developer <br /> UI/UX designer <br /> Based in
              Vancouver, BC
            </h2>
            <button
              onClick={() => copyEmail()}
              className="w-2/3 bg-secoundary text-primary px-3 py-2 rounded-full text-center cursor-pointer hover:bg-primary hover:text-secoundary"
            >
              {isCopied ? "copied! yay!!" : "copy e-mail address"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
