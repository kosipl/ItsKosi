import { useEffect, useRef, useState } from "react";

const INTERACTIVE = 'a, button, input, textarea, [role="button"], .kosi-btn, .kosi-cell, [onclick]';

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  // Decide synchronously (in render) so the <div ref> mounts before the effect runs.
  const [enabled] = useState(
    () => typeof window !== "undefined" && !window.matchMedia("(hover: none), (pointer: coarse)").matches
  );

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("kosi-cursor-none");

    // Position (lerped), target (raw pointer), rotation, scale.
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let angle = 0;
    let scale = 0; // start hidden, grow in on first move
    let targetScale = 1;
    let hovering = false;
    let seen = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!seen) {
        seen = true;
        x = tx;
        y = ty;
        el.style.opacity = "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      hovering = !!target?.closest?.(INTERACTIVE);
      targetScale = hovering ? 1.8 : 1;
    };

    const onLeaveWindow = () => {
      el.style.opacity = "0";
      seen = false;
    };
    const onEnterWindow = () => {
      if (seen) el.style.opacity = "1";
    };

    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      scale += (targetScale - scale) * 0.18;
      if (!reduceMotion) angle += hovering ? 4 : 0.4;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
      document.documentElement.classList.remove("kosi-cursor-none");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        opacity: 0,
        willChange: "transform",
        fontFamily: "'Anton', sans-serif",
        fontSize: 24,
        lineHeight: 1,
        color: "#FF3B1D",
        userSelect: "none",
      }}
    >
      ✱
    </div>
  );
}
