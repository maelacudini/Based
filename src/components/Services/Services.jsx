import { arrow, titles } from "../../utils/animate";
import style from "./services.module.scss";
import { motion } from "framer-motion";

export default function Services() {
  const design = `Design`;
  const web = `Web-Services`;
  const brand = `Brand-Identity`;

  const words = [design, web, brand];

  return (
    <div id="services" className={style.main}>
      <div className={style.intro}>
        <p>
          Here you can find what services we offer.
          <br />
          Working holistically, from identities to full-scale applications.
        </p>
        <p>Season 2022-2023</p>
        <p>(SERVICES)</p>
      </div>

      <video
        loop
        muted
        autoPlay
        width={"100%"}
        height={"auto"}
        className={style.video}
      >
        <source
          src="https://static.vecteezy.com/system/resources/previews/021/626/300/mp4/squares-background-colorful-3d-free-video.mp4"
          type="video/mp4"
        />
      </video>

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
          <div className={style.services}>
            <h1>
              We've been working non-stop for more than twelve years, to
              guarantee you the best quality of services you could ever imagine.
            </h1>
            {words.map((word, index) => (
              <div key={index} className={style.container}>
                {word.split("").map((letter, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
