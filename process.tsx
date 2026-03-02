import { ChevronDown } from "lucide-react"

const STEPS = [
  {
    num: 1,
    title: "AI Revenue Audit",
    description:
      "Deep diagnostic of your growth engine. We analyze your offer, channels, funnel, creative, conversion points, data tracking, revenue leaks, and scale blockers.",
    footnote:
      "Produces a precise blueprint showing where AI generates highest immediate impact.",
    accent: true,
  },
  {
    num: 2,
    title: "AI Activation & Training",
    description:
      "Plug into our proprietary AI framework trained on your company. It learns your audience behavior, messaging, brand voice, performance data, winning creatives, customer economics, and competitive landscape.",
    footnote:
      "A digital intelligence layer tailored exclusively to your business.",
    accent: false,
  },
  {
    num: 3,
    title: "Implementation & Optimization",
    description:
      "Deploy across revenue channels. AI executes immediately\u2014generating and testing creatives, identifying algorithm patterns, optimizing campaigns in real time, eliminating underperformers, shifting budget to winners.",
    footnote: "Your growth becomes data-driven and automated.",
    accent: true,
  },
  {
    num: 4,
    title: "Structured Scaling",
    description:
      "Move into aggressive expansion. Increase budget behind proven campaigns, expand into new audiences, launch additional acquisition angles, improve efficiency at higher spend levels, build predictable revenue momentum.",
    footnote: "Growth becomes system-driven, not hustle-driven.",
    accent: false,
  },
]

function StepArrow({ accent }: { accent: boolean }) {
  return (
    <div className="flex justify-center py-4">
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div
          className={`w-[2px] h-8 ${
            accent
              ? "bg-gradient-to-b from-[rgba(0,184,212,0.4)] to-[rgba(0,184,212,0.15)]"
              : "bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.1)]"
          }`}
        />
        {/* Arrow head */}
        <div
          className={`${
            accent ? "text-[#00B8D4]" : "text-[rgba(255,255,255,0.4)]"
          }`}
        >
          <ChevronDown className="w-6 h-6 -mt-1" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  )
}

export function Process() {
  return (
    <section className="pt-11 md:pt-[76px] pb-8 md:pb-12 relative" id="services">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-10 md:mb-16 relative z-[1]">
          <h2 className="text-3xl md:text-[42px] font-extrabold text-foreground mb-4 text-balance">
            Our 4-Step AI RevenueLaunch System
          </h2>
        </div>

        <div className="max-w-[700px] mx-auto mt-10 flex flex-col">
          {STEPS.map((step, index) => (
            <div key={step.num}>
              <div
                className={`rounded-lg p-6 ${
                  step.accent
                    ? "bg-[rgba(0,184,212,0.03)] border-2 border-[rgba(0,184,212,0.2)]"
                    : "bg-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)]"
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`w-[50px] h-[50px] shrink-0 rounded-full flex items-center justify-center text-2xl font-black ${
                      step.accent
                        ? "bg-[rgba(0,184,212,0.15)] border-2 border-[#00B8D4] text-[#00B8D4]"
                        : "bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,255,255,0.2)] text-foreground"
                    }`}
                  >
                    {step.num}
                  </div>
                  <h3
                    className={`text-xl font-extrabold ${
                      step.accent ? "text-[#00B8D4]" : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#ddd] leading-relaxed text-sm mb-2">
                  {step.description}
                </p>
                <p className="text-muted-foreground text-[13px] italic">
                  {step.footnote}
                </p>
              </div>
              {/* Arrow between steps (not after the last one) */}
              {index < STEPS.length - 1 && <StepArrow accent={step.accent} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
