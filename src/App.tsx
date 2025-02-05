import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-primary w-screen min-h-screen overflow-x-hidden">
      <Header />
      <div className="pt-20 w-10/12 mx-auto flex justify-between items-center">
        <div>
          <div className="bg-orange rounded-2xl p-5 flex justify-between items-end">
            <h2 className="text-secoundary font-title text-2xl">01.works</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-primary rounded-2xl h-40 w-40 text-secoundary flex flex-col justify-center items-center gap-3 text-center">
                <h3 className="text-5xl font-bold font-title">2</h3>
                <p className="text-xl font-text">AI projects</p>
              </div>
              <div className="bg-primary rounded-2xl h-40 w-40 font-text text-secoundary flex flex-col justify-center items-center gap-3 text-center">
                <h3 className="text-5xl font-bold font-title">20+</h3>
                <p className="text-lg font-text leading-tight">
                  Professional projects
                </p>
              </div>
              <div className="bg-primary rounded-2xl h-40 w-40 font-text text-secoundary flex flex-col justify-center items-center gap-3 text-center">
                <h3 className="text-5xl font-bold font-title">6</h3>
                <p className="text-lg font-text leading-tight">
                  Organized tech events
                </p>
              </div>
              <div className="bg-primary rounded-2xl h-40 w-40 font-text text-secoundary flex flex-col justify-center items-center gap-3 text-center">
                <h3 className="text-5xl font-bold font-title">5</h3>
                <p className="text-lg font-text leading-tight">
                  Professional webdesign UI/UX projects
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-secoundary font-title text-[180px] tracking-tighter">
            Portfolio
          </h1>
        </div>
        <div className="bg-blue rounded-2xl p-12 text-secoundary">
          <img
            src="/src/assets/img/hero/photo-me.png"
            alt="myphoto"
            className="w-full h-full rounded-full"
          />
          <h1 className="font-text text-2xl">Hello, I am</h1>
          <h1 className=" font-title text-6xl pt-4">Shiho Kazama</h1>
          <h2 className="text-lg font-text pt-4">
            Front-end web developer <br /> UI/UX designer <br /> Based in
            Vancouver, BC
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
