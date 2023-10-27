import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";
// import "./ScrollReveal.css";


const ScrollReveal = ({ children, className }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        delay: 300
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={className}
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
