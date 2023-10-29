import React from "react";
import RodapeLogos from '../../assets/imgs/rodape-logos.png'

const Footer = () => {
  return (
    <footer className="footer shadow-lg py-10 px-10 md:px-0">
      <div className="flex justify-center items-center gap-10">
        <img className="w-80" src={RodapeLogos} alt="" />
      </div>
      <div className="flex flex-col gap-5 items-center mt-5">
        <div class="social text-center">
          <a href="https://br.linkedin.com/company/cfquimica" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-linkedin text-xl mr-2 md:mr-5"></span>
          </a>
          <a href="https://twitter.com/cfquimica" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-twitter text-xl mr-2 md:mr-5 "></span>
          </a>
          <a href="https://www.instagram.com/cfquimica/" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-instagram text-xl mr-2 md:mr-5 "></span>
          </a>
          <a href="https://www.facebook.com/CFQuimica/" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-facebook text-xl mr-2 md:mr-5"></span>
          </a>
          <a
            href="https://open.spotify.com/show/7udU3Eeo97xEFdJBfwI6JZ"
            target="_blank"
          >
            <span class="hover:text-mOrange duration-300 text-white fa fa-spotify text-xl mr-2 md:mr-5"></span>
          </a>
          <a href="https://soundcloud.com/cfquimica" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa fa-soundcloud text-xl mr-2 md:mr-5"></span>
          </a>
          <a
            href="https://www.youtube.com/@ConselhoFederaldeQuimica"
            target="_blank"
          >
            <span class="hover:text-mOrange duration-300 text-white fa fa-youtube text-xl mr-2 md:mr-5"></span>
          </a>
          <a href="https://www.tiktok.com/@cfquimica" target="_blank">
            <span class="hover:text-mOrange duration-300 text-white fa-brands fa-tiktok text-xl mr-2 md:mr-5"></span>
          </a>
          <a
            href="https://www.flickr.com/photos/cfquimicabr/albums"
            target="_blank"
          >
            <span class="hover:text-mOrange duration-300 text-white fa fa-flickr text-xl"></span>
          </a>
        </div>

        <div class="duration-300 text-center text-white">
          © 2023 Mistura Explosiva <a className="hover:text-mOrange duration-300" href="https://cocobasic.com"><strong>CFQ</strong></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
