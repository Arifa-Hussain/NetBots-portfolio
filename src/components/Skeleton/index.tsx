import { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const LogoAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is not null
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Ensure context is available

    // Set initial canvas size
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const dotPositions: { x: number; y: number }[] = [
      { x: 0, y: -90 },
      { x: 0, y: -30 },
      { x: -20, y: -60 },
      { x: 20, y: -60 },
      { x: 0, y: 30 },
      { x: -30, y: 0 },
      { x: 30, y: 0 },
      { x: -60, y: -60 },
      { x: 60, y: -60 },
      { x: -60, y: 60 },
      { x: 60, y: 60 },
      { x: -80, y: 0 },
      { x: 80, y: 0 },
      { x: 0, y: 80 },
      { x: -75, y: -30 },
      { x: -75, y: 30 },
      { x: 75, y: -30 },
      { x: 75, y: 30 },
    ];

    const connections: [number, number][] = [
      [0, 2],
      [2, 11],
      [0, 3],
      [3, 12],
      [12, 17],
      [11, 15],
      [4, 13],
      [4, 9],
      [4, 10],
      [5, 7],
      [5, 14],
      [5, 9],
      [6, 10],
      [6, 8],
      [6, 16],
      [1, 8],
      [1, 7],
      [1, 5],
      [5, 4],
      [4, 6],
      [6, 1],
    ];

    function drawDot(x: number, y: number, size: number = 8) {
      if (!ctx) return;
      const largerDotsIndices = [0, 1, 8, 7, 9, 10, 11, 12, 13];
      const smallerDotsIndices = [2, 3, 4, 5, 6, 14, 15, 16, 17];
      const index = dotPositions.findIndex((dot) => dot.x === x && dot.y === y);

      if (largerDotsIndices.includes(index)) {
        size = 14;
      }
      if (smallerDotsIndices.includes(index)) {
        size = 10;
      }

      ctx.beginPath();
      ctx.arc(centerX + x, centerY + y, size, 0, Math.PI * 2);
      ctx.fillStyle = "#2A327D";
      ctx.fill();
    }

    function drawLine(x1: number, y1: number, x2: number, y2: number) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(centerX + x1, centerY + y1);
      ctx.lineTo(centerX + x2, centerY + y2);
      ctx.strokeStyle = "#2A327D";
      ctx.lineWidth = 6;
      ctx.stroke();
    }

    function animateConnections() {
      let step = 0;
      const delay = 100;

      function drawNextConnection() {
        if (!ctx || step >= connections.length) return;
        const [startIdx, endIdx] = connections[step];
        const start = dotPositions[startIdx];
        const end = dotPositions[endIdx];

        drawLine(start.x, start.y, end.x, end.y);
        step++;

        setTimeout(drawNextConnection, delay);
      }

      drawNextConnection();
    }

    function init() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      dotPositions.forEach((dot) => drawDot(dot.x, dot.y));
      animateConnections();
    }
    

    init();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <Box
      sx={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </Box>
  );
};

export default LogoAnimation;
