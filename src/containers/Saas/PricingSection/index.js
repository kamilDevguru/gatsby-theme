import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Box from '../../../reusecore/src/elements/Box';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Button from '../../../reusecore/src/elements/Button';
import Container from '../../../common/src/components/UI/Container';
import GlideCarousel from '../../../common/src/components/GlideCarousel';
import GlideSlide from '../../../common/src/components/GlideCarousel/glideSlide';

import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
} from './pricing.style';

import { checkmark } from 'react-icons-kit/icomoon/checkmark';

const PricingSection = ({
  sectionWrapper,
  row,
  secTitleWrapper,
  secHeading,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonStyle,
  buttonFillStyle,
  listContentStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      allContentfulPricing {
        edges {
          node {
            subtitle
            title
            module {
              freePlan
              title
              subtitle
              price
              monthlyPlanFlag
              frequency
              button {
                title
              }
              module {
                caption
              }
            }
            options {
              caption
              monthlyFlag
            }
          }
        }
      }
    }
  `);

  const optionData = Data.allContentfulPricing.edges[0].node.options;

  const [state, setState] = useState({isMonthlyPlan: true});

  const planData = Data.allContentfulPricing.edges[0].node.module.filter(item => item.monthlyPlanFlag === state.isMonthlyPlan);
  const activeStatus = state.isMonthlyPlan;

  const pricingCarouselOptions = {
    type: 'slider',
    perView: 3,
    gap: 30,
    bound: true,
    breakpoints: {
      1199: {
        perView: 2,
        type: 'carousel',
        peek: {
          before: 100,
          after: 100,
        },
      },
      990: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 160,
          after: 160,
        },
      },
      767: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 80,
          after: 80,
        },
      },
      575: {
        type: 'carousel',
        perView: 1,
        gap: 15,
        peek: {
          before: 20,
          after: 20,
        },
      },
    },
  };

  return (
    <Box {...sectionWrapper} id="pricing_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text
            content={Data.allContentfulPricing.edges[0].node.subtitle}
            {...secText}
          />
          <Heading
            content={Data.allContentfulPricing.edges[0].node.title}
            {...secHeading}
          />
          <PricingButtonWrapper>
            {optionData.map((option, index) =>
              <Button
                key={index}
                title={option.caption}
                className={activeStatus === option.monthlyFlag ? 'active-item' : ''}
                onClick={() =>
                  setState({
                    isMonthlyPlan: option.monthlyFlag,
                  })
                }
              />
            )}
          </PricingButtonWrapper>
        </Box>
        <Box {...row}>
          <GlideCarousel
            carouselSelector="pricing-carousel"
            options={pricingCarouselOptions}
            controls={false}
          >
            <>
              {planData.map((pricingTable, index) => (
                <GlideSlide key={`pricing-table-${index}`}>
                  <PricingTable
                    freePlan={pricingTable.freePlan}
                    className="pricing_table"
                  >
                    <PricingHead>
                      <Heading content={pricingTable.title} {...nameStyle} />
                      <Text
                        content={pricingTable.subtitle}
                        {...descriptionStyle}
                      />
                    </PricingHead>
                    <PricingPrice>
                      <Text content={pricingTable.price.toFixed(2)} {...priceStyle} />
                      <Text
                        content={pricingTable.frequency}
                        {...priceLabelStyle}
                      />
                    </PricingPrice>
                    <PricingButton>
                      <a href={pricingTable.url}>
                        {pricingTable.freePlan ? (
                          <Button
                            title={pricingTable.button.title}
                            {...buttonStyle}
                          />
                        ) : (
                          <Button
                            title={pricingTable.button.title}
                            {...buttonFillStyle}
                          />
                        )}
                      </a>
                    </PricingButton>
                    <PricingList>
                      {pricingTable.module.map((item, index) => (
                        <ListItem key={`pricing-table-list-${index}`}>
                          <Icon
                            icon={checkmark}
                            className="price_list_icon"
                            size={13}
                          />
                          <Text content={item.caption} {...listContentStyle} />
                        </ListItem>
                      ))}
                    </PricingList>
                  </PricingTable>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </Box>
      </Container>
    </Box>
  );
};

PricingSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  nameStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  priceStyle: PropTypes.object,
  priceLabelStyle: PropTypes.object,
  listContentStyle: PropTypes.object,
};

PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '120px'],
    pb: ['20px', '20px', '20px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  secTitleWrapper: {
    mb: ['50px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px',
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px',
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0',
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: 'headingColor',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em',
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0',
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primary',
    width: '222px',
    maxWidth: '100%',
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    width: '200px',
    maxWidth: '100%',
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    mb: '0',
  },
};

export default PricingSection;
