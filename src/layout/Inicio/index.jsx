import React from 'react';
import VinhetaHorizontal from '../../assets/videos/vinheta.mp4'
import VinhetaVertical from '../../assets/videos/vinheta-vertical.mp4'


function Inicio() {
  return (
    <div className='z-0'>
      <video autoPlay loop muted className='hidden h-full w-full md:flex mt-[-5rem] overflow-y-hidden'>
        <source src={VinhetaHorizontal} type="video/mp4" />
        Seu navegador não suporta a exibição de vídeos em HTML5.
      </video>
      <video autoPlay loop muted className='hidden video-vertical mt-[-5rem] overflow-y-hidden'>
        <source src={VinhetaVertical} type="video/mp4" />
        Seu navegador não suporta a exibição de vídeos em HTML5.
      </video>
    </div>
  );
}

export default Inicio;
