"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Tech = { name: string; logo?: string };

const TECH_DATA: Tech[] = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Postgres", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
];

/* ---------- Row configuration ----------
   speeds are px/sec. Middle row is reversed but otherwise identical behaviour.
*/
const ROWS = [
  { seed: 11, angle: -3, speed: 40, reverse: false }, // top
  { seed: 22, angle: 0, speed: 30, reverse: true },   // middle (reversed, slower)
  { seed: 33, angle: 2, speed: 55, reverse: false }   // bottom
];

/* ---------- util: seededShuffle (keeps base ordering varied per row) ---------- */
function seededShuffle<T extends { name: string }>(items: T[], seed: number) {
  const copy = [...items];
  copy.sort((a, b) => {
    const score = (s: string) => s.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return ((score(a.name) + seed) % 1000) - ((score(b.name) + seed) % 1000);
  });
  return copy;
}

/* ---------- Strip component ----------
   - duplicates items exactly 3× inside the strip for seamless looping
   - waits for valid scrollWidth (via ResizeObserver) before starting RAF
   - improved wrap math for smooth transitions
   - pauses on hover/focus
*/
function Strip({
  items,
  angle,
  speed,
  reverse,
  rowIndex,
}: {
  items: Tech[];
  angle: number;
  speed: number; // px/sec
  reverse?: boolean;
  rowIndex: number;
}) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  const [ready, setReady] = useState(false);
  const pausedRef = useRef(false);

  // Triple the items for smoother looping
  const tripled = useMemo(() => [...items, ...items, ...items], [items]);

  // start/pause handlers
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const enter = () => (pausedRef.current = true);
    const leave = () => (pausedRef.current = false);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("focusin", enter);
    el.addEventListener("focusout", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      el.removeEventListener("focusin", enter);
      el.removeEventListener("focusout", leave);
    };
  }, []);

  // Observe inner width and set initial offset for seamless start
  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const ro = new ResizeObserver(() => {
      const contentWidth = inner.scrollWidth;
      if (contentWidth > 0) {
        // Start at one-third position for seamless looping
        const oneThird = contentWidth / 3;
        offsetRef.current = -oneThird;
        setReady(true);
      }
    });
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  // animation loop (only runs when ready)
  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer || !ready) return;

    const step = (now: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const dt = now - (lastTimeRef.current ?? now);
      lastTimeRef.current = now;

      if (!pausedRef.current) {
        const dir = reverse ? 1 : -1;
        offsetRef.current += dir * speed * (dt / 1000);

        // Improved wrapping logic for seamless transitions
        const contentWidth = inner.scrollWidth;
        const oneThird = contentWidth / 3;
        
        if (contentWidth > 0) {
          // Keep offset in the middle third range for seamless looping
          if (offsetRef.current <= -oneThird * 2) {
            offsetRef.current += oneThird;
          } else if (offsetRef.current >= 0) {
            offsetRef.current -= oneThird;
          }
        }

        inner.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      } else {
        // if paused, still update lastTime so dt doesn't spike on resume
        lastTimeRef.current = now;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [ready, speed, reverse]);

  return (
    <div
      ref={outerRef}
      className="strip-outer"
      aria-label={`technology-strip-${rowIndex}`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {/* fade masks */}
      <div className="mask left" aria-hidden />
      <div className="mask right" aria-hidden />

      <div className="strip-inner" ref={innerRef} role="list" aria-roledescription="continuous list">
        {tripled.map((tech, idx) => (
          <div
            key={`${tech.name}-${rowIndex}-${idx}`}
            className="tech-card"
            role="listitem"
            style={{ transform: `rotate(${-angle}deg)` }} // counter-rotate so pills stay upright
          >
            <div className="logo-wrap" aria-hidden>
              {tech.logo ? (
                <Image src={tech.logo} alt={tech.name} width={44} height={44} style={{ objectFit: "contain" }} />
              ) : (
                <div className="logo-placeholder" />
              )}
            </div>
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .strip-outer {
          position: relative;
          overflow: hidden;
          padding: 14px 0;
        }
        .strip-inner {
          display: flex;
          gap: 26px;
          align-items: center;
          will-change: transform;
          white-space: nowrap;
          padding-left: 8%;
        }

        .mask {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 14%;
          z-index: 4;
          pointer-events: none;
        }
        .mask.left { left: 0; background: linear-gradient(90deg, rgba(12,12,12,1), rgba(12,12,12,0)); }
        .mask.right { right: 0; background: linear-gradient(270deg, rgba(12,12,12,1), rgba(12,12,12,0)); }

        .tech-card {
          min-width: 150px;
          height: 96px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border-radius: 12px;
          padding: 10px;
          border: 1px solid rgba(255,255,255,0.04);
          box-shadow: 0 8px 18px rgba(0,0,0,0.45), inset 0 0 10px rgba(249,115,22,0.02);
          transition: transform 220ms cubic-bezier(.2,.9,.3,1), box-shadow 220ms;
          flex-shrink: 0;
        }
        .tech-card:hover {
          transform: translateY(-6px) scale(1.03) rotate(${-angle}deg);
          box-shadow: 0 18px 34px rgba(0,0,0,0.6);
          border-color: rgba(249,115,22,0.16);
        }
        .logo-wrap { width: 44px; height: 44px; border-radius: 999px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center; }
        .logo-placeholder { width: 44px; height: 44px; border-radius: 999px; background: rgba(255,255,255,0.02); }
        .tech-name { font-size: 13px; font-weight: 700; color: #fff; text-align: center; }

        @media (max-width: 1024px) {
          .strip-inner { padding-left: 6%; gap: 18px; }
          .mask { width: 20%; }
          .tech-card { min-width: 126px; height: 84px; }
          .logo-wrap { width: 40px; height: 40px; }
        }
        @media (max-width: 640px) {
          .mask { display: none; }
          .strip-inner { padding-left: 4%; gap: 14px; }
          .tech-card { min-width: 110px; height: 72px; }
          .logo-wrap { width: 36px; height: 36px; }
        }
      `}</style>
    </div>
  );
}

/* ---------- Main Technologies section ---------- */
export default function Technologies(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  // compute base ordered lists per row (no duplication here)
  const rows = useMemo(() => ROWS.map((r) => seededShuffle(TECH_DATA, r.seed)), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="tech-container" id="technologies">
      <div className="tech-content">
        <h2 className="tech-title">Engines of Our Innovation</h2>
        <p className="tech-desc">Modern, seamless, resilient stack powering everything we build.</p>

        <div className="strips">
          {mounted &&
            rows.map((rowItems, i) => (
              <Strip
                key={`row-${i}`}
                items={rowItems}
                angle={ROWS[i].angle}
                speed={ROWS[i].speed}
                reverse={ROWS[i].reverse}
                rowIndex={i}
              />
            ))}
        </div>
      </div>

      <style jsx>{`
        .tech-container {
          width: 100%;
          background:
            linear-gradient(180deg, rgba(12,12,12,0.96) 0%, rgba(6,6,6,1) 100%),
            radial-gradient(circle at 18% 22%, rgba(249,115,22,0.03), transparent 18%);
          padding: 64px 0;
          color: #fff;
        }
        .tech-content { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .tech-title {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 8px;
          background: linear-gradient(90deg, #fb923c, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tech-desc { color: #cfcfcf; margin: 0 0 20px; max-width: 760px; }
        .strips { display: flex; flex-direction: column; gap: 20px; }

        @media (max-width: 768px) {
          .tech-title { font-size: 22px; }
          .tech-desc { font-size: 14px; }
        }
      `}</style>
    </section>
  );
}