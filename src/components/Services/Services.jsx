import { arrow, line, titles } from "../../utils/animate";
import style from "./services.module.scss";
import { motion } from "framer-motion";

const words = ["We", "go", "beyond", "animation."];

export default function Services() {
  return (
    <div id="services" className={style.main}>
      <div className={style.intro}>
        <p className="link">(SERVICES)</p>
        <p>Working holistically, from identities to full-scale applications.</p>
        <p className="link">Here you can find what services we offer.</p>
      </div>

      <div className={style.row}>
        <div className={style.col}></div>
        <div className={style.col}>
          <div className={style.services}>
            <div className={style.innercol}>
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
            <div className={style.innercol}>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {words.map((word, index) => (
                  <div key={index} style={{ overflowX: "hidden" }}>
                    <motion.h1
                      custom={index}
                      variants={titles}
                      initial="initial"
                      whileInView="animate"
                      className="title"
                    >
                      {word}&nbsp;
                    </motion.h1>
                  </div>
                ))}
              </div>
              <p>
                Our commitment to pushing the boundaries of creativity knows no
                bounds. Whether it's bringing characters to life, visualizing
                complex data, or telling compelling stories, we go the extra
                mile to ensure that our animations resonate with your audience
                on a profound level.
              </p>

              <a href="#" className="button">
                Looking for more information?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
