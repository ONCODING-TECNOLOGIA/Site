"use client";
import { ArrowUpRight } from "lucide-react";

import CTAButton from "./cta-button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

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
        delay: 2,
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
    <section className="h-screen w-full shrink-0 opacity-0" ref={scope}>
      <div className="container flex h-full min-w-max flex-col items-start justify-center gap-8 text-white">
        <h1 className="enter flex shrink-0 gap-6 text-5xl font-bold">
          CRIATIVIDADE E{" "}
          <div className="text-bg shrink-0 bg-gradient-to-r from-green via-yellow to-green bg-[length:200%] bg-clip-text text-transparent">
            TECNOLOGIA
          </div>
        </h1>
        <h2 className="enter shrink-0 text-2xl">
          {">>======> { Seus novos aliados para o sucesso }"}
        </h2>
        <span className="enter shrink-0">
          <CTAButton className="mt-10" title="Conheça nossos serviços">
            conheça nossos serviços <ArrowUpRight />
          </CTAButton>
        </span>
      </div>
    </section>
  );
}
