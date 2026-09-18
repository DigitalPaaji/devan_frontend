"use client";

import { memo, useEffect, useRef } from "react";

const TWO_PI = Math.PI * 2;

const DotField = memo(
  ({
    dotRadius = 1.4,
    dotSpacing = 15,
    cursorRadius = 420,
    cursorForce = 0.1,
    bulgeOnly = true,
    bulgeStrength = 55,
    glowRadius = 180,
    sparkle = false,
    waveAmplitude = 0,
    gradientFrom = "rgba(47, 111, 92, 0.20)",
    gradientTo = "rgba(176, 141, 87, 0.12)",
    glowColor = "#2F6F5C",
    className = "",
    ...rest
  }) => {
    const canvasRef = useRef(null);
    const glowRef = useRef(null);

    const dotsRef = useRef([]);
    const rafRef = useRef(null);

    const mouseRef = useRef({
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      speed: 0,
    });

    const sizeRef = useRef({
      w: 0,
      h: 0,
      offsetX: 0,
      offsetY: 0,
    });

    const glowOpacity = useRef(0);
    const engagement = useRef(0);

    const propsRef = useRef({});

    propsRef.current = {
      dotRadius,
      dotSpacing,
      cursorRadius,
      cursorForce,
      bulgeOnly,
      bulgeStrength,
      glowRadius,
      sparkle,
      waveAmplitude,
      gradientFrom,
      gradientTo,
    };

    const glowIdRef = useRef(
      `dot-field-glow-${Math.random().toString(36).slice(2, 9)}`
    );

    useEffect(() => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const ctx = canvas.getContext("2d", {
        alpha: true,
      });

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      let resizeTimer;

      // ----------------------------------
      // BUILD DOTS
      // ----------------------------------

      function buildDots(w, h) {
        const p = propsRef.current;

        const step = p.dotRadius + p.dotSpacing;

        const cols = Math.floor(w / step);
        const rows = Math.floor(h / step);

        const padX = (w % step) / 2;
        const padY = (h % step) / 2;

        const dots = new Array(rows * cols);

        let index = 0;

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const ax = padX + col * step + step / 2;
            const ay = padY + row * step + step / 2;

            dots[index++] = {
              ax,
              ay,

              sx: ax,
              sy: ay,

              vx: 0,
              vy: 0,

              x: ax,
              y: ay,
            };
          }
        }

        dotsRef.current = dots;
      }

      // ----------------------------------
      // RESIZE
      // ----------------------------------

      function doResize() {
        const parent = canvas.parentElement;

        if (!parent) return;

        const rect = parent.getBoundingClientRect();

        const w = rect.width;
        const h = rect.height;

        canvas.width = w * dpr;
        canvas.height = h * dpr;

        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        sizeRef.current = {
          w,
          h,
          offsetX: rect.left + window.scrollX,
          offsetY: rect.top + window.scrollY,
        };

        buildDots(w, h);
      }

      function resize() {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
          doResize();
        }, 100);
      }

      // ----------------------------------
      // MOUSE
      // ----------------------------------

      function onMouseMove(e) {
        const s = sizeRef.current;

        mouseRef.current.x = e.pageX - s.offsetX;
        mouseRef.current.y = e.pageY - s.offsetY;
      }

      function updateMouseSpeed() {
        const m = mouseRef.current;

        const dx = m.prevX - m.x;
        const dy = m.prevY - m.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        m.speed += (distance - m.speed) * 0.5;

        if (m.speed < 0.001) {
          m.speed = 0;
        }

        m.prevX = m.x;
        m.prevY = m.y;
      }

      const speedInterval = setInterval(updateMouseSpeed, 20);

      // ----------------------------------
      // ANIMATION
      // ----------------------------------

      let frameCount = 0;

      function tick() {
        frameCount++;

        const dots = dotsRef.current;
        const mouse = mouseRef.current;

        const { w, h } = sizeRef.current;

        const p = propsRef.current;

        const time = frameCount * 0.02;

        // Cursor engagement
        const targetEngagement = Math.min(mouse.speed / 5, 1);

        engagement.current +=
          (targetEngagement - engagement.current) * 0.06;

        if (engagement.current < 0.001) {
          engagement.current = 0;
        }

        const engagementValue = engagement.current;

        // Glow
        glowOpacity.current +=
          (engagementValue - glowOpacity.current) * 0.08;

        if (glowRef.current) {
          glowRef.current.setAttribute("cx", mouse.x);
          glowRef.current.setAttribute("cy", mouse.y);

          glowRef.current.style.opacity = glowOpacity.current;
        }

        // Clear
        ctx.clearRect(0, 0, w, h);

        // Gradient
        const gradient = ctx.createLinearGradient(0, 0, w, h);

        gradient.addColorStop(0, p.gradientFrom);
        gradient.addColorStop(1, p.gradientTo);

        ctx.fillStyle = gradient;

        const cursorRadius = p.cursorRadius;
        const cursorRadiusSq = cursorRadius * cursorRadius;

        const dotDrawRadius = p.dotRadius * 0.7 ;

        ctx.beginPath();

        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i];

          const dx = mouse.x - dot.ax;
          const dy = mouse.y - dot.ay;

          const distanceSq = dx * dx + dy * dy;

          // ----------------------------------
          // BULGE EFFECT
          // ----------------------------------

          if (
            distanceSq < cursorRadiusSq &&
            engagementValue > 0.01
          ) {
            const distance = Math.sqrt(distanceSq);

            if (p.bulgeOnly) {
              const normalized =
                1 - distance / cursorRadius;

              const push =
                normalized *
                normalized *
                p.bulgeStrength *
                engagementValue;

              const angle = Math.atan2(dy, dx);

              const targetX =
                dot.ax - Math.cos(angle) * push;

              const targetY =
                dot.ay - Math.sin(angle) * push;

              dot.sx += (targetX - dot.sx) * 0.15;
              dot.sy += (targetY - dot.sy) * 0.15;
            } else {
              const distanceSafe = Math.max(distance, 1);

              const angle = Math.atan2(dy, dx);

              const move =
                (500 / distanceSafe) *
                (mouse.speed * p.cursorForce);

              dot.vx += Math.cos(angle) * -move;
              dot.vy += Math.sin(angle) * -move;
            }
          } else if (p.bulgeOnly) {
            // Return to original position
            dot.sx += (dot.ax - dot.sx) * 0.1;
            dot.sy += (dot.ay - dot.sy) * 0.1;
          }

          // ----------------------------------
          // PHYSICAL MOVEMENT
          // ----------------------------------

          if (!p.bulgeOnly) {
            dot.vx *= 0.9;
            dot.vy *= 0.9;

            dot.x = dot.ax + dot.vx;
            dot.y = dot.ay + dot.vy;

            dot.sx += (dot.x - dot.sx) * 0.1;
            dot.sy += (dot.y - dot.sy) * 0.1;
          }

          // ----------------------------------
          // WAVE
          // ----------------------------------

          let drawX = dot.sx;
          let drawY = dot.sy;

          if (p.waveAmplitude > 0) {
            drawY +=
              Math.sin(dot.ax * 0.03 + time) *
              p.waveAmplitude;

            drawX +=
              Math.cos(dot.ay * 0.03 + time * 0.7) *
              p.waveAmplitude *
              0.5;
          }

          // ----------------------------------
          // SPARKLE
          // ----------------------------------

          if (p.sparkle) {
            const hash =
              ((i * 2654435761) ^
                (frameCount >> 3)) >>>
              0;

            if (hash % 100 < 3) {
              ctx.moveTo(
                drawX + dotDrawRadius * 1.8,
                drawY
              );

              ctx.arc(
                drawX,
                drawY,
                dotDrawRadius * 1.8,
                0,
                TWO_PI
              );
            } else {
              ctx.moveTo(
                drawX + dotDrawRadius,
                drawY
              );

              ctx.arc(
                drawX,
                drawY,
                dotDrawRadius,
                0,
                TWO_PI
              );
            }
          } else {
            ctx.moveTo(
              drawX + dotDrawRadius,
              drawY
            );

            ctx.arc(
              drawX,
              drawY,
              dotDrawRadius,
              0,
              TWO_PI
            );
          }
        }

        ctx.fill();

        rafRef.current = requestAnimationFrame(tick);
      }

      // ----------------------------------
      // INIT
      // ----------------------------------

      doResize();

      window.addEventListener("resize", resize);

      window.addEventListener(
        "mousemove",
        onMouseMove,
        {
          passive: true,
        }
      );

      rafRef.current = requestAnimationFrame(tick);

      // ----------------------------------
      // CLEANUP
      // ----------------------------------

      return () => {
        cancelAnimationFrame(rafRef.current);

        clearInterval(speedInterval);
        clearTimeout(resizeTimer);

        window.removeEventListener("resize", resize);

        window.removeEventListener(
          "mousemove",
          onMouseMove
        );
      };
    }, []);

    return (
      <div
        className={`pointer-events-none relative h-full w-full ${className}`}
        {...rest}
      >
        {/* DOT CANVAS */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {/* CURSOR GLOW */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <radialGradient
              id={glowIdRef.current}
            >
              <stop
                offset="0%"
                stopColor={glowColor}
                stopOpacity="0.35"
              />

              <stop
                offset="45%"
                stopColor={glowColor}
                stopOpacity="0.12"
              />

              <stop
                offset="100%"
                stopColor="transparent"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>

          <circle
            ref={glowRef}
            cx="-9999"
            cy="-9999"
            r={glowRadius}
            fill={`url(#${glowIdRef.current})`}
            style={{
              opacity: 0,
              willChange: "opacity",
            }}
          />
        </svg>
      </div>
    );
  }
);

DotField.displayName = "DotField";

export default DotField;