"use client";
import { useEffect, useRef, useState } from "react";

const AnimatedCursorComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let currentX = -100,
      currentY = -100;
    let targetX = -100,
      targetY = -100;

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setVisible(true);
    };

    const leave = () => setVisible(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    // Smooth trailing animation for outer ring
    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Exact values from your old config
  const innerSize = 10;
  const outerSize = 42;
  const color = "168, 85, 247";
  const innerScale = hovering ? 1.2 : 1;
  const outerScale = hovering ? 1.5 : 1;

  return (
    <>
      {/* Outer ring — follows with smooth lag */}
      <div
        ref={outerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: outerSize * outerScale,
          height: outerSize * outerScale,
          borderRadius: "50%",
          border: "2px solid gray",
          backgroundColor: "transparent",
          pointerEvents: "none",
          zIndex: 99999,
          transform: `translate(${pos.x - (outerSize * outerScale) / 2}px, ${pos.y - (outerSize * outerScale) / 2}px)`,
          transition: "width 0.3s ease, height 0.3s ease",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Inner dot — follows instantly */}
      <div
        ref={innerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: innerSize * innerScale,
          height: innerSize * innerScale,
          borderRadius: "50%",
          backgroundColor: clicking
            ? `rgba(${color}, 0.5)`
            : `rgba(${color}, 1)`,
          pointerEvents: "none",
          zIndex: 99999,
          transform: `translate(${pos.x - (innerSize * innerScale) / 2}px, ${pos.y - (innerSize * innerScale) / 2}px)`,
          transition:
            "width 0.3s ease, height 0.3s ease, background-color 0.15s ease",
          opacity: visible ? 1 : 0,
        }}
      />

      {children}
    </>
  );
};

export default AnimatedCursorComponent;

// "use client"
// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// const DynamicAnimatedCursor = dynamic(() => import('react-animated-cursor'), { ssr: false });

// const AnimatedCursorComponent = ({ children }: { children: React.ReactNode }) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   return (
//     <>
//       {isMounted && (
//         <DynamicAnimatedCursor
//           innerSize={10}
//           outerSize={42}
//           color='168, 85, 247'
//           innerScale={1.2}
//           outerScale={1.5}
//           outerStyle={{
//             border: '2px solid gray',
//             backgroundColor: 'transparent'
//           }}
//         />
//       )}
//       {children}
//     </>
//   );
// };

// export default AnimatedCursorComponent;
