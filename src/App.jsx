import "./generals.css";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Nav from "./components/Nav/Nav";
import Cursor from "./components/Cursor/Cursor";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateInverse = useTransform(scrollYProgress, [0, 1], [360, 0]);

  const [loading, setLoading] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const time = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    if (window.innerWidth > 600) {
      setShowCursor(true);
    } else {
      setShowCursor(false);
    }

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <main ref={ref}>
      <AnimatePresence mode="wait">
        {loading ? (
          <Intro />
        ) : (
          <main key="main" className="main">
            {showCursor && <Cursor />}
            <Hero />
            <Nav />
            <About />
            <Work rotate={rotate} rotateInverse={rotateInverse} />
            <Services />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </main>
  );
}
