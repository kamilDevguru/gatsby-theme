import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import PropTypes from 'prop-types';

import Box from '../../../reusecore/src/elements/Box';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Button from '../../../reusecore/src/elements/Button';
import Container from '../../../common/src/components/UI/Container';

import { ButtonGroup } from '../saas.style';

const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  btnStyle,
  outlineBtnStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      allContentfulTrial {
        edges {
          node {
            title
            description
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
  const trialData = Data.allContentfulTrial.edges[0].node;

  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <Img fluid={trialData.image.fluid} />
          </Box>
          <Box {...textArea}>
            <Heading
              {...title}
              content={trialData.title}
            />
            <Text
              {...description}
              content={trialData.description}
            />
            <ButtonGroup className="button_group">
              <Button title={trialData.module[0].caption} {...btnStyle} />
              <Button
                title={trialData.module[1].caption}
                variant="textButton"
                {...outlineBtnStyle}
              />
            </ButtonGroup>
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
    fontSize: ['32px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px'],
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
  },
};

export default TrialSection;
