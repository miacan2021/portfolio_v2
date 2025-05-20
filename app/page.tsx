import HeaderMenu from "./components/menu";

export default function Home() {
  return (
    <div className="bg-beige min-h-screen">
      <HeaderMenu />
      <h1 className="font-anton text-orange">Hello</h1>
      <p className="font-roboto text-sky">test</p>
    </div>
  );
}
