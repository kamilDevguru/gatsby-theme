import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import TestimonialSecWrapper, {
  ImageWrapper,
  TestimonialItem,
} from './testimonials.style';

const TestimonialSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  reviewStyle,
  TestimonialMeta,
  nameStyle,
  designationStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        TESTIMONIALS {
          name
          designation
          review
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

  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    autoplay: 4000,
    perView: 2,
    gap: 30,
    animationDuration: 800,
    peek: {
      before: 390,
      after: 390,
    },
    breakpoints: {
      1800: {
        perView: 2,
        peek: {
          before: 220,
          after: 220,
        },
      },
      1400: {
        perView: 2,
        peek: {
          before: 160,
          after: 160,
        },
      },
      1200: {
        perView: 2,
        peek: {
          before: 100,
          after: 100,
        },
      },
      990: {
        perView: 2,
        peek: {
          before: 100,
          after: 100,
        },
      },
      800: {
        perView: 1,
        peek: {
          before: 120,
          after: 120,
        },
      },
      575: {
        perView: 1,
        peek: {
          before: 0,
          after: 0,
        },
      },
    },
  };

  return (
    <TestimonialSecWrapper id="testimonial_section">
      <Container fullWidth noGutter>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="TESTIMONIALS " />
          <Heading {...secHeading} content="What’s clients say about us" />
        </Box>
        <GlideCarousel
          options={carouselOptions}
          nextButton={
            <Button
              icon={<i className="flaticon-next" />}
              variant="textButton"
            />
          }
          prevButton={
            <Button
              icon={<i className="flaticon-left-arrow" />}
              variant="textButton"
            />
          }
        >
          <>
            {Data.hostingJson.TESTIMONIALS.map((slideItem, index) => (
              <GlideSlide key={`testimonial-slide-${index}`}>
                <TestimonialItem className="testimonial_item">
                  <Text content={slideItem.review} {...reviewStyle} />
                  <Box {...TestimonialMeta}>
                    <ImageWrapper>
                      <Image
                        fluid={
                          (slideItem.avatar !== null) | undefined
                            ? slideItem.avatar.childImageSharp.fluid
                            : {}
                        }
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
    fontSize: ['16px', '16px', '17px', '17px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.74',
    mb: ['30px', '30px', '30px', '40px', '55px'],
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: 'center',
  },
  nameStyle: {
    as: 'h3',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px',
  },
  designationStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#6f7a87',
    mb: '0',
  },
};

export default TestimonialSection;
