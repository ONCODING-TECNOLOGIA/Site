import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function CTAButton({
  children,
  title,
  className,
}: {
  children: ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <button
      title={title}
      className={cn(
        "navItem relative z-10 flex w-fit items-center gap-4 overflow-hidden rounded-3xl border-[3px] border-solid border-yellow px-8 py-4 text-2xl text-white transition-all hover:text-black",
        className,
      )}
    >
      <div className="hover-effect absolute left-0 top-0 z-0 h-full w-full bg-white" />
      <div className="z-10 flex items-center gap-4">{children}</div>
    </button>
  );
}
