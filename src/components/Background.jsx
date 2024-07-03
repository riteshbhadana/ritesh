import { useEffect } from "react";
import "./Background.css";

const Background = () => {
  useEffect(() => {
    const createStars = () => {
      const container = document.querySelector(".stars-container");
      if (!container) return;

      const stars = 50; // Number of stars
      const colors = ["#ffffff", "#f0f0f0", "#cccccc"];

      for (let i = 0; i < stars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        const size = Math.random() * 2 + 1; // Random size between 1px and 3px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        const positionX = Math.random() * container.offsetWidth;
        const positionY = Math.random() * container.offsetHeight;
        star.style.left = `${positionX}px`;
        star.style.top = `${positionY}px`;

        container.appendChild(star);

        // Animate star movement
        const speed = Math.random() * 8 + 2; // Adjust speed here (between 2 and 10)
        star.style.animation = `twinkle ${speed}s linear infinite`;
      }
    };

    const createLightSparks = () => {
      const container = document.querySelector(".light-sparks-container");
      if (!container) return;

      const lightSparks = 30; // Number of light sparks

      for (let i = 0; i < lightSparks; i++) {
        const spark = document.createElement("div");
        spark.classList.add("light-spark");

        const size = Math.random() * 4 + 1; // Random size between 1px and 5px
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;

        const positionX = Math.random() * container.offsetWidth;
        const positionY = Math.random() * container.offsetHeight;
        spark.style.left = `${positionX}px`;
        spark.style.top = `${positionY}px`;

        container.appendChild(spark);

        // Animate light spark
        const speed = Math.random() * 3 + 1; // Adjust speed here (between 1 and 4)
        spark.style.animation = `sparkle ${speed}s ease-in-out infinite`;
      }
    };

    createStars();
    createLightSparks();

    // Clean up function to remove stars and sparks
    return () => {
      const stars = document.querySelectorAll(".star");
      stars.forEach((star) => star.remove());

      const sparks = document.querySelectorAll(".light-spark");
      sparks.forEach((spark) => spark.remove());
    };
  }, []);

  return (
    <div className="background">
      <div className="stars-container"></div>
      <div className="light-sparks-container"></div>
    </div>
  );
};

export default Background;
