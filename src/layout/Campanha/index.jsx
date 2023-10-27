import React from "react";
import cardImage from "../../assets/imgs/card-image.png";
import avaliacao from "../../assets/imgs/avaliacao.png";
import img1 from "../../assets/imgs/1.png";
import img2 from "../../assets/imgs/2.png";
import img3 from "../../assets/imgs/3.png";
import img4 from "../../assets/imgs/4.png";
import img5 from "../../assets/imgs/5.png";
import ButtonCampanha from "../../components/ButtonCampanha";
import ScrollReveal from "../../utils/animations/ScrollReveal";

const Campanha = () => {
  return (
    <div className="bg-white px-6 py-6 md:px-40 md:py-20">
      <h1 className="text-4xl md:text-6xl font-black text-mOrange">CAMPANHA</h1>
      <h3 className="text-2xl md:text-4xl text-mPurple font-bold py-5 md:py-10">
        Como tudo começou...
      </h3>
      <p className="text-mPurple text-xl text-justify md:text-start md:text-2xl font-medium md:py-10">
        No final do mês de agosto de 2022, a campanha “Mistura Explosiva:
        Limpando conceitos, clareando ideias” começou a ser divulgada. Como
        primeira ação, o CFQ e a ABIPLA promoveram o primeiro Workshop para
        Jornalistas e Influencers, como parte de uma ação educativa contra
        mistura caseira de saneantes.
      </p>
      <div className="px-20 flex gap-10 justify-center mb-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-wrap gap-5">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="w-full flex justify-center mb-5">
            <ButtonCampanha>Veja</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="w-full flex justify-center mb-5">
            <ButtonCampanha>Veja</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <p className="text-mPurple text-xl text-justify md:text-start md:text-2xl font-medium md:py-10">
        No final do mês de agosto de 2022, a campanha “Mistura Explosiva:
        Limpando conceitos, clareando ideias” começou a ser divulgada. Como
        primeira ação, o CFQ e a ABIPLA promoveram o primeiro Workshop para
        Jornalistas e Influencers, como parte de uma ação educativa contra
        mistura caseira de saneantes.
      </p>
      <div className="flex justify-center flex-wrap gap-10 mb-20">
        <ScrollReveal className="shadow-md">
          <img src={avaliacao} alt="Avaliação" />
        </ScrollReveal>
        <ScrollReveal className="shadow-md">
          <img src={avaliacao} alt="Avaliação" />
        </ScrollReveal>
        <ScrollReveal className="shadow-md">
          <img src={avaliacao} alt="Avaliação" />
        </ScrollReveal>
      </div>
      <p className="text-mPurple text-xl text-justify md:text-start md:text-2xl font-medium md:py-10">
        A campanha começou a mostrar os perigos de misturar produtos de limpeza
        sem orientação da ANVISA ou de um Profissional da Química.
      </p>
      <div className="flex justify-center gap-10 mb-20">
        <ScrollReveal className="max-w-md">
          <img className="rounded-3xl" src={img1} alt="" />
        </ScrollReveal>
        <ScrollReveal className="max-w-md">
          <img className="rounded-3xl" src={img2} alt="" />
        </ScrollReveal>
        <ScrollReveal className="max-w-md">
          <img className="rounded-3xl" src={img3} alt="" />
        </ScrollReveal>
      </div>
      <div className="w-full flex justify-center gap-10">
        <ScrollReveal className="max-w-md">
          <img className="rounded-3xl" src={img4} alt="" />
        </ScrollReveal>
        <ScrollReveal className="max-w-md">
          <img className="rounded-3xl" src={img5} alt="" />
        </ScrollReveal>
      </div>
      <p className="text-mPurple text-xl text-justify md:text-start md:text-2xl font-medium md:py-10">
        Em dezembro de 2022, CFQ e ABIPLA levaram o Workshop para São Paulo
        (SP). O público-alvo da ação foi de profissionais de imprensa,
        comunicadores e representantes de entidades ligadas ao setor de
        saneantes. Em Brasília, um tabuleiro em tamanho real do jogo Mistura
        Explosiva foi apresentado na 19ª Semana Nacional de Ciência e Tecnologia
        do Ministério da Ciência, Tecnologia e Inovação (MCTI).
      </p>
      <div className="flex justify-center flex-wrap gap-10 justify-items-center px-20 mb-20 px-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <p className="text-mPurple text-xl text-justify md:text-start md:text-2xl font-medium md:py-10">
        Em 2023, outros estados brasileiros também receberam a campanha, como
        Rio de Janeiro, Pernambuco, Paraíba, Bahia e Santa Catarina.
      </p>
      <div className="flex justify-center flex-wrap gap-10 justify-items-center px-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-20">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-20">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <div className="flex justify-center flex-wrap gap-10 justify-items-center px-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-20">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-20">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <div className="flex justify-center flex-wrap gap-10 justify-items-center px-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-20">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-20">
          <div>
            <img src={cardImage} alt="Imagem" />
          </div>
          <div className="flex justify-center mb-5">
            <ButtonCampanha>Acesse</ButtonCampanha>
          </div>
        </ScrollReveal>
      </div>
      <div className="flex justify-center flex-wrap gap-10 justify-items-center px-20">
        <ScrollReveal className="card bg-white max-w-lg flex flex-col gap-5 mb-20">
          <div>
            <img src={cardImage} alt="Imagem" />
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
