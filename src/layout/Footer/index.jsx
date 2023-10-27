import React from "react";
import RodapeLogos from '../../assets/imgs/rodape-logos.png'

const Footer = () => {
  return (
    <footer className="footer shadow-lg py-10 px-10 md:px-0">
      <div className="flex justify-center items-center gap-10">
        <img className="w-80" src={RodapeLogos} alt="" />
      </div>
      <div className="flex flex-col gap-5 items-center mt-10">
        <div class="flex gap-5">
          <a href="https://br.linkedin.com/company/cfquimica" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-linkedin text-xl "></span>
          </a>
          <a href="https://twitter.com/cfquimica" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-twitter text-xl "></span>
          </a>
          <a href="https://www.instagram.com/cfquimica/" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-instagram text-xl "></span>
          </a>
          <a href="https://www.facebook.com/CFQuimica/" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-facebook text-xl"></span>
          </a>
          <a
            href="https://open.spotify.com/show/7udU3Eeo97xEFdJBfwI6JZ"
            target="_blank"
          >
            <span class="hover:text-mOrange duration-300 text-white fa fa-spotify text-xl"></span>
          </a>
          <a href="https://soundcloud.com/cfquimica" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-soundcloud text-xl"></span>
          </a>
          <a
            href="https://www.youtube.com/@ConselhoFederaldeQuimica"
            target="_blank"
          >
            <span class="hover:text-mOrange duration-300 text-white fa fa-youtube text-xl"></span>
          </a>
          <a href="https://www.tiktok.com/@cfquimica" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa-brands fa-tiktok text-xl"></span>
          </a>
          <a
            href="https://www.flickr.com/photos/cfquimicabr/albums"
            target="_blank"
          >
            <span class="hover:text-mOrange duration-300 text-white fa fa-flickr text-xl"></span>
          </a>
        </div>

        <div class="duration-300 text-white">
          © 2023 Mistura Explosiva <a className="hover:text-mOrange duration-300" href="https://cocobasic.com"><strong>CFQ</strong></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
