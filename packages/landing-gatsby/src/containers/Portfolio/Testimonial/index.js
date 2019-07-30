import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import { PrevButton, NextButton } from '../portfolio.style';
import {
  TestimonialWrapper,
  TestimonialItem,
  TestimonialHead,
  TestimonialThumb,
} from './testimonial.style';
import { twitter } from 'react-icons-kit/icomoon/twitter';

const TestimonialSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  reviewStyle,
  nameStyle,
  designationStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        TESTIMONIAL {
          name
          designation
          review
          organization
          organizationURL
          twitterProfile
          image {
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
    autoplay: 6000,
    perView: 3,
    gap: 28,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3,
      },
      767: {
        perView: 2,
      },
      500: {
        perView: 1,
      },
    },
  };

  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="What My Clients Say?" />
          <Text
            {...secDescription}
            content="Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore"
          />
        </Box>
        <TestimonialWrapper>
          <GlideCarousel
            carouselSelector="testimonial-carousel"
            options={carouselOptions}
            prevButton={
              <PrevButton>
                <span />
              </PrevButton>
            }
            nextButton={
              <NextButton>
                <span />
              </NextButton>
            }
          >
            <>
              {Data.portfolioJson.TESTIMONIAL.map((item, index) => (
                <GlideSlide key={`testimonial-item-${index}`}>
                  <TestimonialItem>
                    <TestimonialHead>
                      <TestimonialThumb>
                        <Image
                          fluid={item.image.childImageSharp.fluid}
                          alt={`testimonial-avatar-${index + 1}`}
                        />
                      </TestimonialThumb>
                      <a href={item.twitterProfile || '#'} aria-label="twitter">
                        <Icon icon={twitter} size={24} />
                      </a>
                    </TestimonialHead>
                    <Text {...reviewStyle} content={item.review} />
                    <Heading as="h3" content={item.name} {...nameStyle} />
                    <Text
                      as="span"
                      content={item.designation}
                      {...designationStyle}
                    />
                    <a
                      href={item.organizationURL || '#'}
                      className="reviewer_org"
                    >
                      {item.organization}
                    </a>
                  </TestimonialItem>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </TestimonialWrapper>
      </Container>
    </Box>
  );
};

TestimonialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  reviewStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '150px'],
    pb: '50px',
  },
  secTitleWrapper: {
    mb: ['90px', '90px', '50px', '50px', '50px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    width: '530px',
    maxWidth: '100%',
    mb: '0',
  },
  reviewStyle: {
    fontSize: '16px',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '30px',
  },
  nameStyle: {
    fontSize: '16px',
    color: '#302b4e',
    fontWeight: '600',
    mb: '7px',
  },
  designationStyle: {
    fontSize: '14px',
    color: '#43414e',
    mb: '0',
  },
};

export default TestimonialSection;
