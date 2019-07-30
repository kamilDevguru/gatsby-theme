import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';

const DomainSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      domains: file(relativePath: { eq: "image/hosting/circle.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Image
              fluid={
                (Data.domains !== null) | undefined
                  ? Data.domains.childImageSharp.fluid
                  : {}
              }
              alt="Domain Image"
            />
          </Box>
          <Box {...col} {...textArea}>
            <Fade bottom cascade>
              <Heading
                {...title}
                content="Available domain extension with your custom name"
              />
              <Text
                {...description}
                content="You can check the domain avaibility by our domain tool and choose your desired domain without any hagitation if available."
              />
              <Box>
                <a href="#1">
                  <Button {...button} title="EXPLORE MORE" />
                </a>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

DomainSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0', '0', '40px', '80px'],
    pb: ['40px', '40px', '80px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['26px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default DomainSection;
