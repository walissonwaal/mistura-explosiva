import React from "react";
import { useInView } from "react-intersection-observer";

const NaMidia = () => {
  const { ref: naMmidiaRef, inView: inViewNaMidia } = useInView();
  return (
    <div className="py-4 px-4 md:py-20 md:px-40 bg-mPurple">
      <h1 ref={naMmidiaRef} className={`${inViewNaMidia ? 'fade-in-left':''} text-3xl md:text-6xl font-black text-white`}>NA MÍDIA</h1>
      <h3 className="text-xl md:text-2xl font-bold py-10 text-white">
        Acompanhe algumas inserções da campanha “Mistura Explosiva: Limpando
        conceitos, clareando ideias!” nos principais veículos de comunicação do
        país ao longo dos anos.
      </h3>
      <div>
        <div class="expandable-section bg-mPurple text-white font-bold">
          <ul>
            <a
            className="hover:bg-mOrange duration-300"
              href="https://agenciabrasil.ebc.com.br/radioagencia-nacional/geral/audio/2022-03/campanha-previne-receitas-caseiras-que-misturam-produtos-de-limpeza"
              target="_blank"
            >
              <li class="px-4 md:px-10 text-sm md:text-lg">
                {" "}
                Campanha previne receitas caseiras que misturam produtos de
                limpeza
              </li>
            </a>
            <a
            className="hover:bg-mOrange duration-300"
              href="https://www.redetv.uol.com.br/jornalismo/redetvnews/videos/cidades/produtos-de-limpeza-misturas-sao-perigosas"
              target="_blank"
            >
              <li class="px-4 md:px-10 text-sm md:text-lg">
                {" "}
                Produtos de limpeza: misturas são perigosas
              </li>
            </a>
            <a
            className="hover:bg-mOrange duration-300"
              href="https://householdinnovation.com.br/abipla-e-cfq-alertam-sobre-misturas-caseiras-de-limpeza/"
              target="_blank"
            >
              <li class="px-4 md:px-10 text-sm md:text-lg">
                {" "}
                ABIPLA e CFQ alertam sobre misturas caseiras de limpeza
              </li>
            </a>
            <a
            className="hover:bg-mOrange duration-300" href="https://www.youtube.com/watch?v=J-iLXojD_c4&t=113s">
              <li class="px-4 md:px-10 text-sm md:text-lg">SBT - Receitas Perigosas</li>
            </a>
            <a
            className="hover:bg-mOrange duration-300"
              href="https://noticias.r7.com/jr-24h/videos/uso-de-formulas-caseiras-na-limpeza-pode-causar-risco-a-saude-15122022"
              target="_blank"
            >
              <li class="px-4 md:px-10 text-sm md:text-lg">
                {" "}
                Uso de fórmulas caseiras na limpeza pode causar risco à saúde
              </li>
            </a>
            <a
            className="hover:bg-mOrange duration-300" href="https://www.quimica.com.br/o-risco-das-misturas-caseiras-abipla/ ">
              <li class="px-4 md:px-10 text-sm md:text-lg">
                {" "}
                O risco das misturas caseiras!
              </li>
            </a>
            <a
            className="hover:bg-mOrange duration-300"
              href="https://extra.globo.com/economia/noticia/2023/04/misturar-produtos-de-limpeza-traz-risco-a-saude.ghtml"
              target="_blank"
            >
              <li class="px-4 md:px-10 text-sm md:text-lg">
                {" "}
                Misturar produtos de limpeza traz risco à saúde. Combinações
                podem ser perigosas
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NaMidia;
