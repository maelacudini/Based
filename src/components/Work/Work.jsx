import { arrow, titles } from "../../utils/animate";
import style from "./work.module.scss";
import { motion } from "framer-motion";

const images = [{ url: "./img.jpg" }, { url: "./img2.jpg" }];
const work = [
  { url: "./W.svg" },
  { url: "./O.svg" },
  { url: "./R.svg" },
  { url: "./K.svg" },
];

export default function Work({ rotate, rotateInverse }) {
  return (
    <div id="work" className={style.main}>
      <div className={style.header}>
        <div className={style.container}>
          {work.map((letter, index) => (
            <div key={index} className={style.letterContainer}>
              <motion.img
                className={style.letter}
                src={letter.url}
                variants={titles}
                initial="initial"
                whileInView="animate"
                exit="exit"
                custom={index}
              />
            </div>
          ))}
        </div>
        <div className={style.workdesc}>
          <p>(WORK)</p>
          <p>Season 2022 - 2023</p>
        </div>
      </div>

      <div className={style.workgallery}>
        {images.map((image, index) => (
          <div key={index} className={style.image}>
            <img src={image.url} alt={image.url} />
            <div className={style.hovervideo}>
              <video loop autoPlay muted>
                <source
                  src="https://static.vecteezy.com/system/resources/previews/021/626/300/mp4/squares-background-colorful-3d-free-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        ))}
      </div>

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
          <h1>
            Motion that defines how brands express themselves across modern
            media. Discover our latest works, Season 2022-2023.
          </h1>
          <div className={style.innercol}>
            <div>
              <p>(WORK)</p>
            </div>
            <div>
              <p>
                In the dynamic landscape of 2022-2023, BASED has taken
                creativity to new heights, working relentlessly to provide
                cutting-edge solutions that elevate brands and web experiences.
                The 2022-2023 season has been a testament to our unwavering
                dedication to producing work that inspires and resonates, and we
                look forward to continuing this journey with you.
              </p>
              <button className="button">See more projects</button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.asterisk}>
        <motion.img
          style={{ rotate: rotate }}
          src="./asterisk.png"
          alt="asterisk"
        />
      </div>
    </div>
  );
}
