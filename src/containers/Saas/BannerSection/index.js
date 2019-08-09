import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import PropTypes from 'prop-types';
import Box from '../../../reusecore/src/elements/Box';
import Text from '../../../reusecore/src/elements/Text';
import Image from '../../../reusecore/src/elements/Image';
import Heading from '../../../reusecore/src/elements/Heading';
import Button from '../../../reusecore/src/elements/Button';
import FeatureBlock from '../../../common/src/components/FeatureBlock';
import Container from '../../../common/src/components/UI/Container';

import Particles from '../Particle';
import BannerWrapper, {
  DiscountLabel,
  BannerObject,
} from './bannerSection.style';

import BannerObject1 from '../../../common/src/assets/image/saas/banner/bannerObject1.png';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      allContentfulBanner {
        edges {
          node {
            title
            content {
              content
            }
            module {
              caption
            }
            image {
              fluid(maxWidth: 1500){
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const bannerData = Data.allContentfulBanner.edges[0].node;

  const ButtonGroup = () => (
    <Fragment>
      <Button title={bannerData.module[0].caption} {...btnStyle} />
      <Button
        className="outlined"
        title={bannerData.module[1].caption}
        variant="outlined"
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const onlineNumber = Math.floor(Math.random() * 31) + 10; // NOTE: Generating random number between 10-40

  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <DiscountLabel>
              <Text content={`${onlineNumber} ondernemers`} {...discountAmount} />
              <Text content="online op boekhouder.nl" {...discountText} />
            </DiscountLabel>
            <FeatureBlock
              title={
                <Heading
                  content={bannerData.title}
                  {...title}                  
                  fontWeight={600}
                  color='#272838'
                />
              }
              description={
                <Text
                  content={bannerData.content.content}
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div className="objectWrapper">
          <Image src={BannerObject1} alt="BannerObject1" />
          <div className="dashboardWrapper">
            <Img fluid={bannerData.image.fluid} />
          </div>
        </div>
      </BannerObject>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#5167db',
    ml: '18px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700,
  },
  discountText: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500,
  },
};

export default BannerSection;
