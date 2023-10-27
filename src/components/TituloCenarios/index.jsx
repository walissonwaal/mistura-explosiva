import React from 'react';
import ScrollReveal from '../../utils/animations/ScrollReveal'

const TituloCenarios = ({children}) => {
  return (
    <ScrollReveal className='text-4xl text-mYellow font-black py-5'>
      {children}
    </ScrollReveal>
  );
}

export default TituloCenarios;
