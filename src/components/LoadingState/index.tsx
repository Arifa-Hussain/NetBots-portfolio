import React, { useState, useEffect } from "react";
import LogoAnimation from "../Skeleton";
import { useLocation } from "react-router-dom";

interface LoadingStateProps {
  children?: React.ReactNode; // Make children optional
}

const LoadingState: React.FC<LoadingStateProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // Detect changes in the route

  // Simulate loading (replace with actual loading logic if needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set your loading duration here, for example 3 seconds

    return () => clearTimeout(timer); // Clean up on component unmount
  }, [location]); // Re-run the effect every time the location (route) changes
console.log('loading true')
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        >
          <LogoAnimation />
        </div>
      ) : (
        <>{children}</> // Render children once loading is complete
      )}
    </div>
  );
};

export default LoadingState;
