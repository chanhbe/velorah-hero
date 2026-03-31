import { useEffect, useState } from "react";

/**
 * IntroScreen
 * -----------
 * Splash screen hiển thị khi vào web:
 * 1. Logo draw-on (stroke animation)
 * 2. Dots tỏa ra xung quanh
 * 3. Tên "chanhbe®" fade in
 * 4. Toàn màn hình fade out → trang chính hiện ra
 *
 * Dùng trong App.tsx:
 *   const [introComplete, setIntroComplete] = useState(false);
 *   if (!introComplete) return <IntroScreen onComplete={() => setIntroComplete(true)} />;
 */

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<"idle" | "animate" | "fadeout">("idle");

  useEffect(() => {
    // Bắt đầu animate ngay khi mount
    const t1 = setTimeout(() => setPhase("animate"), 100);
    // Sau 2.8s thì fade out toàn màn hình
    const t2 = setTimeout(() => setPhase("fadeout"), 2800);
    // Sau khi fade out xong (0.8s) thì gọi onComplete
    const t3 = setTimeout(() => onComplete(), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const isAnimating = phase === "animate" || phase === "fadeout";

  // 20 dots xung quanh logo
  const dots = Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * 2 * Math.PI - Math.PI / 2;
    const radius = 115;
    const size = i % 4 === 0 ? 9 : i % 3 === 0 ? 6 : i % 2 === 0 ? 4 : 3;
    const delay = (i / 20) * 0.45;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      size,
      delay,
    };
  });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "fadeout" ? 0 : 1,
        transition: phase === "fadeout" ? "opacity 0.8s cubic-bezier(0.4,0,0.2,1)" : "none",
        pointerEvents: phase === "fadeout" ? "none" : "all",
      }}
    >
      {/* Glow nền */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isAnimating
            ? "radial-gradient(ellipse 50% 45% at 50% 50%, rgba(255,255,255,0.035) 0%, transparent 70%)"
            : "none",
          transition: "background 1.5s ease",
          pointerEvents: "none",
        }}
      />

      {/* Logo + dots wrapper */}
      <div
        style={{
          position: "relative",
          width: 280,
          height: 280,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Dots */}
        {dots.map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              background: isAnimating ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0)",
              left: "50%",
              top: "50%",
              transform: isAnimating
                ? `translate(calc(-50% + ${dot.x}px), calc(-50% + ${dot.y}px)) scale(1)`
                : "translate(-50%, -50%) scale(0)",
              transition: isAnimating
                ? `transform 0.75s cubic-bezier(0.34,1.56,0.64,1) ${dot.delay}s, background 0.5s ${dot.delay + 0.1}s ease`
                : "none",
            }}
          />
        ))}

        {/* SVG Logo */}
        <div
          style={{
            opacity: isAnimating ? 1 : 0,
            transform: isAnimating ? "scale(1) rotate(0deg)" : "scale(0.25) rotate(-25deg)",
            transition: isAnimating
              ? "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s"
              : "none",
          }}
        >
          <svg
            width="96"
            height="96"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ellipse đứng */}
            <ellipse
              cx="45" cy="45" rx="28" ry="40"
              stroke="white"
              strokeWidth="1.8"
              style={{
                strokeDasharray: 222,
                strokeDashoffset: isAnimating ? 0 : 222,
                transition: isAnimating
                  ? "stroke-dashoffset 1.2s cubic-bezier(0.6,0,0.4,1) 0.1s"
                  : "none",
              }}
            />
            {/* Ellipse ngang */}
            <ellipse
              cx="45" cy="45" rx="40" ry="28"
              stroke="white"
              strokeWidth="1.8"
              style={{
                strokeDasharray: 222,
                strokeDashoffset: isAnimating ? 0 : 222,
                transition: isAnimating
                  ? "stroke-dashoffset 1.2s cubic-bezier(0.6,0,0.4,1) 0.28s"
                  : "none",
              }}
            />
            {/* Ellipse chéo mờ */}
            <ellipse
              cx="45" cy="45" rx="34" ry="34"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.3"
              transform="rotate(45 45 45)"
              style={{
                strokeDasharray: 214,
                strokeDashoffset: isAnimating ? 0 : 214,
                transition: isAnimating
                  ? "stroke-dashoffset 1.2s cubic-bezier(0.6,0,0.4,1) 0.46s"
                  : "none",
              }}
            />
          </svg>
        </div>
      </div>

      {/* Tên */}
      <p
        style={{
          marginTop: 48,
          fontFamily: "'Playfair Display', 'Georgia', serif",
          letterSpacing: "0.28em",
          fontSize: "1.15rem",
          color: "rgba(255,255,255,0.88)",
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? "translateY(0)" : "translateY(14px)",
          transition: isAnimating
            ? "opacity 0.8s ease 0.75s, transform 0.8s ease 0.75s"
            : "none",
          userSelect: "none",
        }}
      >
        chanhbe
        <sup style={{ fontSize: "0.5em", marginLeft: 2, opacity: 0.45 }}>®</sup>
      </p>

      {/* Tagline nhỏ */}
      <p
        style={{
          marginTop: 14,
          fontFamily: "monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.25)",
          opacity: isAnimating ? 1 : 0,
          transition: isAnimating ? "opacity 0.8s ease 1.1s" : "none",
          userSelect: "none",
        }}
      >
        Data · Design · Experience
      </p>
    </div>
  );
}