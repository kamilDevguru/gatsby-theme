import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';

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
  const Data = useStaticQuery(graphql`
    query {
      saasModernJson {
        TESTIMONIALS {
          name
          designation
          review
          title
          avatar {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

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
          <Heading {...secHeading} content="What our client say about us" />
        </Box>
        <TestimonialSlideWrapper>
          <GlideCarousel
            options={carouselOptions}
            carouselSelector="testimonial__slider"
            controls={false}
            bullets={true}
            numberOfBullets={Data.saasModernJson.TESTIMONIALS.length}
          >
            <>
              {Data.saasModernJson.TESTIMONIALS.map((item, index) => (
                <GlideSlide key={`testimonial-slide-${index}`}>
                  <TestimonialItem>
                    <Heading as="h3" content={item.title} {...reviewTitle} />
                    <Text content={item.review} {...review} />
                    <TestimonialMeta>
                      <AuthorInfo>
                        <AuthorImage>
                          <Image
                            fluid={item.avatar.childImageSharp.fluid}
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
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
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
