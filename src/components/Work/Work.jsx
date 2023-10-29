import { arrow, titles } from "../../utils/animate";
import style from "./work.module.scss";
import { motion } from "framer-motion";

const images = [
  {
    url: "./img.jpg",
    title: "Working with 3D Objects",
    company: "Polar S.r.l",
  },
  { url: "./img2.jpg", title: "Abstract qualities", company: "Vero Magazine" },
];
const work = [
  { url: "./W.svg" },
  { url: "./O.svg" },
  { url: "./R.svg" },
  { url: "./K.svg" },
];

export default function Work() {
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
          <p className="link">(WORK)</p>
          <p>Season 2022 - 2023</p>
        </div>
      </div>

      <div className={style.workgallery}>
        {images.map((image, index) => (
          <div key={index} className={style.singleimage}>
            <div className={style.imagecontainer}>
              <img src={image.url} alt={image.url} className={style.image} />

              <div className={style.hovervideo}>
                <video loop autoPlay muted playsInline>
                  <source
                    src="https://static.vecteezy.com/system/resources/previews/021/626/300/mp4/squares-background-colorful-3d-free-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            <a className="link">{image.title}</a>
            <p>({image.company})</p>
          </div>
        ))}
      </div>

      <div className={style.row}>
        <div className={style.col}></div>
        <div className={style.col}>
          <motion.img
            variants={arrow}
            initial="initial"
            whileInView="animate"
            exit="exit"
            src="./arrow.svg"
            alt="arrow"
          />
          <motion.h1
            variants={titles}
            initial="initial"
            whileInView="animate"
            className="title"
          >
            See more
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
