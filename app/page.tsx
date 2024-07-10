import Hero from "@/components/hero";
import Intro from "@/components/intro";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden scroll-smooth">
      <Intro />
      <NavBar />
      <Hero />
    </main>
  );
}
