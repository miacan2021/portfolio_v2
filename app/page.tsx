import Hero from "./components/hero";
import HeaderMenu from "./components/menu";

export default function Home() {
  return (
    <div className="bg-beige min-h-screen">
      <HeaderMenu />
      <Hero />
    </div>
  );
}
