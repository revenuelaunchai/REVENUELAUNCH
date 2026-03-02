"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-24 md:pt-14 md:pb-28 text-center">
      {/* Faded background image left side */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-full bg-no-repeat bg-left bg-contain opacity-5 mix-blend-screen pointer-events-none z-0"
        style={{
          backgroundImage: "url(https://revenuelaunch.ai/mis.png)",
          maskImage:
            "linear-gradient(to left, transparent 0%, black 50%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to left, transparent 0%, black 50%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="relative z-[2] mx-auto max-w-[1200px] px-6">
        {/* Logo */}
        <div className="h-[86px] md:h-[102px] w-auto mx-auto mb-6 md:mb-8 relative flex justify-center">
          <Image
            src="/logo.png"
            alt="RevenueLaunch"
            width={102}
            height={102}
            className="h-full w-auto object-contain"
            priority
          />
        </div>

        {/* Badge */}
        <div className="inline-block rounded-full border-2 border-[#00B8D4] bg-[rgba(0,184,212,0.1)] px-6 md:px-8 py-2.5 md:py-3 mb-8 backdrop-blur-sm shadow-[0_0_30px_rgba(0,184,212,0.3)]">
          <p className="text-[10px] md:text-[13px] font-bold uppercase tracking-[1.5px] md:tracking-[2px] text-[#00B8D4] whitespace-nowrap">
            {"Attention Businesses Doing $20K+/Month:"}
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-[28px] md:text-[64px] font-extrabold leading-[1.15] mb-8 max-w-[900px] mx-auto text-foreground">
          <span className="block">Your Business Needs Our</span>
          <span className="block">AI Revenue Systems</span>
          <span 
            className="block relative inline-block"
            style={{
              textShadow: "0 0 40px rgba(0,184,212,0.5), 0 0 80px rgba(0,184,212,0.3)",
            }}
          >
            <span className="relative z-10 text-[#00B8D4]">To Survive.</span>
            <span 
              className="absolute bottom-1 md:bottom-2 left-0 right-0 h-[3px] md:h-[4px] bg-[#00B8D4] rounded-full"
              style={{
                boxShadow: "0 0 20px rgba(0,184,212,0.8), 0 0 40px rgba(0,184,212,0.4)",
              }}
            />
          </span>
        </h1>

        {/* Sub text */}
        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-muted-foreground mt-8 mb-3">
          Watch this video to see how our proprietary AI scales brands to
          $100K+/month in 90 days
        </p>

        {/* Video Container - Wistia Embed (iframe fallback for better scroll compatibility) */}
        <div className="max-w-[900px] mx-auto rounded-lg overflow-hidden">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://fast.wistia.net/embed/iframe/0d1p1zikgy?seo=true&videoFoam=false"
              title="RevenueLaunch VSL"
              allow="autoplay; fullscreen"
              frameBorder="0"
              scrolling="no"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        {/* CTA */}
        <a
          href="#apply"
          className="inline-block mt-10 bg-foreground text-background px-10 md:px-16 py-5 text-base md:text-2xl font-bold rounded border-[3px] border-transparent transition-all hover:-translate-y-0.5 hover:border-[#00B8D4] hover:shadow-[0_0_40px_rgba(0,184,212,0.6),0_0_80px_rgba(0,184,212,0.3)]"
        >
          Schedule A Call
        </a>
      </div>
    </section>
  )
}
