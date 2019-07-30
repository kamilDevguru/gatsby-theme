import React from 'react';
import Logo from 'reusecore/src/elements/UI/Logo';
import SectionWrapper, { ImageSlider, ImageSlide } from './clientBlock.style';

import { clients } from 'common/src/data/Charity';

const ClientBlock = () => {
  return (
    <SectionWrapper>
      <ImageSlider>
        <ImageSlide>
          {clients.map(item => (
            <Logo
              key={`slide1__key${item.id}`}
              href={item.link}
              logoSrc={item.logo}
              title={item.name}
            />
          ))}
        </ImageSlide>
        <ImageSlide>
          {clients.map(item => (
            <Logo
              key={`slide2__key${item.id}`}
              href={item.link}
              logoSrc={item.logo}
              title={item.name}
            />
          ))}
        </ImageSlide>
      </ImageSlider>
    </SectionWrapper>
  );
};

export default ClientBlock;
