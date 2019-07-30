import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { PROOFS_FEATURE } from 'common/src/data/Crypto';
import { TrustedWrapper, FeatureSection } from './trustedProof.style';
import AppButton from 'common/src/assets/image/crypto/app.svg';
import PlayButton from 'common/src/assets/image/crypto/playstore.svg';

const TrustedHistory = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  return (
    <TrustedWrapper id="trusted">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <Fade up>
              <div className="TrustedImageBtn">
                <Link href="#1">
                  <a>
                    <Image
                      src={AppButton}
                      className="app_image_area"
                      alt="App Image"
                    />
                  </a>
                </Link>
                <Link href="#1">
                  <a>
                    <Image
                      src={PlayButton}
                      className="play_image_area"
                      alt="GooglePlay Image"
                    />
                  </a>
                </Link>
              </div>
            </Fade>
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <FeatureSection>
              {PROOFS_FEATURE.map((item, index) => (
                <div key={`feature-${index}`} className="featureWrapper">
                  <Image src={item.image} alt={item.title} />
                  <Box className="contextPortion">
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />

                    <Text content={item.des} {...featureDescriptionStyle} />
                  </Box>
                </div>
              ))}
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </TrustedWrapper>
  );
};

// Transactions style props
TrustedHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Trusted default style
TrustedHistory.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Trusted section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },

  // Trusted section title default style
  title: {
    content: 'A Trusted Proof of Investment Vehicle',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left'],
  },
  // Trusted section description default style
  description: {
    content:
      'Easily buy, sell or exchange over 30 different cryptocurrencies. Now euro deposits and withdrawn available.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
  },
  sectionSubTitle: {
    content: 'Fast, Cheap, Zero Fraud',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
    textAlign: ['left', 'left'],
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left'],
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left'],
  },
};

export default TrustedHistory;
