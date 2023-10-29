import React from "react";
import style from "./hero.module.scss";
import { motion } from "framer-motion";
import { generals } from "../../utils/animate";

const letters = [
  { url: "./B.svg" },
  { url: "./A.svg" },
  { url: "./S.svg" },
  { url: "./E.svg" },
  { url: "./D.svg" },
];

export default function Hero() {
  return (
    <div className={style.main}>
      <motion.div
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className={style.title}
      >
        {letters.map((letter, index) => (
          <div key={index} className={style.container}>
            <img src={letter.url} alt={letter.url} className={style.svg} />
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={generals}
        initial="initial"
        animate="animate"
        exit="exit"
        className={style.description}
      >
        <div className={style.col}>
          <motion.h1
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            className={style.drag}
          >
            Based in LA, building your brand worldwide.
          </motion.h1>
          <button className="button">Learn more about us</button>
        </div>
        <div className={style.col}>
          <button className="button" style={{ textDecoration: "none" }}>
            (Scroll)
          </button>
        </div>
      </motion.div>
    </div>
  );
}
