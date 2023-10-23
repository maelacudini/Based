import style from "./nav.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { generals, menu } from "../../utils/animate";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Nav() {
  const date = new Date().toUTCString();
  const [open, setOpen] = useState(false);

  const toggleOffset = () => {
    setOpen(!open);
    const root = document.getElementById("root");
    root.style.overflow = open ? "auto" : "hidden";
  };

  return (
    <motion.nav
      variants={generals}
      initial="initial"
      whileInView="animate"
      exit="exit"
      id="nav"
      className={style.main}
    >
      <div className={style.links}>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="link"
          href="#"
        >
          About
        </Link>
        <Link
          to="work"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="link"
          href="#"
        >
          Work
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="link"
          href="#"
        >
          Services
        </Link>
      </div>
      <div className={style.date}>{date}</div>
      <a onClick={toggleOffset} className={style.menu}>
        Menu
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menu}
            initial="initial"
            animate="enter"
            exit="exit"
            className={style.offset}
          >
            <h1 className="title">About</h1>
            <h1 className="title">Work</h1>
            <h1 className="title">Services</h1>
            <h1 className="title" onClick={toggleOffset}>
              Close
            </h1>

            <div>
              <p>+12 345 678 90</p>
              <p>basedstudio@gmail.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
