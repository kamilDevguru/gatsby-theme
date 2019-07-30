import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import TestimonialSecWrapper, {
  ImageWrapper,
  TestimonialItem,
  BgImageWrapper,
} from './bannerSlider.style';

import { TESTIMONIALS } from 'common/src/data/Crypto';

const TestimonialSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  reviewStyle,
  TestimonialMeta,
  nameStyle,
  designationStyle,
  arrowStyle,
}) => {
  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    autoplay: 3000,
    perView: 1,
    animationDuration: 600,
  };

  return (
    <TestimonialSecWrapper id="testimonial_section">
      <Container>
        <div style={{ width: '440px' }}>
          <GlideCarousel
            options={carouselOptions}
            bullets={true}
            numberOfBullets={4}
            controls={false}
          >
            <>
              {TESTIMONIALS.map((slideItem, index) => (
                <GlideSlide key={`testimonial-slide-${index}`}>
                  <TestimonialItem className="testimonial_item">
                    <Text content={slideItem.review} {...reviewStyle} />
                    <Box {...TestimonialMeta}>
                      <ImageWrapper>
                        <Image
                          src={slideItem.avatar}
                          alt={`reviewer-image-${index}`}
                        />
                      </ImageWrapper>
                      <Box>
                        <Heading content={slideItem.name} {...nameStyle} />
                        <Text
                          content={slideItem.designation}
                          {...designationStyle}
                        />
                      </Box>
                    </Box>
                  </TestimonialItem>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </div>
      </Container>
    </TestimonialSecWrapper>
  );
};

TestimonialSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  reviewStyle: PropTypes.object,
  TestimonialMeta: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  arrowStyle: PropTypes.object,
};

TestimonialSection.defaultProps = {
  secTitleWrapper: {
    mb: ['40px', '40px', '50px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  reviewStyle: {
    fontSize: ['16px', '16px', '16px', '16px', '16px'],
    fontWeight: '400',
    color: 'rgb(82, 95, 127)',
    lineHeight: '1.74',
    mb: ['30px', '30px', '30px', '30px', '40px'],
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: 'center',
  },
  nameStyle: {
    as: 'h3',
    fontSize: ['16px', '17px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: 'rgb(50, 50, 93)',
    mb: '5px',
    fontFamily: 'Poppins',
  },
  designationStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: 'rgb(82, 95, 127)',
    mb: '0',
    fontFamily: 'Poppins',
  },
};

export default TestimonialSection;
