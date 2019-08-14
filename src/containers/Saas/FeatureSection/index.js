import React from 'react';
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from '../../../reusecore/src/elements/Box';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import FeatureBlock from '../../../components/FeatureServiceBlock';
import Container from '../../../common/src/components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  contentStyle,
  blockWrapperStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      allContentfulFeature {
        edges {
          node {
            title
            subtitle
            module {
              title
              description
              itemNumber
              time
              field
              button {
                caption
                link
              }
              icon {
                fluid(maxWidth: 96){
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  const featureData = Data.allContentfulFeature.edges[0].node;
  return (
    <FeatureSectionWrapper id="service_section">
      <Container>
        <Box {...sectionHeader}>
          <Text content={featureData.subtitle} {...sectionSubTitle} />
          <Heading
            content={featureData.title}
            {...sectionTitle}
          />
        </Box>
        <Box className="row" {...row}>
          {featureData.module.map((service, index) => (
            <Box className="col" {...col} key={index}>
              <FeatureBlock
                icon={<Img fluid={service.icon.fluid} />}
                wrapperStyle={blockWrapperStyle}
                contentStyle={contentStyle}
                field={service.field}
                itemNumber={service.itemNumber}
                time={service.time}
                buttonInfo={service.button}
                title={<Heading content={service.title} {...featureTitle} />}
                description={
                  <Text content={service.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    mb: '15',
  },
  // feature content default style
  contentStyle: {
    p: [27, 44, 44, 48],
    textAlign: 'left',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc',
  },
};

export default FeatureSection;
