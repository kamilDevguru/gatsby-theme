import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';

import VendorLogos from 'common/src/assets/image/saasModern/vendor-logos.png';

const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <Image {...ImageOne} src={VendorLogos} alt="VendorLogos" />
          </Box>
          <Box {...textArea}>
            <Heading
              {...title}
              content="Start your 30 days free trials today!"
            />
            <Text
              {...description}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore."
            />
            <Box {...buttonWrapper}>
              <Button title="JOIN WITH SLACK" {...btnStyle} />
              <Button
                title="Login with Email"
                variant="textButton"
                {...outlineBtnStyle}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

TrialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['0px', '0px', '0px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textArea: {
    width: ['100%', '100%', '80%', '43%'],
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['35px', '35px', '40px', '40px'],
  },
  title: {
    fontSize: ['28px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: '#5c636c',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px'],
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px'],
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    colors: 'secondary',
  },
};

export default TrialSection;
