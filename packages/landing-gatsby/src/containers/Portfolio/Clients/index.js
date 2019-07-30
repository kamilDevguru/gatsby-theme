import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import { ClientsImage } from './clients.style';

const ClientsSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        CLIENTS {
          title
          image {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="We can build your story." />
          <Text
            {...secDescription}
            content="Through the years we have partnered with great companies and entrepreneurs all over the world."
          />
        </Box>
        <Box {...row}>
          {Data.portfolioJson.CLIENTS.map((item, index) => (
            <ClientsImage key={`client-${index}`}>
              <Image
                src={item.image.publicURL}
                alt={item.title}
                title={item.title}
              />
            </ClientsImage>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

ClientsSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
};

ClientsSection.defaultProps = {
  sectionWrapper: {
    pt: ['40px', '60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '100px', '130px', '130px'],
  },
  secTitleWrapper: {
    mb: '60px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ClientsSection;
