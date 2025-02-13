import React, { useEffect, useRef } from "react";

const Sparks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSpark = () => {
      const spark = document.createElement("div");

      // Randomly choose spark size
      const sparkTypes = ["spark-small", "spark-medium", "spark-large"];
      const sparkType =
        sparkTypes[Math.floor(Math.random() * sparkTypes.length)];
      spark.className = `spark ${sparkType}`;

      // Random starting position across full width
      const startX = Math.random() * container.offsetWidth;
      spark.style.left = `${startX}px`;
      spark.style.bottom = "0px";

      // Random drift direction
      const driftDirection = Math.random() > 0.5 ? 1 : -1;
      const drift = Math.random() * 150 * driftDirection;
      spark.style.setProperty("--spark-drift", `${drift}px`);

      container.appendChild(spark);

      // Remove spark after animation
      const duration = parseFloat(
        getComputedStyle(spark).getPropertyValue("--spark-duration")
      );
      setTimeout(() => {
        spark.remove();
      }, duration * 1000);
    };

    // Create sparks periodically with varying frequency
    const createSparkBurst = () => {
      // Create 2-5 sparks per burst
      const sparkCount = Math.floor(Math.random() * 4) + 2;
      for (let i = 0; i < sparkCount; i++) {
        setTimeout(createSpark, Math.random() * 500);
      }
    };

    // Create spark bursts every 1-2 seconds
    const interval = setInterval(() => {
      createSparkBurst();
    }, 1000 + Math.random() * 1000);

    // Initial spark burst
    createSparkBurst();

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 1,
        mask: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMask: "linear-gradient(to top, black 0%, transparent 100%)",
      }}
    />
  );
};

export default Sparks;
