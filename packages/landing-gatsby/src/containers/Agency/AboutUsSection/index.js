import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Card from 'reusecore/src/elements/Card';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import AboutUsSectionWrapper from './aboutUsSection.style';

const AboutUsSection = ({
  row,
  col,
  title,
  description,
  textArea,
  featureTitle,
  btnStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "image/agency/group/group-image1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 505, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(
        relativePath: { eq: "image/agency/group/group-image2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(
        relativePath: { eq: "image/agency/group/group-image3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 505, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      agencyJson {
        aboutus {
          id
          title
          icon
        }
      }
    }
  `);

  return (
    <AboutUsSectionWrapper id="AboutUsSection">
      <Box className="row" {...row}>
        <Box className="col" {...col}>
          <Card className="group-gallery">
            <Box className="col1">
              <Fade top delay={30}>
                <Image
                  fluid={
                    (Data.image1 !== null) | undefined
                      ? Data.image1.childImageSharp.fluid
                      : {}
                  }
                  objectFit="contain"
                  alt="Feature Image 1"
                />
              </Fade>
              <Fade left delay={60}>
                <Image
                  fluid={
                    (Data.image3 !== null) | undefined
                      ? Data.image3.childImageSharp.fluid
                      : {}
                  }
                  objectFit="contain"
                  alt="Feature Image 3"
                />
              </Fade>
            </Box>
            <Box className="col2">
              <Fade bottom delay={90}>
                <Image
                  fluid={
                    (Data.image2 !== null) | undefined
                      ? Data.image2.childImageSharp.fluid
                      : {}
                  }
                  objectFit="contain"
                  alt="Feature Image 2"
                />
              </Fade>
            </Box>
          </Card>
        </Box>
        <Box className="col" {...col}>
          <Box {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Great Responsive & Strong Competitive People"
                  {...title}
                />
              }
              description={
                <Text
                  content="Some hardworking People are Working Day and Night to provide you highly scalable product . "
                  {...description}
                />
              }
            />
          </Box>
          <Box {...textArea}>
            {Data.agencyJson.aboutus.map((feature, index) => (
              <FeatureBlock
                key={`feature_point-${index}`}
                icon={<i className={feature.icon} />}
                iconPosition="left"
                title={<Heading content={feature.title} {...featureTitle} />}
              />
            ))}
            <Button title="DISCOVER ITEM" {...btnStyle} />
          </Box>
        </Box>
      </Box>
    </AboutUsSectionWrapper>
  );
};

AboutUsSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  textArea: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

AboutUsSection.defaultProps = {
  // About us section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // About us section col default style
  col: {
    width: [1, '100%', '50%'],
  },
  // About us section text area default style
  textArea: {
    maxWidth: '490px',
    pl: '40px',
  },
  // About us section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // About us section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },

  // feature title default style
  featureTitle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default AboutUsSection;
