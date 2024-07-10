"use client";

import { useGSAP } from "@gsap/react";
import Logo from "./logo";
import { ReactNode, useRef } from "react";
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ContentWrapper({
  hero,
  section1,
  section2,
  section3,
  section4,
  footer,
}: {
  hero?: ReactNode;
  section1?: ReactNode;
  section2?: ReactNode;
  section3?: ReactNode;
  section4?: ReactNode;
  footer?: ReactNode;
}) {
  const scope = useRef(null);
  useGSAP(
    () => {
      const stl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          scrub: 3,
          pin: true,
        },
      });

      stl
        .to(".hero", {
          opacity: 0,
          x: -25,
          y: 25,
          ease: "power1.inOut",
        })
        .to(".intro", { y: 6000, ease: "power1.inOut" })
        .to(".norte", { y: 0, ease: "power1.inOut" })
        .to(".section1", {
          opacity: 1,
          x: 0,
          ease: "power1.inOut",
        });

      const tl = gsap.timeline({ ease: Power1.easeInOut });

      tl.to(scope.current, { opacity: 1, duration: 0.3 })
        .to(".intro", {
          delay: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.inOut",
          opacity: 1,
        })
        .to(".intro", {
          scale: 280,
          duration: 2,
          delay: 1,
          ease: "power1.inOut",
        })
        .from(".hero", {
          opacity: 0,
          x: -25,
          y: 25,
          duration: 0.5,
          ease: "power1.inOut",
        });
    },
    { scope: scope },
  );
  return (
    <main
      ref={scope}
      className="bg relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden opacity-0"
    >
      <div className="norte absolute left-0 top-0 size-full -translate-y-[1000px] bg-blue" />
      <Logo className="intro left[50%] absolute top-[45%] z-0 origin-[43.2px] translate-y-[50px] opacity-0" />
      <div className="hero z-10 size-full">{hero}</div>
      <div className="section1 absolute left-0 top-0 flex size-full -translate-x-[25px] items-center justify-center opacity-0">
        {section1}
      </div>
    </main>
  );
}
