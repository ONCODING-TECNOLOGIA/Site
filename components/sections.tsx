"use client";
import React, { useRef } from "react";
import Section1 from "./section1";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Sections() {
  const scope = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 10 },
        scrollTrigger: {
          trigger: scope.current,
          scrub: true,
          pin: true,
          snap: "labels",
        },
      });

      tl.addLabel("section1")
        .from(".section2", { xPercent: 100 })
        .addLabel("section2")
        .from(".section3", { yPercent: 100 })
        .addLabel("section3")
        .from(".section4", { xPercent: -100 })
        .addLabel("section4");
    },
    { scope: scope },
  );
  return (
    <div ref={scope} className="relative h-screen w-full">
      <div className="section1 flex size-full items-center justify-center bg-blue">
        <Section1 />
      </div>
      <div className="section2 absolute top-0 flex size-full items-center justify-center bg-green">
        <Section1 />
      </div>
      <div className="section3 absolute top-0 flex size-full items-center justify-center bg-yellow">
        <Section1 />
      </div>
      <div className="section4 absolute top-0 flex size-full items-center justify-center bg-red">
        <Section1 />
      </div>
    </div>
  );
}
