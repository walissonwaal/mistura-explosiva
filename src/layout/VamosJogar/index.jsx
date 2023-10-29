import React from "react";
import Tabuleiro from "../../assets/imgs/tabuleiro.png";
import pathImageInicio from "../../assets/imgs/inicio.png";
import ScrollReveal from "../../utils/animations/ScrollReveal";
import IconVamosJogar from "../../assets/imgs/secao-vamos-jogar.png";
import Icon02 from "../../assets/imgs/secao-vamos-jogar-05.png";
import Icon03 from "../../assets/imgs/secao-vamos-jogar-02.png";
import Icon04 from "../../assets/imgs/secao-vamos-jogar-06.png";
import Icon05 from "../../assets/imgs/secao-vamos-jogar-03.png";
import Icon06 from "../../assets/imgs/secao-vamos-jogar-04.png";
import Icon07 from "../../assets/imgs/secao-vamos-jogar-07.png";
import { useInView } from "react-intersection-observer";

const VamosJogar = () => {
  const { ref: vamosJogarRef, inView: inVieweVamosJogar } = useInView();

  return (
    <div className="hidden md:block vamos-jogar px-6 md:px-20 pb-6 md:pb-20">
      <div
        ref={vamosJogarRef}
        className={`${
          inVieweVamosJogar ? "fade-in-left" : ""
        } py-6 md:py-20 flex gap-5`}
      >
        <img className="w-40" src={IconVamosJogar} alt="" />
        <h1 className="text-4xl md:text-6xl font-black text-white">
          VAMOS JOGAR?
        </h1>
      </div>
      <div className="bg-white rounded-3xl px-6 py-6 md:px-20 md:py-20">
        <ScrollReveal className="mb-20">
          <img className="w-full" src={Tabuleiro} alt="Tabuleiro" />
        </ScrollReveal>

        <div className="flex justify-center gap-5 xl:gap-20">
          <div className="flex flex-col">
            {/* Card */}
            <ScrollReveal className="max-w-lg flex flex-col gap-5">
              <div className="flex items-end gap-5">
                <div>
                  <img className="w-24" src={pathImageInicio} alt="Vamos Jogar?" />
                </div>
                <span className="text-xl font-extrabold text-mOrange">
                  Casa “Início”
                </span>
              </div>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple">
                Local onde os peões devem ser posicionados para dar início à
                partida. São necessários no mínimo dois e no máximo seis
                jogadores(as). Um de cada vez, os(as) jogadores(as) devem jogar
                o dado e andar pelo trajeto do tabuleiro posicionando seu peão
                de acordo com o valor obtido.
              </p>
            </ScrollReveal>

            {/* Card */}
            <ScrollReveal className="max-w-lg flex flex-col gap-5">
              <div className="flex items-end gap-5">
                <div>
                  <img className="w-24 rounded-3xl" src={Icon03} alt="Vamos Jogar?" />
                </div>
                <span className="text-xl font-extrabold text-mOrange">
                  Casa Bege (casa vazia)
                </span>
              </div>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple">
                Jogada normal, nenhuma ação precisa ser realizada.
              </p>
            </ScrollReveal>

            {/* Card */}
            <ScrollReveal className="max-w-lg flex flex-col gap-5">
              <div className="flex items-end gap-5">
                <div>
                  <img className="w-24" src={Icon05} alt="Vamos Jogar?" />
                </div>
                <span className="text-xl font-extrabold text-mOrange">
                  Casa Laranja (comprar cartas)
                </span>
              </div>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple">
                Sempre que um(a) jogador(a) parar sobre uma casa laranja, deverá
                comprar uma carta e executar a ação descrita. A exceção é se
                alguma carta ou jogada obrigar o(a) jogador(a) a voltar casas no
                tabuleiro. Se o(a) jogador(a) voltar e parar sobre uma casa
                laranja, não precisará comprar uma carta.
              </p>
            </ScrollReveal>
            {/* Card */}
            <ScrollReveal className="max-w-lg flex flex-col gap-5">
              <div className="flex items-end gap-5">
                <div>
                  <img className="w-24" src={Icon06} alt="Vamos Jogar?" />
                </div>
                <span className="text-xl font-extrabold text-mOrange">
                  Sentido do movimento
                </span>
              </div>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple">
                As setas indicam o caminho que o(a) jogador(a) deve seguir
                durante sua jornada.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col">
            {/* Card */}
            <ScrollReveal className="max-w-lg flex flex-col gap-5">
              <div className="flex items-end gap-5">
                <div>
                  <img className="w-24 mb-2" src={Icon02} alt="Vamos Jogar?" />
                </div>
                <span className="text-xl font-extrabold text-mOrange">
                  Cenário/QR Code (parada interativa)
                </span>
              </div>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple">
                Sempre que chegar a um cenário, o(a) jogador(a) deverá acessar o
                QR Code com a ajuda de um celular, assistir ao vídeo e executar
                a ação falada.
              </p>
            </ScrollReveal>
            {/* Card */}
            <ScrollReveal className="max-w-lg flex flex-col gap-5">
              <div className="flex items-end gap-5">
                <div>
                  <img className="w-24" src={Icon04} alt="Vamos Jogar?" />
                </div>
                <span className="text-xl font-extrabold text-mOrange">
                  Casa Lilás (jogar dois dados)
                </span>
              </div>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple mb-0">
                Percurso opcional. O(a) jogador(a) poderá ir em direção a elas e
                tentar a sorte.
              </p>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple mb-0">
                <span className="font-bold">
                  Casa Lilás após o Cenário N° 2:
                </span>
                <br /> “atalho do bem”. Se um(a) jogador(a) que estiver nessa
                casa jogar os dois dados e a soma for um número maior que 10, ou
                seja, 11 ou 12, ele poderá ir direto para o Cenário N° 3.{" "}
              </p>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple mb-0">
                <span className="font-bold">
                  Casa Lilás após o Cenário N° 4:
                </span>
                <br /> “atalho do mal”. Se um(a) jogador(a) que estiver nessa
                casa jogar os dois dados e a soma for um número menor que 4, ou
                seja, 2 ou 3, ele poderá escolher outro(a) jogador(a) para ir
                direto para o Cenário N° 2.{" "}
              </p>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple mb-5">
              <span className="font-bold">Casa “Fim”:</span> última casa do jogo. Para conquistar a vitória, o(a)
                jogador(a) deverá acessar o QR Code dessa casa e assistir ao
                vídeo.
              </p>
            </ScrollReveal>
  
            {/* Card */}
            <ScrollReveal className="max-w-lg flex flex-col gap-5">
              <div className="flex items-end gap-5">
                <div>
                  <img className="w-24" src={Icon07} alt="Vamos Jogar?" />
                </div>
                <span className="text-xl font-extrabold text-mOrange">
                  Casa “Fim”
                </span>
              </div>
              <p className="text-xl text-justify md:text-start font-medium text-mPurple">
                Última casa do jogo. Para conquistar a vitória, o(a) jogador(a)
                deverá acessar o QR Code dessa casa e assistir ao vídeo.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VamosJogar;
