import React from "react";
import Tabuleiro from "../../assets/imgs/tabuleiro.png";
import pathImageInicio from "../../assets/imgs/inicio.png";
import ScrollReveal from '../../utils/animations/ScrollReveal'
import IconVamosJogar from '../../assets/imgs/secao-vamos-jogar.png'
import Icon02 from '../../assets/imgs/secao-vamos-jogar-05.png'
import Icon03 from '../../assets/imgs/secao-vamos-jogar-02.png'
import Icon04 from '../../assets/imgs/secao-vamos-jogar-06.png'
import Icon05 from '../../assets/imgs/secao-vamos-jogar-03.png'
import Icon06 from '../../assets/imgs/secao-vamos-jogar-04.png'
import Icon07 from '../../assets/imgs/secao-vamos-jogar-07.png'
import { useInView } from "react-intersection-observer";

const VamosJogar = () => {
  const { ref: vamosJogarRef, inView: inVieweVamosJogar } = useInView();

  return (
    <div className="vamos-jogar px-6 md:px-20 pb-6 md:pb-20">
      <div ref={vamosJogarRef} className={`${inVieweVamosJogar ? 'fade-in-left':''} py-6 md:py-20 flex gap-5`}>
          <img className="w-40" src={IconVamosJogar} alt="" />
        <h1 className="text-4xl md:text-6xl font-black text-white">VAMOS JOGAR?</h1>
      </div>
      <div className="bg-white rounded-3xl px-6 py-6 md:px-20 md:py-20">
        <ScrollReveal className="mb-20">
          <img className="w-full" src={Tabuleiro} alt="Tabuleiro" />
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-5 justify-items-center">
          {/* Card */}
          <ScrollReveal className="max-w-lg flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <div>
                <img src={pathImageInicio} alt="Vamos Jogar?" />
              </div>
              <span className="text-xl font-extrabold text-mOrange">
                Casa “Início”
              </span>
            </div>
            <p className="text-xl text-justify md:text-start font-medium text-mPurple">
              Local onde os peões devem ser posicionados para dar início à
              partida. São necessários no mínimo dois e no máximo seis
              jogadores(as). Um de cada vez, os(as) jogadores(as) devem jogar o
              dado e andar pelo trajeto do tabuleiro posicionando seu peão de
              acordo com o valor obtido.
            </p>
          </ScrollReveal>
          {/* Card */}
          <ScrollReveal className="max-w-lg flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <div>
                <img src={Icon02} alt="Vamos Jogar?" />
              </div>
              <span className="text-xl font-extrabold text-mOrange">
                Casa “Início”
              </span>
            </div>
            <p className="text-xl text-justify md:text-start font-medium text-mPurple">
              Local onde os peões devem ser posicionados para dar início à
              partida. São necessários no mínimo dois e no máximo seis
              jogadores(as). Um de cada vez, os(as) jogadores(as) devem jogar o
              dado e andar pelo trajeto do tabuleiro posicionando seu peão de
              acordo com o valor obtido.
            </p>
          </ScrollReveal>
          {/* Card */}
          <ScrollReveal className="max-w-lg flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <div>
                <img src={Icon03} alt="Vamos Jogar?" />
              </div>
              <span className="text-xl font-extrabold text-mOrange">
                Casa “Início”
              </span>
            </div>
            <p className="text-xl text-justify md:text-start font-medium text-mPurple">
              Local onde os peões devem ser posicionados para dar início à
              partida. São necessários no mínimo dois e no máximo seis
              jogadores(as). Um de cada vez, os(as) jogadores(as) devem jogar o
              dado e andar pelo trajeto do tabuleiro posicionando seu peão de
              acordo com o valor obtido.
            </p>
          </ScrollReveal>
          {/* Card */}
          <ScrollReveal className="max-w-lg flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <div>
                <img src={Icon04} alt="Vamos Jogar?" />
              </div>
              <span className="text-xl font-extrabold text-mOrange">
                Casa “Início”
              </span>
            </div>
            <p className="text-xl text-justify md:text-start font-medium text-mPurple">
              Local onde os peões devem ser posicionados para dar início à
              partida. São necessários no mínimo dois e no máximo seis
              jogadores(as). Um de cada vez, os(as) jogadores(as) devem jogar o
              dado e andar pelo trajeto do tabuleiro posicionando seu peão de
              acordo com o valor obtido.
            </p>
          </ScrollReveal>
          {/* Card */}
          <ScrollReveal className="max-w-lg flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <div>
                <img src={Icon05} alt="Vamos Jogar?" />
              </div>
              <span className="text-xl font-extrabold text-mOrange">
                Casa “Início”
              </span>
            </div>
            <p className="text-xl text-justify md:text-start font-medium text-mPurple">
              Local onde os peões devem ser posicionados para dar início à
              partida. São necessários no mínimo dois e no máximo seis
              jogadores(as). Um de cada vez, os(as) jogadores(as) devem jogar o
              dado e andar pelo trajeto do tabuleiro posicionando seu peão de
              acordo com o valor obtido.
            </p>
          </ScrollReveal>
          {/* Card */}
          <ScrollReveal className="max-w-lg flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <div>
                <img src={Icon04} alt="Vamos Jogar?" />
              </div>
              <span className="text-xl font-extrabold text-mOrange">
                Casa “Início”
              </span>
            </div>
            <p className="text-xl text-justify md:text-start font-medium text-mPurple">
              Local onde os peões devem ser posicionados para dar início à
              partida. São necessários no mínimo dois e no máximo seis
              jogadores(as). Um de cada vez, os(as) jogadores(as) devem jogar o
              dado e andar pelo trajeto do tabuleiro posicionando seu peão de
              acordo com o valor obtido.
            </p>
          </ScrollReveal>
          {/* Card */}
          <ScrollReveal className="max-w-lg flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <div>
                <img src={Icon07} alt="Vamos Jogar?" />
              </div>
              <span className="text-xl font-extrabold text-mOrange">
                Casa “Início”
              </span>
            </div>
            <p className="text-xl text-justify md:text-start font-medium text-mPurple">
              Local onde os peões devem ser posicionados para dar início à
              partida. São necessários no mínimo dois e no máximo seis
              jogadores(as). Um de cada vez, os(as) jogadores(as) devem jogar o
              dado e andar pelo trajeto do tabuleiro posicionando seu peão de
              acordo com o valor obtido.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default VamosJogar;
