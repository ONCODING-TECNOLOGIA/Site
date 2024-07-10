"use client";
import { ArrowUpRight } from "lucide-react";

import CTAButton from "./cta-button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import Circle from "./circle";

export default function Hero() {
  const scope = useRef(null);
  useGSAP(
    () => {
      gsap.to(".text-bg", {
        backgroundPositionX: -600,
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".circle", {
        rotation: -360,
        duration: 300,
        repeat: -1,
        ease: "none",
      });
      gsap.from(".enter", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power1.inOut",
      });
    },
    { scope: scope },
  );
  return (
    <section className="relative h-screen overflow-hidden" ref={scope}>
      <div className="container flex h-full flex-col justify-center gap-8 text-white">
        <h1 className="enter flex gap-6 text-5xl font-bold">
          ARTE E{" "}
          <div className="text-bg bg-gradient-to-r from-green via-yellow to-green bg-[length:200%] bg-clip-text text-transparent">
            TECNOLOGIA
          </div>
        </h1>
        <h2 className="enter text-2xl">
          {">>======> { Um aliado inovador para o sucesso }"}
        </h2>
        <span className="enter">
          <CTAButton className="mt-10" title="Conheça nossos serviços">
            conheça nossos serviços <ArrowUpRight />
          </CTAButton>
        </span>
      </div>
      {/* <Circle className="circle absolute -bottom-[25%] -right-[25%] scale-125 opacity-80" /> */}
    </section>
  );
}
