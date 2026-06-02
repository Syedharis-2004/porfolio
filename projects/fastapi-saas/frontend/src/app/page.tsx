"use client";
import { useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://fast-api-saas-ten.vercel.app";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect to get started",
    features: ["100 API calls/mo", "Community support", "1 project", "API Docs access"],
    cta: "Get Started Free",
    highlight: false,
    color: "from-slate-700 to-slate-800",
    border: "border-slate-700",
    glow: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams",
    features: ["10K API calls/mo", "Priority email support", "Unlimited projects", "Analytics dashboard", "Webhooks"],
    cta: "Start Pro Trial",
    highlight: true,
    color: "from-cyan-600 to-blue-700",
    border: "border-cyan-500",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.2)]",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large-scale systems",
    features: ["Unlimited API calls", "24/7 SLA support", "Custom domain", "SSO & SAML", "Audit logs", "Dedicated infra"],
    cta: "Contact Sales",
    highlight: false,
    color: "from-purple-700 to-indigo-800",
    border: "border-purple-600",
    glow: "",
  },
];

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string; apiKey?: string } | null>(null);
  const [apiStatus, setApiStatus] = useState<"idle" | "checking" | "online" | "offline">("idle");
  const [selectedPlan, setSelectedPlan] = useState("free");

  const checkApiHealth = async () => {
    setApiStatus("checking");
    try {
      const res = await fetch(`${BACKEND_URL}/`);
      const data = await res.json();
      if (data.status === "ok") setApiStatus("online");
      else setApiStatus("offline");
    } catch {
      setApiStatus("offline");
    }
  };

  const handleSignup = async (planId: string) => {
    if (!name.trim() || !email.trim()) {
      setResult({ success: false, message: "Please fill in your name and email below before signing up." });
      document.getElementById("signup-section")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setLoading(true);
    setResult(null);
    setSelectedPlan(planId);
    try {
      // 1. Create user
      const userRes = await fetch(`${BACKEND_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const userData = await userRes.json();

      if (!userRes.ok) {
        setResult({ success: false, message: userData.detail || "Registration failed." });
        setLoading(false);
        return;
      }

      const userId = userData.user.id;
      const apiKey = userData.user.api_key;

      // 2. Subscribe to chosen plan
      const subRes = await fetch(`${BACKEND_URL}/api/users/${userId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan_id: planId }),
      });
      const subData = await subRes.json();

      if (subRes.ok) {
        setResult({
          success: true,
          message: `🎉 Welcome, ${name}! You're on the ${subData.plan_details?.name || planId} plan.`,
          apiKey,
        });
      } else {
        setResult({ success: false, message: subData.detail || "Subscription failed." });
      }
    } catch {
      setResult({ success: false, message: "⚠️ Could not connect to the API. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white font-sans selection:bg-cyan-500/30">
      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[40%] h-[40%] rounded-full bg-purple-600/8 blur-[120px]" />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#020817]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              FastAPI SaaS
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Live API status indicator */}
            <button
              onClick={checkApiHealth}
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-slate-700 hover:border-slate-500"
            >
              <span className={`w-2 h-2 rounded-full ${
                apiStatus === "online" ? "bg-emerald-400 animate-pulse" :
                apiStatus === "offline" ? "bg-red-500" :
                apiStatus === "checking" ? "bg-yellow-400 animate-pulse" :
                "bg-slate-500"
              }`} />
              {apiStatus === "idle" ? "Check API" :
               apiStatus === "checking" ? "Pinging..." :
               apiStatus === "online" ? "API Online" : "API Offline"}
            </button>

            <a
              href={`${BACKEND_URL}/docs`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-cyan-400 font-medium transition-colors"
            >
              Docs ↗
            </a>
            <button
              onClick={() => document.getElementById("signup-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-semibold mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Production-ready · Open Source · Deploy in seconds
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 leading-none">
          <span className="text-white">Dockerized Backend.</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Infinite Scale.
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          A battle-hardened SaaS boilerplate powered by <span className="text-cyan-400 font-semibold">FastAPI</span>,{" "}
          <span className="text-blue-400 font-semibold">PostgreSQL</span>, and{" "}
          <span className="text-purple-400 font-semibold">Docker</span>. Ship your first endpoint in under 60 seconds.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => document.getElementById("signup-section")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1"
          >
            Start Free Trial
          </button>
          <a
            href={`${BACKEND_URL}/docs`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/80 border border-slate-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            View Live API ↗
          </a>
        </div>

        {/* Tech badges */}
        <div className="flex justify-center gap-3 mt-14 flex-wrap">
          {["FastAPI", "PostgreSQL", "Docker", "Pydantic", "Uvicorn", "Vercel"].map((tech) => (
            <span key={tech} className="px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700 text-slate-400 text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "⚡",
              title: "Lightning Fast",
              desc: "Built on FastAPI & Uvicorn — serves async requests with massive throughput. 40x faster than Flask.",
              color: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]",
            },
            {
              icon: "🐳",
              title: "Docker Native",
              desc: "Complete docker-compose setup included out of the box. From zero to running in one command.",
              color: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
            },
            {
              icon: "🛡️",
              title: "Type Safe",
              desc: "End-to-end type safety via Pydantic v2. Validates all incoming & outgoing data automatically.",
              color: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
            },
          ].map((f) => (
            <div
              key={f.title}
              className={`p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${f.color} group`}
            >
              <div className="text-4xl mb-5">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4 text-white">Simple Pricing</h2>
          <p className="text-slate-400 text-xl">No hidden fees. Upgrade or cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl border p-8 flex flex-col bg-gradient-to-br ${plan.color} ${plan.border} ${plan.glow} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-black px-6 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                <p className="text-slate-300 text-sm mb-6">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-slate-400 pb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-200">
                    <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSignup(plan.id)}
                disabled={loading && selectedPlan === plan.id}
                className={`w-full py-3.5 rounded-2xl font-bold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-slate-900 hover:bg-cyan-50 shadow-xl hover:shadow-cyan-500/30"
                    : "bg-white/10 hover:bg-white/20 border border-white/20"
                } disabled:opacity-50 hover:-translate-y-0.5`}
              >
                {loading && selectedPlan === plan.id ? "Processing..." : plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── SIGNUP FORM ── */}
      <section id="signup-section" className="max-w-2xl mx-auto px-6 pb-32">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 backdrop-blur-sm">
          <h2 className="text-3xl font-extrabold mb-2 text-white text-center">Create Your Account</h2>
          <p className="text-slate-400 text-center mb-8">Enter your details, then pick a plan above.</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-400 mb-2">Full Name</label>
              <input
                id="signup-name"
                type="text"
                placeholder="Syed Haris"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-400 mb-2">Email Address</label>
              <input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
              />
            </div>
          </div>

          <p className="text-slate-500 text-sm text-center mt-6">
            Then scroll up and click any plan's button to register instantly via the <span className="text-cyan-400">live API</span>.
          </p>

          {/* Result */}
          {result && (
            <div className={`mt-6 p-5 rounded-2xl border text-sm ${
              result.success
                ? "bg-emerald-950/60 border-emerald-700/50 text-emerald-300"
                : "bg-red-950/60 border-red-700/50 text-red-300"
            }`}>
              <p className="font-bold mb-1">{result.message}</p>
              {result.apiKey && (
                <div className="mt-3 bg-black/40 rounded-xl p-4 font-mono text-xs text-cyan-400 break-all">
                  <span className="text-slate-500 block mb-1">Your API Key:</span>
                  {result.apiKey}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-800 py-10 text-center">
        <p className="text-slate-600 text-sm">
          Built with{" "}
          <a href={`${BACKEND_URL}/docs`} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-400 transition-colors">
            FastAPI
          </a>{" "}
          · Live API:{" "}
          <a href={BACKEND_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-400 transition-colors break-all">
            {BACKEND_URL}
          </a>
        </p>
      </footer>
    </div>
  );
}
