export function SuccessBadge() {
  return (
    <div
      className="w-[100px] h-[100px] mx-auto mb-8 rounded-full flex items-center justify-center animate-[scaleIn_0.6s_ease-out]"
      style={{
        background: "rgba(0,184,212,0.15)",
        border: "3px solid #00B8D4",
        boxShadow: "0 0 40px rgba(0,184,212,0.4)",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="w-[50px] h-[50px]"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="45" stroke="#00B8D4" strokeWidth="5" />
        <path
          d="M30 50L42 62L70 34"
          stroke="#00B8D4"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
