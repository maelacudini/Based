import style from "./about.module.scss";
import { motion } from "framer-motion";
import { arrow, generals, titles } from "../../utils/animate";

export default function About() {
  const words = [
    "Cultivating",
    "Digital",
    "Excellence",
    "since",
    "2010:",
    "Introducing",
    "BASED.",
  ];

  return (
    <div id="about" className={style.main}>
      <motion.div
        variants={generals}
        initial="initial"
        whileInView="animate"
        exit="exit"
      >
        <video loop autoPlay muted playsInline>
          <source
            src="https://static.vecteezy.com/system/resources/previews/014/179/153/mp4/timelapse-clouds-quickly-fly-over-the-hollywood-sign-4k-free-video.mp4"
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
            style={{ marginTop: "10px" }}
          />
        </div>

        <div className={style.col}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {words.map((word, index) => (
              <div key={index} style={{ overflowX: "hidden" }}>
                <motion.h1
                  custom={index}
                  variants={titles}
                  initial="initial"
                  whileInView="animate"
                  className="title"
                  style={{ margin: 0 }}
                >
                  {word}&nbsp;
                </motion.h1>
              </div>
            ))}
          </div>
          <div className={style.insiderow}>
            <div className={style.insidecol}>
              <p className="link">(Approach)</p>
            </div>
            <div className={style.insidecol}>
              <p>
                Based, founded in the vibrant California landscape in 2021, is a
                creative powerhouse that specializes in crafting exceptional
                brand identities and web services. We are passionate about
                transforming ideas into compelling visual stories and digital
                experiences that captivate and engage. BASED is your partner in
                building unique, memorable brands that resonate with your
                audience.
              </p>

              <button className="button">Read more about our approach</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
