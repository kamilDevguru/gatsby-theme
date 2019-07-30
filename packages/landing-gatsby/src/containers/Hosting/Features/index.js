import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import { FeatureItem } from '../hosting.style';
import ShapeOne from 'common/src/assets/image/hosting/shape-1.svg';
import ShapeTwo from 'common/src/assets/image/hosting/shape-2.svg';
import ShapeThree from 'common/src/assets/image/hosting/shape-3.svg';
import ShapeFour from 'common/src/assets/image/hosting/shape-4.svg';
import ShapeFive from 'common/src/assets/image/hosting/shape-5.svg';

const FeatureSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        FEATURES_DATA {
          title
          icon
          description
          animation
        }
      }
    }
  `);

  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...secTitleWrapper}>
          <Fade bottom cascade>
            <Text {...secText} content="OUR SERVICES" />
            <Heading
              {...secHeading}
              content="Our Featured Service that We Provide"
            />
          </Fade>
        </Box>

        <Box {...row}>
          {Data.hostingJson.FEATURES_DATA.map((featureItem, index) => (
            <Box {...col} key={`feature-${index}`}>
              {featureItem.animation ? (
                <Fade bottom delay={index * 120}>
                  <FeatureItem
                    title={
                      <Heading
                        {...featureItemHeading}
                        content={featureItem.title}
                      />
                    }
                    description={
                      <Text
                        {...featureItemDes}
                        content={featureItem.description}
                      />
                    }
                    icon={<i className={featureItem.icon} />}
                    additionalContent={
                      <>
                        <img
                          className="hover-shape-1 hover-shape"
                          src={ShapeOne}
                          alt="Shape One"
                        />
                        <img
                          className="hover-shape-2 hover-shape"
                          src={ShapeTwo}
                          alt="Shape Two"
                        />
                        <img
                          className="hover-shape-3 hover-shape"
                          src={ShapeThree}
                          alt="Shape Three"
                        />
                        <img
                          className="hover-shape-4 hover-shape"
                          src={ShapeFour}
                          alt="Shape Four"
                        />
                        <img
                          className="hover-shape-5 hover-shape"
                          src={ShapeFive}
                          alt="Shape Five"
                        />
                      </>
                    }
                    button={
                      <a href="#1" aria-label={`link-${index}`}>
                        <i className="flaticon-next" />
                      </a>
                    }
                  />
                </Fade>
              ) : (
                <FeatureItem
                  title={
                    <Heading
                      {...featureItemHeading}
                      content={featureItem.title}
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content={featureItem.description}
                    />
                  }
                  icon={<i className={featureItem.icon} />}
                  additionalContent={
                    <>
                      <img
                        className="hover-shape-1 hover-shape"
                        src={ShapeOne}
                        alt="Shape One"
                      />
                      <img
                        className="hover-shape-2 hover-shape"
                        src={ShapeTwo}
                        alt="Shape Two"
                      />
                      <img
                        className="hover-shape-3 hover-shape"
                        src={ShapeThree}
                        alt="Shape Three"
                      />
                      <img
                        className="hover-shape-4 hover-shape"
                        src={ShapeFour}
                        alt="Shape Four"
                      />
                      <img
                        className="hover-shape-5 hover-shape"
                        src={ShapeFive}
                        alt="Shape Five"
                      />
                    </>
                  }
                  button={
                    <a href="#1" aria-label={`link-${index}`}>
                      <i className="flaticon-next" />
                    </a>
                  }
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

FeatureSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  featureItemHeading: PropTypes.object,
  featureItemDes: PropTypes.object,
};

FeatureSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
    id: 'feature_section',
  },
  secTitleWrapper: {
    mb: ['50px', '60px'],
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
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    className: 'col',
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pr: '15px',
    pl: '15px',
    mb: '30px',
  },
  featureItemHeading: {
    fontSize: ['18px', '18px', '16px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '10px'],
    letterSpacing: '-0.020em',
    maxWidth: ['auto', 'auto', 'auto', '180px'],
  },
  featureItemDes: {
    fontSize: ['14px', '14px', '14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48cc',
    mb: ['20px', '20px', '20px', '20px'],
  },
};

export default FeatureSection;
