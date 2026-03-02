import Script from "next/script"

const STEPS = [
  {
    num: 1,
    title: "Book Your Strategy Call",
    description:
      "We audit your business and map out the fastest path to more revenue",
  },
  {
    num: 2,
    title: "We Build & Deploy AI Systems",
    description:
      "From Meta ad campaigns to sales calls, we handle everything for you with AI",
  },
  {
    num: 3,
    title: "Scale Beyond Measures",
    description:
      "Sit back while your business generates revenue 24/7 without you",
  },
]

export function CtaSection() {
  return (
    <section className="pt-16 md:pt-24 pb-0 text-center relative" id="apply">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-10 text-balance">
          Launch Revenue in 3 Simple Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 md:p-10 backdrop-blur-sm transition-all duration-400 cursor-pointer relative overflow-hidden hover:-translate-y-2 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,184,212,0.5)] hover:border-[rgba(0,184,212,0.7)] hover:bg-[rgba(0,184,212,0.08)]"
            >
              <div className="absolute -right-2 -bottom-5 text-[120px] font-black text-[rgba(255,255,255,0.06)] leading-none pointer-events-none select-none">
                {step.num}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 relative z-[1]">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#ccc] leading-relaxed relative z-[1]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cal.com inline widget */}
        <div className="w-full max-w-[860px] mx-auto rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] bg-white">
          <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-30min" />
        </div>
        <Script
          src="https://app.cal.com/embed/embed.js"
          strategy="lazyOnload"
          onLoad={() => {
            // @ts-ignore
            const Cal = window.Cal;
            Cal("init", "30min", { origin: "https://app.cal.com" });
            Cal.ns["30min"]("inline", {
              elementOrSelector: "#my-cal-inline-30min",
              config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
              calLink: "revenuelaunch.ai/30min",
            });
            Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
          }}
        />
      </div>
    </section>
  )
}
