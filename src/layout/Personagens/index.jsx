import React from "react";
import drAmon from "../../assets/imgs/dr-amon.png";
import hebe from "../../assets/imgs/hebe.png";
import Separator from "../../components/separatorSmall";
import ScrollReveal from '../../utils/animations/ScrollReveal'
import { useInView } from 'react-intersection-observer';


function Personagens() {
  const { ref, inView } = useInView();
  const { ref: amonRef, inView: inViewAmon } = useInView();
  const { ref: personagensRef, inView: inViewPersonagens } = useInView();

  return (
    <div className="py-6 px-6 md:py-20 md:px-20 ">
      <h1 ref={personagensRef} className={`${inViewPersonagens ? 'fade-in-left' : ''} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-mOrange md:mb-8`}>PERSONAGENS</h1>
      <div className="md:grid md:grid-cols-2 gap-20">
        <div className="">
          <ScrollReveal className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-mPurple py-10">
            "Dr." Amon Níako
          </ScrollReveal>
          <ScrollReveal className="text-xl text-justify md:text-start font-medium text-mPurple mb-5">
            O “Dr.” Amon Níako é um personagem fictício inspirado nos
            influenciadores digitais que, por falta de conhecimento técnico,
            disseminam nas redes sociais desinformações sobre saneantes e
            ensinam misturas caseiras de produtos de limpeza que, além causar
            prejuízos financeiros, podem oferecer sérios riscos à saúde.
          </ScrollReveal>
          <ScrollReveal className="text-xl text-justify md:text-start font-medium text-mPurple mb-5">
            {" "}
            A inspiração para o nome “Amon Níako” veio da amônia (NH3), uma
            substância química que também é conhecida como amoníaco. Em
            temperatura ambiente, a amônia é um gás incolor, alcalino e
            irritante que, se manipulado de forma incorreta, pode oferecer
            riscos à saúde. Contudo, quando bem utilizada, essa substância e
            seus derivados são seguros e estratégicos, fazendo parte, inclusive,
            da composição de muitos produtos de limpeza.
          </ScrollReveal>
          <ScrollReveal className="text-xl text-justify md:text-start font-medium text-mPurple mb-5">
            {" "}
            O nome “Amon” também significa “o oculto” ou “o invisível” – uma
            analogia interessante, já que esse personagem usa o meio digital
            para se ocultar das responsabilidades das fake news que dissemina.
            Além disso, o “Dr.” Amon Níako faz uso do título “Doutor” para
            conferir-lhe a autoridade e a credibilidade que não possui, e acaba
            sentindo no próprio corpo os efeitos negativos das suas “misturinhas
            caseiras” de produtos de limpeza.
          </ScrollReveal>
          <ScrollReveal className="text-xl text-justify md:text-start font-medium text-mPurple mb-5">
            {" "}
            Assim como o amoníaco, que nas mãos certas é uma matéria-prima
            essencial, o “Dr.” Amon Níako receberá ao longo de sua jornada
            orientações valiosas da Profissional da Química Hebe Limpy e deixará
            a toxicidade das desinformações e das misturas caseiras de lado.
          </ScrollReveal>
        </div>
        <ScrollReveal className="personagem flex justify-center">
          <img ref={amonRef} className={`${inViewAmon ? 'slide-in-right' : ''}`} src={drAmon} alt="" srcset="" />
        </ScrollReveal>
      </div>
      <div className="py-40">
        <Separator />
      </div>
      <div className="md:grid md:grid-cols-2 gap-20">
        <div className="flex justify-center">
          <img ref={ref} className={`${inView ? 'slide-in-left' : ''}`} src={hebe} alt="Hebe" />
        </div>
        <div className="">
          <h3 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-mPurple py-10">
            Hebe Limpy
          </h3>
          <ScrollReveal className="text-xl text-justify md:text-start font-medium text-mPurple mb-5">
            A Hebe Limpy é uma Profissional da Química habilitada e especialista
            em saneantes que trabalha em parceria com o Sistema CFQ/CRQs e com a
            ABIPLA, combatendo as desinformações e as misturas caseiras de
            produtos de limpeza que são disseminadas nas redes sociais e em
            outros meios de comunicação. 
          </ScrollReveal>
          <ScrollReveal className="text-xl text-justify md:text-start font-medium text-mPurple mb-5">
            {" "}
            Com uma linguagem simples e moderna,
            Hebe leva informações técnicas para a sociedade e desmistifica o uso
            desses produtos tão importantes para a nossa saúde. No jogo, ela é
            tutora do “Dr.” Amon Níako, ensinando a ele e a todos os jogadores
            sobre os riscos das tais misturas caseiras, bem como a identificar
            os saneantes que são regularizados junto à Agência Nacional de
            Vigilância Sanitária (ANVISA). Hebe Limpy será fundamental para que
            o “Dr.” Amon Níako abandone sua jornada de fake news e
            clandestinidade e encontre o caminho da Ciência Química. 
          </ScrollReveal>
          <ScrollReveal className="text-xl text-justify md:text-start font-medium text-mPurple mb-5">
            {" "}
            Ela também é parceira da Central de Informações da Química (CIQ), uma
            iniciativa do Sistema CFQ/CRQs que conta com diversos parceiros para
            combater as desinformações da área da Química. Se você quiser saber
            mais sobre a CIQ, se tornar um parceiro ou fazer denúncias, basta
            acessar: ciq.cfq.org.br.
          </ScrollReveal>
          <ScrollReveal className="text-xl text-justify md:text-start font-medium text-mPurple mb-5">
            {" "}
            Uma curiosidade sobre essa Profissional da
            Química extraordinária é que seu nome é uma homenagem à primeira e
            única presidente mulher do Conselho Federal de Química até hoje,
            Hebe Helena Labarthe Martelli. Lá no site e nas redes sociais do CFQ
            tem mais informações sobre a trajetória dela.
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

export default Personagens;
