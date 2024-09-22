"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  // children?: any;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  // [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number;
  // ctx: any , 
  let ctx: CanvasRenderingContext2D | null = null;  // Correcting the type here
  // canvas: any;
  let canvas: HTMLCanvasElement | null = null;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  // const init = () => {
  //   canvas = canvasRef.current;
  //   ctx = canvas.getContext("2d");
  //   w = ctx.canvas.width = window.innerWidth;
  //   h = ctx.canvas.height = window.innerHeight;
  //   ctx.filter = `blur(${blur}px)`;
  //   nt = 0;
  //   window.onresize = function () {
  //     w = ctx.canvas.width = window.innerWidth;
  //     h = ctx.canvas.height = window.innerHeight;
  //     ctx.filter = `blur(${blur}px)`;
  //   };
  //   render();
  // };
  const init = () => {
    canvas = canvasRef.current;

    // Ensure that the canvas is not null
    if (canvas) {
      ctx = canvas.getContext("2d");
      if (ctx) {
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function () {
          w = ctx!.canvas.width = window.innerWidth;
          h = ctx!.canvas.height = window.innerHeight;
          ctx!.filter = `blur(${blur}px)`;
        };
        render();
      }
    }
  };


  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  // const drawWave = (n: number) => {
  //   nt += getSpeed();
  //   for (i = 0; i < n; i++) {
  //     ctx.beginPath();
  //     ctx.lineWidth = waveWidth || 50;
  //     ctx.strokeStyle = waveColors[i % waveColors.length];
  //     for (x = 0; x < w; x += 5) {
  //       const y = noise(x / 800, 0.3 * i, nt) * 100;
  //       ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
  //     }
  //     ctx.stroke();
  //     ctx.closePath();
  //   }
  // };
  const drawWave = (n: number) => {
    if (ctx) {
      nt += getSpeed();
      for (i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    }
  };


  // let animationId: number;
  // const render = () => {
  //   ctx.fillStyle = backgroundFill || "black";
  //   ctx.globalAlpha = waveOpacity || 0.5;
  //   ctx.fillRect(0, 0, w, h);
  //   drawWave(5);
  //   animationId = requestAnimationFrame(render);
  // };
  let animationId: number;
  const render = () => {
    if (ctx) {
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    }
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
