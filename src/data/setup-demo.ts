export const demos = [
  {
    href: "/auth/email-password",
    title: "Email + Password",
    description:
      "Classic credentials flow with Supabase-managed sessions and a React listener that never goes stale.",
    highlights: [
      "Toggle sign in/sign up",
      "Show the session panel",
      "Explain password rules",
    ],
    theme: {
      card: "border border-emerald-400/30 bg-gradient-to-br from-[#0a2416] via-[#04130d] to-[#0f3022] shadow-[0_30px_70px_rgba(2,6,23,0.65)] hover:border-emerald-300/60",
      open: "text-emerald-300",
      title: "text-emerald-100",
      bullets: "text-emerald-200/90",
      overlays: [
        "pointer-events-none absolute -left-8 -top-6 -z-10 h-20 w-32 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.18),_transparent)] blur-lg",
        "pointer-events-none absolute bottom-4 right-4 -z-10 h-16 w-32 rounded-full bg-[linear-gradient(150deg,_rgba(45,212,191,0.25),_rgba(59,130,246,0.12))] blur-lg",
      ],
    },
  },
  {
    href: "/auth/google-login",
    title: "Google Login",
    description:
      "Demonstrate social login via signInWithOAuth plus the automatic UI sync powered by onAuthStateChange.",
    highlights: [
      "Redirect URLs",
      "Call signInWithOAuth",
      "Watch session update",
    ],
    theme: {
      card: "border border-[#5a8dee]/30 bg-gradient-to-br from-[#060f24] via-[#07122e] to-[#0f2346] shadow-[0_30px_70px_rgba(2,6,23,0.65)] hover:border-[#7fb0ff]/60",
      open: "text-[#8ab4ff]",
      title: "text-[#bcd7ff]",
      bullets: "text-[#9fc1ff]",
      overlays: [
        "pointer-events-none absolute -right-8 -top-6 -z-10 h-16 w-16 rounded-full bg-[radial-gradient(circle,_rgba(66,133,244,0.3),_rgba(234,67,53,0.06))] blur-lg",
        "pointer-events-none absolute bottom-4 left-6 -z-10 h-12 w-32 rounded-full bg-[linear-gradient(120deg,_rgba(251,188,5,0.18),_rgba(66,133,244,0.12))] blur-lg",
      ],
    },
  },
] as const;
