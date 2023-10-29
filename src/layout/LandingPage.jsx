import React from "react";
import Navigation from "./Navigation";
import Inicio from "./Inicio";
import Jogo from "./Jogo";
import Personagens from "./Personagens";
import Regras from "./Regras";
import Separator from "../components/separatorLarger";
import VamosJogar from "./VamosJogar/index";
import Campanha from "./Campanha";
import NaMidia from "./NaMidia";
import Footer from "./Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import NavigationMobile from "./NavigationMobile";
import ScrollReveal from "../utils/animations/ScrollReveal";
import VamosJogarMobile from './VamosJogarMobile/index';

function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="container-landing-page">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="landing-page">
        <header className="">
          <Navigation />
          <div className="z-50">
            <NavigationMobile />
          </div>
        </header>
        <main>
          <div id="inicio" className="md:h-screen z-0 overflow-y-hidden">
            <Inicio />
          </div>
          <section id="jogo" className="z-20">
            <Jogo />
          </section>
          <section id="personagens" className="md:px-20">
            <Personagens />
          </section>
          <section id="regras" className="">
            <Regras />
          </section>
          <Separator />
          <section id="vamos-jogar" className="">
            <VamosJogar />
            <VamosJogarMobile />
          </section>
          <section id="campanha" className="">
            <Campanha />
          </section>
          <Separator />
          <section id="na-midia" className="">
            <NaMidia />
          </section>
          <section id="footer" className="">
            <Footer />
          </section>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
