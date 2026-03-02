const stats = [
  { number: "409%", label: "Avg Revenue Increase" },
  { number: "90", label: "Days to $100K+/mo" },
  { number: "$47M+", label: "Client Revenue Generated" },
]

export function SocialProof() {
  return (
    <section
      className="rounded-xl p-10 md:p-10 mx-auto max-w-[800px] my-16"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "2px solid rgba(255,255,255,0.1)",
      }}
    >
      <h3 className="text-2xl font-extrabold text-primary text-center mb-8">
        Join 100+ Businesses Scaling with AI
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="py-5">
            <div className="text-4xl md:text-[42px] font-black text-primary mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-[#ccc] uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
