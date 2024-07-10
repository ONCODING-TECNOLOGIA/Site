"use client";
import React, { useRef } from "react";
import Section1 from "./section1";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Sections({ className }: { className: string }) {
  const scope = useRef(null);
  useGSAP(
    () => {
      let sections = gsap.utils.toArray<HTMLElement>(".section");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          scrub: true,
          pin: true,
          snap: 1 / (sections.length - 1),
        },
      });

      tl.from(sections[1], { duration: 3, opacity: 0, xPercent: 100 })
        .from(sections[2], { duration: 3, opacity: 0, yPercent: 100 })
        .from(sections[3], { duration: 3, opacity: 0, xPercent: -100 });
    },
    { scope: scope },
  );
  return (
    <div ref={scope} className="size-full">
      <div className="section z-20 flex size-full items-center justify-center bg-blue">
        <Section1 />
      </div>
      <div className="section z-30 flex size-full items-center justify-center bg-green">
        <Section1 />
      </div>
      <div className="section z-40 flex size-full items-center justify-center bg-yellow">
        <Section1 />
      </div>
      <div className="section z-50 flex size-full items-center justify-center bg-red">
        <Section1 />
      </div>
    </div>
  );
}
