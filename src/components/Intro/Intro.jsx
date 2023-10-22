import { intro, titleintro } from "../../utils/animate";
import style from "./intro.module.scss";
import { motion } from "framer-motion";

const letters = [
  { url: "./B.svg" },
  { url: "./A.svg" },
  { url: "./S.svg" },
  { url: "./E.svg" },
  { url: "./D.svg" },
];

export default function Intro() {
  return (
    <motion.div
      variants={intro}
      initial="initial"
      exit="exit"
      className={style.main}
    >
      {letters.map((letter, index) => (
        <div key={index} className={style.container}>
          <motion.img
            className={style.svg}
            variants={titleintro}
            initial="initial"
            whileInView="animate"
            exit="exit"
            custom={index}
            src={letter.url}
            alt={letter.url}
          />
        </div>
      ))}
    </motion.div>
  );
}
