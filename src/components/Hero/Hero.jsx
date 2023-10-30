import React from "react";
import style from "./hero.module.scss";
import { motion } from "framer-motion";
import { generals } from "../../utils/animate";

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
        <img src="./BASED.svg" alt="based" width={"100%"} height={"auto"} />
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
