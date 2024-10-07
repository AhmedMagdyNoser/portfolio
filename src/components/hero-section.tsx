import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex-center relative min-h-screen bg-gradient-to-b from-[#000218] to-[#0a0a0a] py-10">
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
          alt="Ahmed Magdy"
          width={180}
          height={180}
          priority={true}
          className="rounded-full border border-gray-600"
          style={{ boxShadow: "0 0 75px 5px #eeeeff25, 0 0 15px 1px #eeeeff15" }}
        />

        <div className="flex-center flex-col gap-3">
          <h1 className="text-center text-3xl font-extrabold tracking-tighter text-white">Ahmed Magdy</h1>
          <p className="md:text-bse text-center text-sm text-gray-300">A Next.js | TypeScript developer</p>
        </div>

        <blockquote className="relative my-2 w-[560px] max-w-full rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-transparent p-6 text-center">
          <svg className="absolute -top-5 left-2 size-10 text-gray-100 opacity-75" viewBox="0 0 16 16">
            <path
              d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="text-center text-xl font-bold leading-[1.45] text-white md:text-3xl md:leading-[1.45]">
            Transforming Concepts into Seamless <span className="text-purple-300">User Experiences</span>
          </span>
        </blockquote>

        <button className="flex-center rounded-xl border border-gray-800 bg-gray-950 px-6 py-3 text-white transition-colors duration-[350ms] hover:bg-gray-800">
          Show my work
        </button>
      </div>
    </section>
  );
}
