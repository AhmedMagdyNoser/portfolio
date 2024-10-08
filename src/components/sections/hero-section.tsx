import Image from "next/image";
import BlockQuote from "@/components/block-quote";

export default function HeroSection({ className = "" }: { className?: string }) {
  return (
    <section className={`section relative ${className}`}>
      <Image
        src="/imgs/spotlight.png"
        alt="Spotlight"
        fill
        priority={true}
        className="pointer-events-none absolute left-0 top-0 z-0 animate-fade object-cover"
      />

      {/* Content */}
      <div className="flex-center relative w-full flex-col gap-6 px-4">
        <Image
          src="/imgs/me.jpg"
          alt="Ahmed Magdy Profile Picture"
          width={180}
          height={180}
          priority={true}
          className="rounded-full border-[1.5px] border-gray-600"
          style={{ boxShadow: "0 0 75px 5px #eeeeff25, 0 0 15px 1px #eeeeff15" }}
        />

        <div className="flex-center flex-col gap-3">
          <h1 className="text-center text-3xl font-black tracking-tight text-white">Ahmed Magdy</h1>
          <p className="text-center text-sm text-gray-300">A Next.js | TypeScript Developer</p>
        </div>

        <BlockQuote className="flex-center my-2 px-8">
          <p className="text-center text-xl font-bold leading-[1.5] text-white md:text-2xl md:leading-[1.5]">
            Transforming Concepts into Seamless <span className="text-purple-300">User Experiences</span>
          </p>
        </BlockQuote>

        <a href="#about" className="basic-btn">
          Show my work 🚀
        </a>
      </div>
    </section>
  );
}
