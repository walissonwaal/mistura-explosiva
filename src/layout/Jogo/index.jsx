import React from "react";
import JogoImg from "../../assets/imgs/jogo-img.png";
import { motion } from "framer-motion";
import ScrollReveal from "../../utils/animations/ScrollReveal";
import { useInView } from "react-intersection-observer";

function Jogo() {
  const { ref: jogoRef, inView: inViewJogo } = useInView();
  const { ref: LimpandoConceitosRef, inView: inViewLimpandoConceitos } = useInView()
  const { ref: sobreRef, inView: inViewSobre } = useInView();

  return (
    <div className="jogo h-full px-4 py-6 md:py-20 md:px-20 flex flex-col gap-5 md:gap-12 w-full">
      <ScrollReveal>
        <div
          ref={jogoRef}
          className={`${
            inViewJogo ? "fade-in-left" : ""
          } text-4xl md:text-6xl font-black text-white `}
        >
          JOGO{" "}
        </div>
      </ScrollReveal>

        <span ref={LimpandoConceitosRef} className={`${inViewLimpandoConceitos ? 'fade-in-right' : ''} text-lg  md:text-4xl font-bold text-mYellow`}>LIMPANDO CONCEITOS, CLAREANDO IDEIAS</span>

      <div className="bg-white shadow-md pt-4 pb-8 md:py-16 px-4 md:px-16 flex flex-col md:grid md:grid-cols-4 gap-10 rounded-3xl">
        <div className="col-span-2">
          <ScrollReveal className="text-sm md:text-start md:text-lg text-mPurple font-semibold mb-5">
            Sabe aquela misturinha “infalível” que consiste em juntar um produto
            de limpeza com outro, para intensificar a limpeza em casa? Essas e
            tantas outras dicas que parecem inofensivas podem trazer riscos à
            nossa saúde – e levar até a morte. Para evitar episódios como esses,
            que se tornaram mais comuns na época da pandemia de Covid-19, em que
            boa parte da população se encontrava em isolamento dentro de casa, o
            Sistema CFQ/CRQs e a Associação Brasileira das Indústrias de
            Produtos de Higiene, Limpeza e Saneantes (ABIPLA) formaram uma
            parceria para dissipar desinformações (também conhecidas como fake
            news) que, de tempos em tempos, insistem em aparecer nas redes
            sociais e nos nossos celulares.
          </ScrollReveal>

          <ScrollReveal className="text-sm md:text-start md:text-lg text-mPurple font-semibold mb-5">
            {" "}
            A partir da campanha “Limpando conceitos, clareando ideias!”, as
            entidades resolveram criar o Mistura Explosiva, um jogo educativo e
            de conscientização que mostra, de maneira lúdica e divertida, os
            riscos de misturas caseiras de produtos de limpeza e outros
            saneantes.
          </ScrollReveal>
          <ScrollReveal className="text-sm md:text-start md:text-lg text-mPurple font-semibold mb-5">
            {" "}
            O slogan “Limpando conceitos, clareando ideias!” sintetiza bem a
            proposta da ação, que é levar o conhecimento adiante e desmistificar
            alguns dos conceitos que são divulgados muitas vezes por
            influenciadores(as) mal-informados(as) em seus canais na internet,
            além de informar jornalistas a respeito dos riscos dessas misturas.
          </ScrollReveal>
          <ScrollReveal className="text-sm md:text-start md:text-lg text-mPurple font-semibold mb-5">
            {" "}
            E é assim que os jogadores do Mistura Explosiva vão se
            conscientizando enquanto se divertem. A cada rodada, novos
            conhecimentos, alertas e esclarecimentos vão surgindo. De forma
            simples, lúdica e descontraída, todos vão aprendendo um pouco mais
            sobre produtos de limpeza, bem como quais os compostos tóxicos que
            as “misturas caseiras” podem gerar.
          </ScrollReveal>
          <ScrollReveal className="hidden 2xl:block text-sm md:text-start md:text-lg text-mPurple font-semibold mb-5">
            O Mistura Explosiva tem como metodologia a linha progressiva, em que
            os jogadores começam o jogo na casa “Início” e, a cada jogada,
            avançam por meio do lançamento de dados em direção ao destino, a
            casa “Fim”, localizado na outra extremidade do tabuleiro. Ganha o
            jogador que chegar primeiro ao final do tabuleiro, passando por
            todas as casas e cenários.
          </ScrollReveal>
          <ScrollReveal className="hidden 2xl:block text-sm md:text-start md:text-lg text-mPurple font-semibold">
            {" "}
            Mas não será tão fácil assim! A cada carta comprada, a sorte pode
            mudar e o risco de ter que voltar para o início do jogo ou de ser
            eliminado por uma explosão se torna mais eminente. Vamos jogar?
          </ScrollReveal>
        </div>
        <div className="flex flex-col gap-5 md:gap-5 lg:col-span-2">
          <ScrollReveal className="flex justify-center items-center md:py-16">
            <img ref={sobreRef} className={`${inViewSobre ? 'fade-in-right' : ''} `} src={JogoImg} alt="Jogo" srcset="" />
          </ScrollReveal>
          <ScrollReveal className="2xl:hidden text-sm md:text-start md:text-lg text-mPurple font-semibold">
            O Mistura Explosiva tem como metodologia a linha progressiva, em que
            os jogadores começam o jogo na casa “Início” e, a cada jogada,
            avançam por meio do lançamento de dados em direção ao destino, a
            casa “Fim”, localizado na outra extremidade do tabuleiro. Ganha o
            jogador que chegar primeiro ao final do tabuleiro, passando por
            todas as casas e cenários.
          </ScrollReveal>
          <ScrollReveal className="2xl:hidden text-sm md:text-start md:text-lg text-mPurple font-semibold">
            {" "}
            Mas não será tão fácil assim! A cada carta comprada, a sorte pode
            mudar e o risco de ter que voltar para o início do jogo ou de ser
            eliminado por uma explosão se torna mais eminente. Vamos jogar?
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

export default Jogo;