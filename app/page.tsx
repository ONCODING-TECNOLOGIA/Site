import ContentWrapper from "@/components/content-wrapper";
import Hero from "@/components/hero";
import NavBar from "@/components/nav-bar";
import Section1 from "@/components/section1";

export default function Home() {
  return (
    <ContentWrapper
      hero={
        <>
          <NavBar />
          <Hero />
        </>
      }
      section1={<Section1 />}
    ></ContentWrapper>
  );
}
