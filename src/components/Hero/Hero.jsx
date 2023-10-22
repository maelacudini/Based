import React from "react";
import style from "./hero.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
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
    <div>
      <div className={style.title}>
        {letters.map((letter, index) => (
          <div key={index} className={style.container}>
            <img src={letter.url} alt={letter.url} className={style.svg} />
          </div>
        ))}
        <motion.div
          variants={generals}
          initial="initial"
          whileInView="animate"
          exit="exit"
          className={`button ${style.scroll}`}
        >
          <Link to="nav" spy={true} smooth={true} offset={50} duration={500}>
            Scroll down
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
