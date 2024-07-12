"use client";
import React, { useRef } from "react";
import Section1 from "./section1";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section2 from "./section2";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const sections = [
  { sectionContent: <Section1 />, bg: "bg-blue" },
  { sectionContent: <Section2 />, bg: "bg-green" },
  { sectionContent: <Section1 />, bg: "bg-yellow" },
  { sectionContent: <Section1 />, bg: "bg-red" },
];

export default function Sections() {
  const scope = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 10 },
        scrollTrigger: {
          trigger: scope.current,
          end: "=+8000",
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
      {sections.map(({ sectionContent, bg }, index) => (
        <section
          key={index}
          className={cn(
            "section" + (index + 1),
            "absolute flex size-full items-center justify-center",
            bg,
          )}
        >
          {sectionContent}
        </section>
      ))}
    </div>
  );
}
