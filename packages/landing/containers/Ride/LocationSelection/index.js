import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import Input from 'reusecore/src/elements/Input';
import { Icon } from 'react-icons-kit';
import { iosNavigate } from 'react-icons-kit/ionicons/iosNavigate';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { LocationSelectorWrap } from './locationSelection.style';
import ImageOne from 'common/src/assets/image/ride/estimate.svg';
import CarImage from 'common/src/assets/image/ride/car.svg';
import VejpaImage from 'common/src/assets/image/ride/vejpa.svg';

const LocationSection = ({
  sectionWrapper,
  row,
  col,
  description,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageOne,
  imageWrapperOne,
  sectionSubTitle,
  estimateBtnStyle,
}) => {
  const [state, setState] = useState({
    active: true,
  });
  const activeStatus = state.active;
  return (
    <LocationSelectorWrap id="fare_section">
      <Box {...sectionWrapper} id="control">
        <Container fullWidth noGutter className="control-sec-container">
          <Box {...row} {...imageAreaRow}>
            <Box {...col} {...imageArea}>
              <Card {...imageWrapper} {...imageWrapperOne}>
                <Fade left>
                  <Image src={ImageOne} alt="Info Image One" {...imageOne} />
                </Fade>
              </Card>
            </Box>

            <Box {...col} {...textArea} className="textArea">
              <Text content="Where to ?" {...sectionSubTitle} />
              <FeatureBlock
                description={
                  <Text
                    content="How much does GoDrive cost in your city? Calculate a fare estimate for your next trip.Simply enter a pickup location and destination to get started.."
                    {...description}
                  />
                }
              />
              <Box className="locationSelector">
                <div className="locationSelectorWrapper">
                  <Input
                    inputType="email"
                    placeholder="Enter pickup Location"
                    icon={<Icon icon={iosNavigate} />}
                    iconPosition="right"
                  />
                  <div className="locationColor" />
                </div>
                <div className="locationSelectorWrapper">
                  <Input
                    inputType="email"
                    placeholder="Enter Drop-off Location"
                    icon={<Icon icon={iosNavigate} />}
                    iconPosition="right"
                  />
                  <div className="locationColor secondChild" />
                </div>
              </Box>
              <Box className="derviceSelector">
                <div className="deviceSelectorWrapper">
                  <Box
                    className={
                      activeStatus ? 'vejpaImage active-item' : 'vejpaImage'
                    }
                    onClick={() => setState({ active: true })}
                  >
                    <Image src={VejpaImage} alt="Vejpa Image" />
                  </Box>
                  <Box
                    className="carImage"
                    className={
                      activeStatus === false
                        ? 'carImage active-item'
                        : 'carImage'
                    }
                    onClick={() => setState({ active: false })}
                  >
                    <Image src={CarImage} alt="Car Image" />
                  </Box>
                </div>
                <div className="derviceSelectorBtn">
                  <Button
                    title="Get Estimate"
                    variant="textButton"
                    icon={<i className="flaticon-next" />}
                    {...estimateBtnStyle}
                  />
                </div>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </LocationSelectorWrap>
  );
};

LocationSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  description: PropTypes.object,
  estimateBtnStyle: PropTypes.object,
};

LocationSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px'],
    pb: ['0px', '0px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '60%', '52%', '45%', '45%'],
    pl: ['0px', '15px', '30px', '60px', '60px'],
    m: ['0px 30px', 0],
  },
  imageArea: {
    width: ['0px', '40%', '48%', '55%', '55%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
    width: '100%',
  },
  imageOne: {
    width: '100%',
  },
  sectionSubTitle: {
    as: 'span',
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  description: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    mt: ['20px', '30px', '30px', '30px', '30px'],
    mb: ['30px', '30px', '30px', '35px', '35px'],
    maxWidth: ['100%', '100%', '100%', '320px', '320px'],
    textAlign: ['left', 'left'],
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    fontFamily: 'Lato',
  },
  estimateBtnStyle: {
    type: 'button',
    minWidth: '160px',
    minHeight: '47px',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    pb: '2px',
    colors: 'primaryWithBg',
  },
};

export default LocationSection;
