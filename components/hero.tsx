"use client";
import { ArrowUpRight } from "lucide-react";

import CTAButton from "./cta-button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

export default function Hero() {
  const scope = useRef(null);
  useGSAP(
    () => {
      gsap.to(scope.current, { opacity: 1, delay: 2 });
      gsap.to(".text-bg", {
        backgroundPositionX: -600,
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.from(".enter", {
        delay: 2.5,
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power1.inOut",
      });
      gsap.from(".circle", {
        opacity: 0,
        delay: 4,
        duration: 2,
        ease: "power1.inOut",
      });
      gsap.to(".circle", {
        repeat: -1,
        ease: "none",
        rotate: 360,
        duration: 500,
      });
    },
    { scope: scope },
  );
  return (
    <section
      className="relative -m-[38px] h-screen w-full shrink-0 opacity-0"
      ref={scope}
    >
      <div className="container flex h-full min-w-max flex-col items-start justify-center gap-8 text-white">
        <h1 className="enter flex shrink-0 translate-x-16 gap-6 text-5xl font-bold">
          CRIATIVIDADE E{" "}
          <div className="text-bg -mt-2 shrink-0 bg-gradient-to-r from-green via-yellow to-green bg-[length:200%] bg-clip-text text-8xl text-transparent">
            TECNOLOGIA
          </div>
        </h1>
        <h2 className="enter -mb-12 shrink-0 text-2xl">
          {">>======> { Seus novos aliados para o sucesso }"}
        </h2>
        <span className="enter shrink-0 -translate-x-16">
          <CTAButton className="mt-10" title="Conheça nossos serviços">
            conheça nossos serviços <ArrowUpRight />
          </CTAButton>
        </span>
      </div>
    </section>
  );
}
