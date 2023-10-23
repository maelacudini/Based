import style from "./about.module.scss";
import { motion } from "framer-motion";
import { arrow, generals, titleintro, titles } from "../../utils/animate";

export default function About() {
  const about = "About";
  return (
    <div id="about" className={style.main}>
      <motion.div
        variants={generals}
        initial="initial"
        whileInView="animate"
        exit="exit"
      >
        <video loop autoPlay muted>
          <source
            src="https://static.vecteezy.com/system/resources/previews/021/626/300/mp4/squares-background-colorful-3d-free-video.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className={style.row}>
        <div className={style.col}>
          <motion.img
            variants={arrow}
            initial="initial"
            whileInView="animate"
            exit="exit"
            src="./arrow.svg"
            alt="arrow"
          />
        </div>

        <div className={style.col}>
          <div className={style.container}>
            {about.split("").map((letter, index) => (
              <div key={index} className={style.letterContainer}>
                <motion.h1
                  className="title"
                  variants={titles}
                  initial="initial"
                  whileInView="animate"
                  exit="exit"
                  custom={index}
                >
                  {letter}
                </motion.h1>
              </div>
            ))}
          </div>
          <h1>Cultivating Digital Excellence: Introducing BASED</h1>
          <p>
            Based, founded in the vibrant California landscape in 2021, is a
            creative powerhouse that specializes in crafting exceptional brand
            identities and web services. We are passionate about transforming
            ideas into compelling visual stories and digital experiences that
            captivate and engage. BASED is your partner in building unique,
            memorable brands that resonate with your audience.
          </p>

          <button className="button">Read more</button>
        </div>
      </div>
    </div>
  );
}
