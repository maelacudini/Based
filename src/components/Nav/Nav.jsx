import style from "./nav.module.scss";
import { motion } from "framer-motion";
import { generals } from "../../utils/animate";
import { Link } from "react-scroll";

export default function Nav() {
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
      <div className={style.dot}></div>
    </motion.nav>
  );
}
