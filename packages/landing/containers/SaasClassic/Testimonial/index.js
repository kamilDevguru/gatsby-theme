import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';

import { TESTIMONIALS } from 'common/src/data/SaasClassic';

import {
  TestimonialSlideWrapper,
  TestimonialItem,
  TestimonialMeta,
  AuthorInfo,
  AuthorImage,
} from './testimonial.style';

const TestimonialSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  reviewTitle,
  review,
  name,
  designation,
}) => {
  const carouselOptions = {
    type: 'carousel',
    autoplay: 6000,
    perView: 2,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 1,
      },
    },
  };

  return (
    <Box {...sectionWrapper} as="section" id="testimonial_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="TESTIMONIAL" />
          <Heading
            {...secHeading}
            content="Meet Client Satisfaction by using product"
          />
        </Box>
        <TestimonialSlideWrapper>
          <GlideCarousel
            options={carouselOptions}
            carouselSelector="testimonial__slider"
            controls={false}
            bullets={true}
            numberOfBullets={TESTIMONIALS.length}
          >
            <>
              {TESTIMONIALS.map((item, index) => (
                <GlideSlide key={`testimonial-slide-${index}`}>
                  <TestimonialItem>
                    <Heading as="h3" content={item.title} {...reviewTitle} />
                    <Text content={item.review} {...review} />
                    <TestimonialMeta>
                      <AuthorInfo>
                        <AuthorImage>
                          <Image
                            src={item.avatar}
                            alt={`reviewer-image-${index}`}
                          />
                        </AuthorImage>
                        <Box>
                          <Heading as="h3" content={item.name} {...name} />
                          <Text content={item.designation} {...designation} />
                        </Box>
                      </AuthorInfo>
                    </TestimonialMeta>
                  </TestimonialItem>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </TestimonialSlideWrapper>
      </Container>
    </Box>
  );
};

TestimonialSection.propTypes = {
  sectionHeader: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '100px'],
    pb: ['60px', '80px', '90px', '100px', '100px'],
  },
  secTitleWrapper: {
    mb: ['40px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '500px',
    maxWidth: '100%',
  },
  reviewTitle: {
    fontSize: ['15px', '16px'],
    fontWeight: '500',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '13px',
  },
  review: {
    fontSize: ['16px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.7',
    mb: 0,
  },
  name: {
    fontSize: ['14px', '16px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px',
  },
  designation: {
    fontSize: ['12px', '14px'],
    color: '#6f7a87',
    mb: 0,
  },
};

export default TestimonialSection;
