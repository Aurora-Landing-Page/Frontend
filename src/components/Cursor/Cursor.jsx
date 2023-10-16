import React, { useState, useEffect } from "react";
import "./Cursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div class="cursor">
        <div class="cursor__ball cursor__ball--big ">
          <svg height="30" width="30">
            <circle cx="2" cy="2" r="10" stroke-width="0"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
