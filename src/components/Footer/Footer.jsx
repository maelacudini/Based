import { titles } from "../../utils/animate";
import style from "./footer.module.scss";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={style.main}>
      <div className={style.contact}>
        <h1>Work with us</h1>
        <h1>
          <u>based@gmail.com</u>
        </h1>
      </div>

      <div className={style.footer}>
        <div className={style.social}>
          <a href="#" className="link">
            Instagram
          </a>
          <a href="#" className="link">
            LinkedIn
          </a>
          <a href="#" className="link">
            Facebook
          </a>
          <a href="#" className="link">
            Twitter
          </a>
        </div>

        <motion.img
          variants={titles}
          initial="initial"
          whileInView="animate"
          src="./BASED.svg"
          alt="based"
          width={"200px"}
          height={"auto"}
        />
      </div>

      <div className={style.copiright}>
        <small>Some copiright statement</small>
        <small>© 2010 - 2023</small>
      </div>
    </footer>
  );
}
