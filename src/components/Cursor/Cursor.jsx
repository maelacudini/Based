import {
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  motion,
} from "framer-motion";
import style from "./cursor.module.scss";
import { useEffect } from "react";

export default function Cursor() {
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

  const velocity = useVelocity(smooth.x);

  const scale = useTransform(velocity, [200, 0, -200], [2, 1, 2]);

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
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
        scale: scale,
      }}
      className={style.cursor}
      id="cursor"
    >
      <img src="./plus.svg" alt="cursor" />
    </motion.div>
  );
}
