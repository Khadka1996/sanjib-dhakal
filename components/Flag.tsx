"use client";
import { useEffect, useRef, useState } from "react";
export default function Flag({ w = 440 }: { w?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [W, setW] = useState(Math.min(w, 300));
  useEffect(() => {
    const f = () => setW(Math.max(220, Math.min(w, Math.floor(window.innerWidth * 0.78))));
    f(); window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, [w]);
  useEffect(() => {
    const c = ref.current!, g = c.getContext("2d")!;
    const H = Math.round(W * 0.74), dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    c.width = W * dpr; c.height = (H + 60) * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const o = document.createElement("canvas"); o.width = W; o.height = H;
    const f = o.getContext("2d")!, red = "#cf1230";
    f.fillStyle = red; f.fillRect(0, 0, W, H);
    f.fillStyle = "#fff"; f.fillRect(0, H / 3, W, H / 3);
    f.fillStyle = red;
    const star = (x: number, y: number, r: number) => {
      f.beginPath();
      for (let i = 0; i < 10; i++) { const R = i % 2 ? r * 0.4 : r, a = (i * Math.PI) / 5; f.lineTo(x + R * Math.sin(a), y - R * Math.cos(a)); }
      f.closePath(); f.fill();
    };
    [[0, -0.085], [-0.16, 0], [0.16, 0], [0, 0.085]].forEach(([dx, dy]) => star(W / 2 + dx * W, H / 2 + dy * H, H * 0.06));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, vis = true;
    const draw = (ms: number) => {
      const t = ms / 650;
      g.clearRect(0, 0, W, H + 60);
      for (let x = 0; x < W; x += 2) {
        const k = x / W, amp = 15 * k * (W / 440 + 0.3);
        const dy = 28 + Math.sin(x / (W / 11) - t) * amp + Math.sin(x / (W / 26) - t * 1.8) * amp * 0.22;
        g.drawImage(o, x, 0, 2, H, x, dy, 2, H);
        const s = Math.cos(x / (W / 11) - t) * k;
        g.fillStyle = s > 0 ? `rgba(0,0,0,${s * 0.16})` : `rgba(255,255,255,${-s * 0.14})`;
        g.fillRect(x, dy, 2, H);
      }
      if (!reduce && vis) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); } });
    io.observe(c);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [W]);
  return (
    <div className="flag" style={{ width: W }}>
      <i className="pole" />
      <canvas ref={ref} style={{ width: W, height: Math.round(W * 0.74) + 60 }} role="img" aria-label="Nepali Congress flag" />
    </div>
  );
}
