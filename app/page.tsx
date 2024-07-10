import Circle from "@/components/circle";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import NavBar from "@/components/nav-bar";
import Sections from "@/components/sections";

export default function Home() {
  return (
    <main className="relative w-screen overflow-hidden scroll-smooth">
      <div className="absolute top-0 h-screen w-screen overflow-hidden">
        <Circle className="absolute -right-64 opacity-0" />
        <Circle className="absolute -left-20 opacity-0" />
      </div>
      <Intro />
      <NavBar />
      <Hero />
      <Sections />
    </main>
  );
}
