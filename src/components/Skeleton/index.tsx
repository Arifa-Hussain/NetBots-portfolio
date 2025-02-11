import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const LogoAnimation = () => {
  const canvasRef = useRef(null);

  // Set up the canvas animation when the component mounts
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set initial canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize(); // Set the initial size

    // Event listener to resize canvas on window resize
    window.addEventListener("resize", setCanvasSize);

    // Dot positions (relative to the center)
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const dotPositions = [
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

    const connections = [
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

    function drawDot(x, y, size = 8) {
      const largerDotsIndices = [0, 1, 8, 7, 9, 10, 11, 12, 13];
      const smallerDotsIndices = [2, 3, 4, 5, 6, 14, 15, 16, 17];
      const index = dotPositions.findIndex(
        (dot) => dot.x === x && dot.y === y
      );

      if (largerDotsIndices.includes(index)) {
        size = 14;
      }
      if (smallerDotsIndices.includes(index)) {
        size = 10;
      }

      ctx.beginPath();
      ctx.arc(centerX + x, centerY + y, size, 0, Math.PI * 2);
      ctx.fillStyle = " #2A327D"
      ctx.fill();
    }

    function drawLine(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(centerX + x1, centerY + y1);
      ctx.lineTo(centerX + x2, centerY + y2);
      ctx.strokeStyle = " #2A327D"
      ctx.lineWidth = 6;
      ctx.stroke();
    }

    // Function to animate the connections
    function animateConnections() {
      let step = 0;
      const delay = 100;

      function drawNextConnection() {
        if (step >= connections.length) return;

        const [startIdx, endIdx] = connections[step];
        const start = dotPositions[startIdx];
        const end = dotPositions[endIdx];

        drawLine(start.x, start.y, end.x, end.y);
        step++;

        setTimeout(drawNextConnection, delay);
      }

      drawNextConnection();
    }

    // Function to initialize the canvas and start drawing
    function init() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      // Draw all dots
      dotPositions.forEach((dot) => drawDot(dot.x, dot.y));

      // Animate the connections
      animateConnections();
    }

    init(); // Initialize the animation

    return () => {
      // Clean up the event listener when the component unmounts
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
        backgroundColor:"white"
       
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </Box>
  );
};

export default LogoAnimation;
