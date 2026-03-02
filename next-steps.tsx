"use client"

import { useState } from "react"

interface Step {
  id: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    id: "step1",
    title: "Call Booked",
    description:
      "Your strategy call has been confirmed and added to our calendar.",
  },
  {
    id: "step2",
    title: "Pre-Call Touchpoint",
    description:
      "Check your phone. You will receive an email or a text from us to touch base ahead of your meeting.",
  },
  {
    id: "step3",
    title: "Confirm Meeting",
    description:
      "Respond to us via text or email to confirm our meeting and your intent to attend or you will be automatically canceled so your spot can be given to someone else.",
  },
]

export function NextSteps() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(
    new Set(["step1"])
  )

  function getNextStepId() {
    for (const step of steps) {
      if (!completedSteps.has(step.id)) return step.id
    }
    return null
  }

  function handleClick(stepId: string) {
    if (completedSteps.has(stepId)) return
    if (stepId !== getNextStepId()) return
    setCompletedSteps((prev) => new Set([...prev, stepId]))
  }

  const nextStepId = getNextStepId()

  return (
    <section
      className="rounded-xl p-10 md:p-12 mx-auto max-w-[900px] my-16"
      style={{
        background: "rgba(0,184,212,0.05)",
        border: "2px solid rgba(0,184,212,0.2)",
      }}
    >
      <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center text-balance">
        What to Expect Next
      </h2>
      <div className="flex flex-col gap-5">
        {steps.map((step) => {
          const isCompleted = completedSteps.has(step.id)
          const isNext = step.id === nextStepId

          return (
            <div
              key={step.id}
              role={!isCompleted ? "button" : undefined}
              tabIndex={isNext ? 0 : undefined}
              onClick={() => handleClick(step.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleClick(step.id)
                }
              }}
              className={`flex items-start gap-5 p-6 rounded-lg transition-all ${
                !isCompleted ? "cursor-pointer" : ""
              } ${isCompleted ? "opacity-60" : ""}`}
              style={{
                background: isNext
                  ? "rgba(0,184,212,0.1)"
                  : "rgba(0,0,0,0.3)",
                border: isNext
                  ? "2px solid #00B8D4"
                  : "2px solid rgba(255,255,255,0.1)",
                boxShadow: isNext
                  ? "0 0 30px rgba(0,184,212,0.3)"
                  : undefined,
              }}
            >
              {/* Checkbox */}
              <div
                className={`w-[30px] h-[30px] shrink-0 rounded-md flex items-center justify-center mt-0.5 ${
                  isNext ? "animate-[pulseCheck_2s_infinite]" : ""
                }`}
                style={{
                  border: "3px solid #00B8D4",
                  background: isCompleted ? "#00B8D4" : "transparent",
                }}
              >
                {isCompleted && (
                  <span className="text-primary-foreground text-lg font-black leading-none">
                    {"✓"}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isNext ? "text-primary" : "text-foreground"
                  }`}
                >
                  {step.title}
                  {isNext && (
                    <span className="inline-block ml-2 bg-primary text-primary-foreground px-3 py-0.5 rounded text-[11px] font-black uppercase tracking-wider align-middle">
                      Next
                    </span>
                  )}
                </h3>
                <p className="text-[15px] text-[#ccc] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
