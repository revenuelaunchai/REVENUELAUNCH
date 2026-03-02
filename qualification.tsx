import { Check, X } from "lucide-react"

const FOR_YOU = [
  <>Your business is already generating at least <strong className="text-foreground">$20K per month</strong> in revenue</>,
  "You have a validated product or service that customers are already buying",
  "Growth feels inconsistent, unpredictable, or dependent on constant effort",
  "You want to scale without hiring a massive team",
  "You are spending money on marketing but not getting predictable returns",
  "You are open to replacing manual processes with automated systems",
  "You want a business that runs on infrastructure \u2014 not daily hustle",
]

const NOT_FOR_YOU = [
  "You are just starting out or still searching for a business idea",
  "Your business is not yet generating consistent revenue",
  "You are not prepared to invest in growth infrastructure",
  "You want overnight results without building systems",
  "You believe more effort alone will solve scaling problems",
  "You are unwilling to change how your marketing or operations currently work",
  "You are comfortable staying at your current level",
]

export function Qualification() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 relative overflow-hidden">
      {/* Faded background image right side */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-full bg-no-repeat bg-right bg-contain opacity-[0.35] mix-blend-screen pointer-events-none z-0"
        style={{
          backgroundImage: "url(https://revenuelaunch.ai/dubai.jpg)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 50%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 50%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-6 relative z-[1]">
        {/* CTA button */}
        <div className="text-center mb-12">
          <a
            href="#apply"
            className="inline-block bg-foreground text-background px-10 md:px-16 py-5 text-base md:text-2xl font-bold rounded border-[3px] border-transparent transition-all hover:-translate-y-0.5 hover:border-[#00B8D4] hover:shadow-[0_0_40px_rgba(0,184,212,0.6),0_0_80px_rgba(0,184,212,0.3)]"
          >
            Schedule A Call
          </a>
        </div>

        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-[42px] font-extrabold text-foreground mb-4 text-balance">
            {"Who This Is For \u2014 And Who It\u2019s Not For"}
          </h2>
          <p className="max-w-[800px] mx-auto text-lg text-[#ddd] mt-5">
            This system is designed for established businesses — not startups.
            <br />
            We work with founders who already have traction and are ready to
            scale intelligently.
          </p>
        </div>

        {/* Two tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* For You */}
          <div className="bg-[rgba(0,184,212,0.05)] border-2 border-[rgba(0,184,212,0.3)] rounded-xl p-5 md:p-10 backdrop-blur-sm transition-all duration-400 cursor-pointer hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,184,212,0.6),0_0_60px_rgba(0,184,212,0.3)] hover:border-[rgba(0,184,212,0.5)] hover:bg-[rgba(0,184,212,0.08)]">
            <h3 className="text-xl md:text-[28px] font-extrabold text-[#00B8D4] mb-3 md:mb-5 flex items-center gap-2 md:gap-3">
              <span className="shrink-0 w-7 h-7 md:w-9 md:h-9 rounded-full bg-[rgba(0,184,212,0.2)] border-2 border-[#00B8D4] flex items-center justify-center">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#00B8D4]" />
              </span>
              {"This Is For You If:"}
            </h3>
            <ul className="space-y-2 md:space-y-4 text-[#ddd] text-sm md:text-base leading-relaxed">
              {FOR_YOU.map((item, i) => (
                <li key={i} className="pl-4 md:pl-5 relative">
                  <span className="absolute left-0 text-[#00B8D4]">
                    {"\u2022"}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 md:mt-8 text-[13px] md:text-[15px] text-muted-foreground italic border-t border-[rgba(0,184,212,0.2)] pt-4 md:pt-5">
              These are the companies that benefit most from AI-native revenue
              systems.
              <br />
              <strong className="text-[#00B8D4]">
                Because AI multiplies what is already working.
              </strong>
            </p>
          </div>

          {/* Not For You */}
          <div className="bg-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)] rounded-xl p-5 md:p-10 backdrop-blur-sm transition-all duration-400 cursor-pointer hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(150,150,150,0.4),0_0_60px_rgba(150,150,150,0.2)] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.05)]">
            <h3 className="text-xl md:text-[28px] font-extrabold text-foreground mb-3 md:mb-5 flex items-center gap-2 md:gap-3">
              <span className="shrink-0 w-7 h-7 md:w-9 md:h-9 rounded-full bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,255,255,0.2)] flex items-center justify-center">
                <X className="w-4 h-4 md:w-5 md:h-5 text-[#888]" />
              </span>
              {"This Is NOT For You If:"}
            </h3>
            <ul className="space-y-2 md:space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              {NOT_FOR_YOU.map((item, i) => (
                <li key={i} className="pl-4 md:pl-5 relative">
                  <span className="absolute left-0 text-[#666]">
                    {"\u2022"}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 md:mt-8 text-[13px] md:text-[15px] text-[#666] italic border-t border-[rgba(255,255,255,0.1)] pt-4 md:pt-5">
              <strong className="text-[#888]">
                {"AI cannot scale what doesn\u2019t exist."}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
