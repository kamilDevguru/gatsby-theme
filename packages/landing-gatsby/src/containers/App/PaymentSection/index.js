import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { PaymentCircleShape } from '../app.style';

import ImageOne from 'common/src/assets/image/app/mockup.png';
import ImageTwo from 'common/src/assets/image/app/credit-card.png';

const PaymentSection = ({
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
    <Box {...sectionWrapper} id="payments">
      <PaymentCircleShape />

      <Container fullWidth noGutter className="control-sec-container payment">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <Image {...imageOne} />
              </Fade>
            </Card>
            <Card
              {...imageWrapper}
              {...imageWrapperTwo}
              className="cardExtraImage"
            >
              <Fade right>
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
                <a href="#">
                  <Button {...button} {...btnStyle} />
                </a>
              }
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

PaymentSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
};

PaymentSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '40px', '40px', '80px', '80px'],
    pb: ['80px', '80px', '80px', '180px', '280px'],
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
    width: [1, 1, '45%', '45%', '45%'],
    zIndex: '1',
  },
  imageArea: {
    width: [0, 0, '52%', '45%', '45%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-start',
    mt: ['0px', '0px', '40px', '50px', '90px'],
    ml: ['-250px', '-250px', '-180px', '-220px', '-420px'],
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
    content: 'PAYMENT SECURITY',
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
  },
  title: {
    content: 'Secure Payment and Transaction System With #1 ranking',
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
      'Security of our customer is our basic priority and we are best at it . So no need to worry about online payment and Transaction System .',
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['center', 'left'],
  },
  button: {
    title: 'HOW IT WORKS',
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

export default PaymentSection;
