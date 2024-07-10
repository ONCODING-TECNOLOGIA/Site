"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function NavBar() {
  const scope = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".logo, li, button", {
        y: -50,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        ease: "power1.out",
      });
    },
    { scope: scope },
  );
  return (
    <div
      ref={scope}
      className="container sticky top-0 z-50 flex items-center justify-between py-4"
    >
      <div className="logo relative h-[22px] w-[145px]">
        <Image
          src="/logo-oncoding.svg"
          fill
          className="object-fit"
          alt="Oncoding"
        />
      </div>
      <nav className="flex items-center gap-9">
        <ul className="flex items-center gap-8 text-white">
          <NavItem href="#" text="equipe" />
          <NavItem href="#" text="serviços" />
        </ul>
        <Contato />
      </nav>
    </div>
  );
}

function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <li className="navItem flex cursor-pointer flex-col items-center justify-center">
      {text}
      <div className="hover-effect h-[2px] w-full bg-white transition-all" />
    </li>
  );
}

function Contato() {
  return (
    <button
      title="contato"
      className="navItem relative overflow-hidden rounded-2xl border-2 border-dashed border-white px-4 py-2 text-white hover:text-black"
    >
      Contato
      <div className="hover-effect absolute left-0 top-0 -z-10 h-full w-full bg-white" />
    </button>
  );
}
