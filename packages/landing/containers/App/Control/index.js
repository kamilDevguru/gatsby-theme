import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import ImageOne from 'common/src/assets/image/app/info1.png';
import ImageTwo from 'common/src/assets/image/app/info2.png';

const ControllSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  textAreaRow,
  imageAreaRow,
  imageWrapper,
  imageOne,
  imageTwo,
  imageWrapperOne,
  imageWrapperTwo,
  sectionSubTitle,
  btnStyle,
}) => {
  return (
    <Box {...sectionWrapper} id="control">
      <Container fullWidth noGutter className="control-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <Image {...imageOne} />
              </Fade>
            </Card>
            <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade bottom>
                <Image {...imageTwo} />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
              button={
                <Link href="#">
                  <a>
                    <Button {...button} {...btnStyle} />
                  </a>
                </Link>
              }
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ControllSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
};

ControllSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['40px', '80px'],
    pb: ['40px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '50%', '50%', '50%'],
  },
  imageArea: {
    width: ['0px', '0px', '53%', '50%', '50%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
    ml: ['0px', '0px', '-200px', '-250px', '-400px'],
    pointerEvents: 'none',
  },
  imageOne: {
    src: `${ImageOne}`,
    alt: 'Info Image One',
  },
  imageTwo: {
    src: `${ImageTwo}`,
    alt: 'Info Image Two',
  },
  sectionSubTitle: {
    content: 'EASY DEPLOYMENT',
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
    textAlign: ['center', 'left'],
  },
  title: {
    content: 'Deploy your site with simple commands',
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '420px', '420px'],
    textAlign: ['center', 'left'],
  },
  description: {
    content:
      'You can deploy your site with firebase or Now.sh with some simple process. The deployment is made easy for our customers and according to their needs.',
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['center', 'left'],
  },
  button: {
    title: 'LEARN MORE',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default ControllSection;
