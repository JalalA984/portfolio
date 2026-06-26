"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

/* ============================================================
   EDIT ME — personalize for your friend
   ============================================================ */
const FRIEND_NAME = "Mahdi"; // her name / nickname
const FINAL_MESSAGE =
  "future ortho top 0.99999% graduate... lemme join the clinic 🦷";
/* ============================================================ */

type Band = { name: string; color: string };
const BANDS: Band[] = [
  { name: "BUBBLEGUM", color: "#ff5fa2" },
  { name: "SKY", color: "#39c0ff" },
  { name: "LIME", color: "#7cff5f" },
  { name: "GRAPE", color: "#b15fff" },
  { name: "SUN", color: "#ffd23f" },
  { name: "RAINBOW", color: "rainbow" },
];

const HYPE = [
  "BLING! 🦷", "ORTHO MODE ✨", "TEETH GO BRRR", "10/10 WOULD FLOSS",
  "SMILE BIGGER 😁", "DENTAL GAINS 💪", "MEOW APPROVES 🐱", "SPARKLE OVERLOAD ✨",
  "CHEF'S KISS 🦷", "GET BRACED 🤩", "CAVITY WHO? 🚫", "FLEX THOSE MOLARS 💪",
];

const BURST_EMO = ["✨", "🦷", "💖", "⭐", "🪥", "🐱", "💪"];
const FLOATERS = ["🦷", "✨", "💖", "💪", "🐱", "🪥", "😁", "⭐", "🦷", "💕", "🐈", "✨"];

const TOOTH_COUNT = 8;
const MOUTH = { x: 80, y: 152, w: 240, h: 92 };

type Burst = { id: number; x: number; y: number; parts: { tx: number; ty: number; e: string }[] };

export default function BracesStudio() {
  const [selected, setSelected] = useState<Band>(BANDS[0]);
  const [braces, setBraces] = useState<Record<number, string>>({});
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
  const [shake, setShake] = useState(false);
  const [blink, setBlink] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const burstId = useRef(0);

  const teeth = useMemo(() => {
    const pad = 16;
    const tw = 24;
    const gap = (MOUTH.w - pad * 2 - TOOTH_COUNT * tw) / (TOOTH_COUNT - 1);
    return Array.from({ length: TOOTH_COUNT }, (_, i) => {
      const x = MOUTH.x + pad + i * (tw + gap);
      return { id: i, x, y: MOUTH.y + 6, w: tw, h: 34, cx: x + tw / 2, cy: MOUTH.y + 6 + 17 };
    });
  }, []);

  const count = Object.keys(braces).length;
  const done = count === TOOTH_COUNT;

  // floating background emojis (stable)
  const floaters = useMemo(
    () =>
      FLOATERS.map((e, i) => ({
        e,
        left: Math.round((i * 8.3 + (i % 3) * 4) % 100),
        delay: (i * 0.7).toFixed(2),
        dur: (8 + (i % 5)).toFixed(0),
        size: 18 + (i % 4) * 8,
      })),
    []
  );

  // confetti pieces (stable)
  const confetti = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        e: ["🦷", "✨", "💖", "🎉", "⭐", "🐱", "💪", "🪥"][i % 8],
        left: Math.round(Math.random() * 100),
        delay: (Math.random() * 1.2).toFixed(2),
        dur: (2.2 + Math.random() * 2).toFixed(2),
        size: 14 + Math.round(Math.random() * 18),
      })),
    []
  );

  // blink loop
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setBlink(true);
      t = setTimeout(() => setBlink(false), 150);
    }, 2800);
    return () => { clearInterval(id); clearTimeout(t); };
  }, []);

  // celebration trigger
  useEffect(() => {
    if (done) setCelebrate(true);
  }, [done]);

  // toast auto-clear
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 900);
    return () => clearTimeout(t);
  }, [toast]);

  const spawnBurst = (x: number, y: number) => {
    const parts = Array.from({ length: 8 }, () => {
      const a = Math.random() * Math.PI * 2;
      const d = 40 + Math.random() * 60;
      return { tx: Math.cos(a) * d, ty: Math.sin(a) * d, e: BURST_EMO[Math.floor(Math.random() * BURST_EMO.length)] };
    });
    const id = burstId.current++;
    setBursts((b) => [...b, { id, x, y, parts }]);
    setTimeout(() => setBursts((b) => b.filter((bb) => bb.id !== id)), 750);
  };

  const hit = (clientX: number, clientY: number, id: number) => {
    setBraces((b) => ({ ...b, [id]: selected.color }));
    spawnBurst(clientX, clientY);
    setToast({ id: Date.now(), text: HYPE[Math.floor(Math.random() * HYPE.length)] });
    setShake(true);
    setTimeout(() => setShake(false), 300);
  };

  const chaos = (clientX: number, clientY: number) => {
    const colors = BANDS.map((b) => b.color);
    const next: Record<number, string> = {};
    teeth.forEach((t) => (next[t.id] = colors[Math.floor(Math.random() * colors.length)]));
    setBraces(next);
    spawnBurst(clientX, clientY);
    setToast({ id: Date.now(), text: "MAXIMUM BLING 🌪️🦷" });
    setShake(true);
    setTimeout(() => setShake(false), 450);
  };

  const reset = () => { setBraces({}); setCelebrate(false); };

  const bracedTeeth = teeth.filter((t) => braces[t.id] != null);
  const wireStartX = bracedTeeth.length ? Math.min(...bracedTeeth.map((t) => t.cx)) : 0;
  const wireEndX = bracedTeeth.length ? Math.max(...bracedTeeth.map((t) => t.cx)) : 0;

  return (
    <main
      className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-start pt-8 pb-10 px-4 select-none"
      style={{ touchAction: "manipulation", background: "linear-gradient(160deg,#ffd6ec,#d6f0ff 55%,#e3ffd6)", animation: "km-bg 14s linear infinite" }}
    >
      <KmStyles />

      {/* floating background emojis */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {floaters.map((f, i) => (
          <span
            key={i}
            className="absolute bottom-[-40px]"
            style={{ left: `${f.left}%`, fontSize: f.size, animation: `km-floatUp ${f.dur}s linear ${f.delay}s infinite` }}
          >
            {f.e}
          </span>
        ))}
      </div>

      {/* header */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-pink-600 drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)]">
          MAHDI&apos;S BRACE PLACE 🦷
        </h1>
        <p className="mt-1 text-xs sm:text-sm font-bold text-fuchsia-700/80 uppercase tracking-wider">
          tap every tooth · pick your bling · best on 📱
        </p>
        <p className="mt-2 inline-block rounded-full bg-white/70 px-4 py-1 text-sm font-black text-pink-600 shadow">
          {count}/{TOOTH_COUNT} TEETH BLINGED
        </p>
      </div>

      {/* the face */}
      <div className={`relative z-10 mt-3 w-full max-w-md ${shake ? "km-shake" : ""}`}>
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <defs>
            <linearGradient id="km-rainbow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff5fa2" />
              <stop offset="33%" stopColor="#ffd23f" />
              <stop offset="66%" stopColor="#7cff5f" />
              <stop offset="100%" stopColor="#39c0ff" />
            </linearGradient>
            <radialGradient id="km-face" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#ffeccb" />
              <stop offset="100%" stopColor="#ffd9a3" />
            </radialGradient>
          </defs>

          {/* face */}
          <circle cx="200" cy="150" r="142" fill="url(#km-face)" stroke="#e9a866" strokeWidth="4" />

          {/* blush */}
          <ellipse cx="112" cy="168" rx="20" ry="11" fill="#ff9ec4" opacity="0.55" />
          <ellipse cx="288" cy="168" rx="20" ry="11" fill="#ff9ec4" opacity="0.55" />

          {/* eyes */}
          {blink ? (
            <>
              <line x1="128" y1="112" x2="168" y2="112" stroke="#3a2a1a" strokeWidth="5" strokeLinecap="round" />
              <line x1="232" y1="112" x2="272" y2="112" stroke="#3a2a1a" strokeWidth="5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="148" cy="110" r="20" fill="#fff" stroke="#3a2a1a" strokeWidth="3" />
              <circle cx="252" cy="110" r="20" fill="#fff" stroke="#3a2a1a" strokeWidth="3" />
              <circle cx="152" cy="114" r="9" fill="#3a2a1a" />
              <circle cx="256" cy="114" r="9" fill="#3a2a1a" />
              <circle cx="148" cy="108" r="3" fill="#fff" />
              <circle cx="252" cy="108" r="3" fill="#fff" />
            </>
          )}

          {/* mouth opening */}
          <rect x={MOUTH.x} y={MOUTH.y} width={MOUTH.w} height={MOUTH.h} rx="40" fill="#5c1622" />
          {/* tongue */}
          <ellipse cx="200" cy={MOUTH.y + MOUTH.h - 10} rx="78" ry="26" fill="#ff7a9c" />

          {/* teeth */}
          {teeth.map((t) => (
            <rect key={`tooth-${t.id}`} x={t.x} y={t.y} width={t.w} height={t.h} rx="7" fill="#fffdf7" stroke="#e7e2d4" strokeWidth="1.5" />
          ))}

          {/* archwire */}
          {bracedTeeth.length > 0 && (
            <line x1={wireStartX} y1={teeth[0].cy} x2={wireEndX} y2={teeth[0].cy} stroke="#aab2bb" strokeWidth="3" strokeLinecap="round" />
          )}

          {/* brackets + elastics */}
          {teeth.map((t) =>
            braces[t.id] != null ? (
              <g key={`brace-${t.id}`} style={{ transformOrigin: `${t.cx}px ${t.cy}px`, animation: "km-pop 0.4s ease-out" }}>
                <rect x={t.cx - 6} y={t.cy - 5} width="12" height="10" rx="2" fill="#c2cad2" stroke="#8b949e" strokeWidth="1" />
                <circle cx={t.cx} cy={t.cy} r="4.5" fill={braces[t.id] === "rainbow" ? "url(#km-rainbow)" : braces[t.id]} />
              </g>
            ) : null
          )}

          {/* tap targets (bigger than teeth for mobile) */}
          {teeth.map((t) => (
            <rect
              key={`hit-${t.id}`}
              x={t.x - 4}
              y={t.y - 8}
              width={t.w + 8}
              height={t.h + 16}
              fill="transparent"
              style={{ cursor: "pointer" }}
              onClick={(e) => hit(e.clientX, e.clientY, t.id)}
            />
          ))}
        </svg>
      </div>

      {/* band picker */}
      <div className="relative z-10 mt-2 flex flex-wrap items-center justify-center gap-2">
        {BANDS.map((b) => {
          const active = selected.name === b.name;
          return (
            <button
              key={b.name}
              onClick={() => setSelected(b)}
              className={`h-10 w-10 rounded-full border-4 transition-transform ${active ? "scale-125 border-pink-600" : "border-white/80"}`}
              style={b.color === "rainbow"
                ? { backgroundImage: "linear-gradient(135deg,#ff5fa2,#ffd23f,#7cff5f,#39c0ff)" }
                : { backgroundColor: b.color }}
              aria-label={b.name}
            />
          );
        })}
      </div>
      <p className="relative z-10 mt-1 text-xs font-black uppercase tracking-widest text-fuchsia-700">
        band: {selected.name}
      </p>

      {/* action buttons */}
      <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={(e) => chaos(e.clientX, e.clientY)}
          className="rounded-full bg-fuchsia-600 px-5 py-2 text-sm font-black uppercase tracking-wider text-white shadow-lg active:scale-95"
        >
          🌪️ CHAOS
        </button>
        <button
          onClick={reset}
          className="rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-wider text-pink-600 shadow-lg active:scale-95"
        >
          ↺ RESET
        </button>
      </div>

      <Link
        href="/"
        className="relative z-10 mt-6 font-mono text-[11px] uppercase tracking-widest text-fuchsia-700/70 underline-offset-4 hover:underline"
      >
        [ cd /home ]
      </Link>

      {/* toast */}
      {toast && (
        <div
          key={toast.id}
          className="pointer-events-none fixed left-1/2 top-24 z-40 -translate-x-1/2 rounded-2xl bg-black/80 px-5 py-2 text-lg font-black text-white"
          style={{ animation: "km-toast 0.9s ease-out forwards" }}
        >
          {toast.text}
        </div>
      )}

      {/* tap bursts */}
      {bursts.map((b) => (
        <div key={b.id} className="pointer-events-none fixed z-40" style={{ left: b.x, top: b.y }}>
          {b.parts.map((p, i) => (
            <span
              key={i}
              className="absolute"
              style={{ ["--tx" as string]: `${p.tx}px`, ["--ty" as string]: `${p.ty}px`, animation: "km-burst 0.7s ease-out forwards" }}
            >
              {p.e}
            </span>
          ))}
        </div>
      ))}

      {/* celebration */}
      {celebrate && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 px-6 backdrop-blur-sm">
          {/* confetti */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {confetti.map((c, i) => (
              <span
                key={i}
                className="absolute top-[-40px]"
                style={{ left: `${c.left}%`, fontSize: c.size, animation: `km-confetti ${c.dur}s linear ${c.delay}s infinite` }}
              >
                {c.e}
              </span>
            ))}
          </div>

          <div className="relative z-10 w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl" style={{ animation: "km-pop 0.5s ease-out" }}>
            <div className="text-6xl" style={{ animation: "km-bounce 1s ease-in-out infinite" }}>👑🦷</div>
            <h2 className="mt-2 text-2xl font-black text-pink-600">PERFECT SMILE!</h2>
            <p className="mt-1 text-sm font-bold uppercase tracking-widest text-fuchsia-700">
              {FRIEND_NAME} = certified ortho icon
            </p>
            <p className="mt-4 text-base font-semibold text-gray-700">{FINAL_MESSAGE}</p>
            <div className="mt-3 text-3xl">🐱💪✨</div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button onClick={reset} className="rounded-full bg-pink-600 px-5 py-2 text-sm font-black uppercase tracking-wider text-white active:scale-95">
                ↺ AGAIN
              </button>
              <Link href="/" className="rounded-full bg-gray-100 px-5 py-2 text-sm font-black uppercase tracking-wider text-gray-600 active:scale-95">
                cd /home
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function KmStyles() {
  return (
    <style>{`
      @keyframes km-floatUp {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        12% { opacity: .65; }
        88% { opacity: .65; }
        100% { transform: translateY(-112vh) rotate(360deg); opacity: 0; }
      }
      @keyframes km-confetti {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(112vh) rotate(720deg); }
      }
      @keyframes km-burst {
        0% { transform: translate(0,0) scale(1); opacity: 1; }
        100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
      }
      @keyframes km-toast {
        0% { transform: translate(-50%, 12px) scale(.8); opacity: 0; }
        18% { transform: translate(-50%, 0) scale(1.12); opacity: 1; }
        80% { opacity: 1; }
        100% { transform: translate(-50%, -12px); opacity: 0; }
      }
      @keyframes km-pop {
        0% { transform: scale(0); }
        70% { transform: scale(1.25); }
        100% { transform: scale(1); }
      }
      @keyframes km-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      @keyframes km-bg { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(40deg); } }
      .km-shake { animation: km-shake 0.3s ease-in-out; }
      @keyframes km-shake {
        0%,100% { transform: translate(0,0); }
        25% { transform: translate(-6px,3px); }
        50% { transform: translate(5px,-4px); }
        75% { transform: translate(-4px,-3px); }
      }
    `}</style>
  );
}
