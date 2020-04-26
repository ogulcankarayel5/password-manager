import React, { useState, useEffect, useRef } from "react";


export const useOnMouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return position;
};
