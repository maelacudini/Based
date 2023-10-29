import { useMotionValue, useSpring, motion } from "framer-motion";
import style from "./cursor.module.scss";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const innerHeight = window.innerHeight;
  const innerWidth = window.innerWidth;
  const mouse = {
    x: useMotionValue(innerWidth / 2),
    y: useMotionValue(innerHeight / 2),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smooth = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        left: smooth.x,
        top: smooth.y,
      }}
      className={style.cursor}
      id="cursor"
    >
      <img src="./target.svg" alt="cursor" />
      <p>
        X: {Math.round(mousePosition.x)}, Y: {Math.round(mousePosition.y)}
      </p>
    </motion.div>
  );
}
