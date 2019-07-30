import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import BlockWrapper, {
  ContentWrapper,
  List,
  Item,
  ImageWrapper,
} from './promotionBlock.style';

const PromotionBlock = ({ row, col }) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        promotionData {
          image {
            publicURL
          }
          slogan
          title
          text1
          text2
          lists {
            id
            text
          }
        }
      }
    }
  `);

  const {
    slogan,
    title,
    text1,
    text2,
    lists,
    image,
  } = data.charityJson.promotionData;

  return (
    <BlockWrapper id="ourCommunity">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content={slogan} />
              <Heading content={title} />
              <Text content={text1} />
              <Text content={text2} />
              <List>
                {lists.map(item => (
                  <Item key={`list_key${item.id}`}>{item.text}</Item>
                ))}
              </List>
              <a href="#1" className="learn__more-btn">
                <span className="hyphen" />
                <span className="btn_text">Learn More </span>
              </a>
            </ContentWrapper>
          </Box>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={image.publicURL} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// PromotionBlock style props
PromotionBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// PromotionBlock default style
PromotionBlock.defaultProps = {
  // PromotionBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // PromotionBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default PromotionBlock;
