"use client";

import React, { SVGProps, useEffect, useRef, useState } from "react";

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string; // raster image fallback
  videoSrc?: string; // video url (served from /public ideally)
  poster?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  fit?: "cover" | "contain";
  lazy?: boolean;
  /**
   * Visual finish of the phone. Each variant maps to a metallic gradient.
   * - titanium: neutral silver (default)
   * - blue: blue titanium
   * - black: space black / graphite
   * - white: bright pearlescent
   * - gold: warm gold
   */
  variant?: "titanium" | "blue" | "black" | "white" | "gold";
  /**
   * shadow intensity 0..1 (controls drop shadow opacity)
   */
  shadow?: number;
}

/**
 * iPhone 15 Pro SVG mock with:
 * - metallic finish variants
 * - precise screen clipping (rounded corners)
 * - lazy-loading video (IntersectionObserver)
 * - fit prop to control object-fit ("cover" | "contain")
 *
 * Usage:
 * <Iphone15Pro videoSrc="/milkTrack.mp4" variant="titanium" fit="cover" />
 */
export default function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  videoSrc,
  poster,
  autoplay = true,
  muted = true,
  loop = true,
  fit = "cover",
  lazy = true,
  variant = "titanium",
  shadow = 0.6,
  ...props
}: Iphone15ProProps) {
  const foRef = useRef<SVGForeignObjectElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(!lazy);

  // screen rectangle (copied from your original values)
  const screenX = 21.25;
  const screenY = 19.25;
  const screenW = 389.5;
  const screenH = 843.5;
  const screenRx = 55.75;

  // Start lazy loading when the screen foreignObject becomes visible
  useEffect(() => {
    if (!lazy) return;
    if (!foRef.current) return;
    let obs: IntersectionObserver | null = null;

    obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            obs?.disconnect();
            break;
          }
        }
      },
      { root: null, threshold: 0.35 }
    );

    obs.observe(foRef.current);
    return () => obs?.disconnect();
  }, [lazy]);

  // Autoplay attempt when loaded
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !shouldLoad) return;
    // set objectFit style explicitly
    v.style.objectFit = fit;
    v.style.objectPosition = "50% 50%";
    if (autoplay && muted) {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // autoplay blocked: fine, it will wait for user interaction
        });
      }
    }
  }, [shouldLoad, autoplay, muted, fit]);

  // Helper to choose gradient id by variant
  const metalId = `metalGradient-${variant}`;

  // Shadow opacity clamp
  const shadowOpacity = Math.max(0, Math.min(1, shadow));

  // inline style for the inner wrapper inside foreignObject (precise clipping)
  const innerWrapperStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: `${screenRx}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
  };

  const videoStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: fit,
    objectPosition: "50% 50%",
    display: "block",
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={props?.["aria-label"] ?? "iPhone 15 Pro mockup"}
      {...props}
    >
      {/* Drop shadow ellipse (radial-like) */}
      <ellipse
        cx={width / 2}
        cy={height - Math.max(14, Math.round(width * 0.04))}
        rx={width / 2.2}
        ry={18}
        fill={`url(#shadowGradient)`}
        opacity={shadowOpacity}
      />

      {/* Outer metallic frame using variant-based gradient */}
      <path
        d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
        fill={`url(#${metalId})`}
        stroke={`url(#edgeGloss-${variant})`}
        strokeWidth={0.6}
      />

      {/* Bezel + inner surface */}
      <path
        d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
        fill="url(#bezelGradient)"
      />

      {/* glass highlight overlay (subtle) */}
      <path
        d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
        fill="url(#glassOverlay)"
        opacity="0.18"
      />

      {/* Raster fallback image (optional) */}
      {src && (
        <image
          href={src}
          x={screenX}
          y={screenY}
          width={screenW}
          height={screenH}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      )}

      {/* Video zone (HTML inside foreignObject) */}
      {videoSrc && (
        <foreignObject
          ref={foRef}
          x={screenX}
          y={screenY}
          width={screenW}
          height={screenH}
        >
          <div style={innerWrapperStyle}>
            <video
              ref={videoRef}
              src={shouldLoad ? videoSrc : undefined}
              poster={poster}
              playsInline
              muted={muted}
              loop={loop}
              autoPlay={autoplay && muted}
              aria-label="iPhone screen demo"
              style={videoStyle}
            />
          </div>
        </foreignObject>
      )}

      {/* Notch area (keeps subtle shading to match metal) */}
      <path
        d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
        fill="url(#notchGradient)"
      />

      {/* small inner details */}
      <path
        d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
        fill="#F5F5F5"
        opacity={0.18}
      />
      <path d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z" fill="#E5E5E5" opacity={0.22} />

      <defs>
        {/* -------- shadow */}
        <radialGradient id="shadowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#000" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        {/* -------- bezel glass / surface */}
        <linearGradient id="bezelGradient" x1="0" y1="0" x2="0" y2={height}>
          <stop offset="0%" stopColor="#111111" />
          <stop offset="50%" stopColor="#070707" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>

        {/* subtle glass overlay to simulate screen reflection */}
        <linearGradient id="glassOverlay" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.01" />
        </linearGradient>

        {/* notch gradient */}
        <linearGradient id="notchGradient" x1="0" y1="30" x2="0" y2="67">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>

        {/* -------- metal finishes variants */}
        {/* titanium - neutral silver */}
        <linearGradient id="metalGradient-titanium" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d7d9db" />
          <stop offset="30%" stopColor="#f3f4f5" />
          <stop offset="60%" stopColor="#bdbfc1" />
          <stop offset="100%" stopColor="#8f9193" />
        </linearGradient>
        <linearGradient id="edgeGloss-titanium" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* blue titanium */}
        <linearGradient id="metalGradient-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e6f0ff" />
          <stop offset="30%" stopColor="#c7e0ff" />
          <stop offset="60%" stopColor="#89b8ea" />
          <stop offset="100%" stopColor="#425e8a" />
        </linearGradient>
        <linearGradient id="edgeGloss-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* black / graphite */}
        <linearGradient id="metalGradient-black" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="30%" stopColor="#1f1f1f" />
          <stop offset="60%" stopColor="#0b0b0b" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="edgeGloss-black" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* white / pearlescent */}
        <linearGradient id="metalGradient-white" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#fafafa" />
          <stop offset="60%" stopColor="#e9e9e9" />
          <stop offset="100%" stopColor="#cfcfcf" />
        </linearGradient>
        <linearGradient id="edgeGloss-white" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* gold / warm */}
        <linearGradient id="metalGradient-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff3e6" />
          <stop offset="30%" stopColor="#ffd7a8" />
          <stop offset="60%" stopColor="#d19a56" />
          <stop offset="100%" stopColor="#8b5a2b" />
        </linearGradient>
        <linearGradient id="edgeGloss-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* rounded screen clip (keeps same rounding as design) */}
        <clipPath id="roundedCorners">
          <rect x={screenX} y={screenY} width={screenW} height={screenH} rx={screenRx} ry={screenRx} />
        </clipPath>
      </defs>
    </svg>
  );
}
