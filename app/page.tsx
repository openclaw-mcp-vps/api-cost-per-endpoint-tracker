export default function Home() {
  const faqs = [
    {
      q: "How does per-endpoint cost tracking work?",
      a: "You send API logs via our webhook or SDK. We parse each request, match it to your configured pricing rules, and aggregate costs by endpoint in real-time."
    },
    {
      q: "What triggers a cost spike alert?",
      a: "You set a threshold per endpoint (e.g. $5/hour). When rolling usage crosses that threshold, we notify you instantly via email or Slack webhook."
    },
    {
      q: "Which APIs and providers are supported?",
      a: "Any HTTP API. We support OpenAI, Anthropic, AWS, GCP, Stripe, and custom endpoints with user-defined cost-per-call or token-based pricing rules."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Real-Time API Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Know exactly what each{" "}
          <span className="text-[#58a6ff]">API endpoint</span>{" "}
          costs you
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Ingest API logs via webhook or SDK, apply configurable pricing rules, and get a live dashboard showing cost breakdowns per endpoint — with instant alerts on cost spikes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Tracking — $15/mo
        </a>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "< 1s", label: "Cost update latency" },
            { stat: "Any API", label: "Provider agnostic" },
            { stat: "Instant", label: "Spike alerts" }
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-2 mb-2">
            <span className="text-5xl font-bold text-white">$15</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6">Everything you need to monitor and control API costs.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited endpoints tracked",
              "Real-time cost dashboard",
              "Configurable pricing rules",
              "Cost spike alerts (email + Slack)",
              "Webhook + SDK ingestion",
              "30-day cost history"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} API Cost Tracker. All rights reserved.
      </footer>
    </main>
  );
}
