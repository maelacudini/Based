import { intro, titleintro } from "../../utils/animate";
import style from "./intro.module.scss";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      variants={intro}
      initial="initial"
      exit="exit"
      className={style.main}
    >
      <div className={style.container}>
        <motion.img
          variants={titleintro}
          initial="initial"
          whileInView="animate"
          exit="exit"
          custom={1}
          src="./BASED.svg"
          alt="based"
          width={"100%"}
          height={"auto"}
        />
      </div>
    </motion.div>
  );
}
