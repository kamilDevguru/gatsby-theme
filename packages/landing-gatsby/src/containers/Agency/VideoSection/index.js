import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { openModal, closeModal } from '@redq/reuse-modal';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';
import VideoSectionWrapper from './videoSection.style';

const IntroVideo = () => (
  <iframe
    title="ReactivePro"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/9-8KYHo_wtc?controls=0&showinfo=0"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const VideoSection = ({
  sectionHeader,
  sectionTitle,
  buttonStyle,
  sectionSubTitle,
  imageWrapper,
}) => {
  // Video modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0,
        },
      },
      component: IntroVideo,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

  const Data = useStaticQuery(graphql`
    query {
      featureImage: file(
        relativePath: { eq: "image/agency/preview-image.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <VideoSectionWrapper id="videoSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="HOW WE WORK" {...sectionSubTitle} />
          <Heading content="Take a look how we enjoy work" {...sectionTitle} />
        </Box>
        <Box className="figure" {...imageWrapper}>
          <Image
            fluid={
              (Data.featureImage !== null) | undefined
                ? Data.featureImage.childImageSharp.fluid
                : {}
            }
            alt="Video Preview Image"
          />
          <Box className="fig__caption">
            <Button
              {...buttonStyle}
              icon={<i className="flaticon-youtube" />}
              onClick={handleVideoModal}
              aria-label="play"
            />
          </Box>
        </Box>
      </Container>
    </VideoSectionWrapper>
  );
};

// VideoSection style props
VideoSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  memberName: PropTypes.object,
  designation: PropTypes.object,
  imageWrapper: PropTypes.object,
};

// VideoSection default style
VideoSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // button default design
  buttonStyle: {
    variant: 'textButton',
    p: 0,
    color: '#ec4444',
    fontSize: '71px',
  },
  imageWrapper: {
    display: ' block',
  },
};

export default VideoSection;
