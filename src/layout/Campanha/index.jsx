import React from "react";
import av1 from "../../assets/imgs/av1.png";
import av2 from "../../assets/imgs/av2.png";
import av3 from "../../assets/imgs/av3.png";
import img01 from '../../assets/imgs/card-image.png'
import img02 from '../../assets/imgs/campanha/2.jpg'
import img03 from '../../assets/imgs/campanha/3.jpg'
import img04 from '../../assets/imgs/campanha/4.jpg'
import img05 from '../../assets/imgs/campanha/5.jpg'
import img06 from '../../assets/imgs/campanha/6.jpg'
import img07 from '../../assets/imgs/campanha/7.jpg'
import img08 from '../../assets/imgs/campanha/8.jpg'
import img09 from '../../assets/imgs/campanha/9.jpg'
import img10 from '../../assets/imgs/campanha/10.jpg'
import img11 from '../../assets/imgs/campanha/11.jpg'

import img1 from '../../assets/imgs/1.png'
import img2 from '../../assets/imgs/2.png'
import img3 from '../../assets/imgs/3.png'
import img4 from '../../assets/imgs/4.png'
import img5 from '../../assets/imgs/5.png'
import ButtonCampanha from "../../components/ButtonCampanha";
import ScrollReveal from "../../utils/animations/ScrollReveal";
import { useInView } from "react-intersection-observer";

const Campanha = () => {
  const { ref: campanhaRef, inView: inViewCampanha } = useInView();
  const { ref: comotudoComecouRef, inView: inViewComoTudoComecou } = useInView();

  return (
    <div className="bg-white px-4 py-4 md:px-40 md:py-20">
      <h1 ref={campanhaRef} className={`${inViewCampanha ? 'fade-in-left':''} text-2xl md:text-6xl font-black text-mOrange`}>CAMPANHA</h1>
      <h3 ref={comotudoComecouRef} className={`${inViewComoTudoComecou ? 'fade-in-right':''} text-xl md:text-4xl text-mPurple font-bold py-5 md:py-10`}>
        Como tudo começou...
      </h3>
      <p className="text-mPurple text-sm md:text-xl md:text-start font-medium pb-8">
        No final do mês de agosto de 2022, a campanha “Mistura Explosiva:
        Limpando conceitos, clareando ideias” começou a ser divulgada. Como
        primeira ação, o CFQ e a ABIPLA promoveram o primeiro Workshop para
        Jornalistas e Influencers, como parte de uma ação educativa contra
        mistura caseira de saneantes.
      </p>
      <div className="md:px-20 flex flex-col md:flex-row gap-10 justify-center mb-10 md:mb-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5">
          <div>
            <img src={img01} alt="Imagem" />
          </div>
          <div className="w-full flex justify-center mb-5">
            <ButtonCampanha>Veja</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5">
          <div>
            <img src={img02} alt="Imagem" />
          </div>
          <div className="w-full flex justify-center mb-5">
            <ButtonCampanha>Veja</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <p className="text-mPurple md:text-xl md:text-start font-medium mb-5 md:pb-10">
        No final do mês de agosto de 2022, a campanha “Mistura Explosiva:
        Limpando conceitos, clareando ideias” começou a ser divulgada. Como
        primeira ação, o CFQ e a ABIPLA promoveram o primeiro Workshop para
        Jornalistas e Influencers, como parte de uma ação educativa contra
        mistura caseira de saneantes.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-10 md:mb-20">
        <ScrollReveal className="shadow-md">
          <img src={av1} alt="Avaliação" />
        </ScrollReveal>
        <ScrollReveal className="shadow-md">
          <img src={av2} alt="Avaliação" />
        </ScrollReveal>
        <ScrollReveal className="shadow-md">
          <img src={av3} alt="Avaliação" />
        </ScrollReveal>
      </div>
      <p className="text-mPurple md:text-xl md:text-start font-medium md:pb-10">
        A campanha começou a mostrar os perigos de misturar produtos de limpeza
        sem orientação da ANVISA ou de um Profissional da Química.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
        <ScrollReveal className="max-w-lg">
          <img className="rounded-3xl" src={img1} alt="" />
        </ScrollReveal>
        <ScrollReveal className="max-w-lg">
          <img className="rounded-3xl" src={img2} alt="" />
        </ScrollReveal>
        <ScrollReveal className="max-w-lg">
          <img className="rounded-3xl" src={img3} alt="" />
        </ScrollReveal>
        <ScrollReveal className="max-w-lg md:hidden">
          <img className="rounded-3xl" src={img4} alt="" />
        </ScrollReveal>
        <ScrollReveal className="max-w-lg md:hidden">
          <img className="rounded-3xl" src={img5} alt="" />
        </ScrollReveal>
      </div>
      <div className="hidden md:w-full md:flex justify-center px-40 gap-10 mb-8">
        <ScrollReveal className="max-w-xs 2xl:max-w-md">
          <img className="rounded-3xl" src={img4} alt="" />
        </ScrollReveal>
        <ScrollReveal className="max-w-xs 2xl:max-w-md">
          <img className="rounded-3xl" src={img5} alt="" />
        </ScrollReveal>
      </div>
      <p className="text-mPurple md:text-xl md:text-start font-medium md:py-10">
        Em dezembro de 2022, CFQ e ABIPLA levaram o Workshop para São Paulo
        (SP). O público-alvo da ação foi de profissionais de imprensa,
        comunicadores e representantes de entidades ligadas ao setor de
        saneantes. Em Brasília, um tabuleiro em tamanho real do jogo Mistura
        Explosiva foi apresentado na 19ª Semana Nacional de Ciência e Tecnologia
        do Ministério da Ciência, Tecnologia e Inovação (MCTI).
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 justify-items-center md:px-20 mb-10 md:px-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5">
          <div>
            <img src={img03} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5">
          <div>
            <img src={img04} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <p className="text-mPurple md:text-xl md:text-start font-medium md:py-10">
        Em 2023, outros estados brasileiros também receberam a campanha, como
        Rio de Janeiro, Pernambuco, Paraíba, Bahia e Santa Catarina.
      </p>
      <div className="flex flex-col md:flex-row justify-center md:gap-10 justify-items-center md:px-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20">
          <div>
            <img src={img05} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20">
          <div>
            <img src={img06} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:gap-10 justify-items-center md:px-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20">
          <div>
            <img src={img07} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20">
          <div>
            <img src={img08} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:gap-10 justify-items-center md:px-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20">
          <div>
            <img src={img09} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-10 md:mb-20">
          <div>
            <img src={img10} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <div className="flex justify-center gap-10 justify-items-center md:px-20 mb-10 md:mb-0">
        <ScrollReveal className="card bg-white max-w-lg 2xl:max-w-lg flex flex-col gap-5">
          <div>
            <img src={img11} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Campanha;
