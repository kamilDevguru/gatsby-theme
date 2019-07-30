import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/src/components/Accordion';
import Container from 'common/src/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';

import FaqWrapper from './faq.style';

const FaqSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  title,
  description,
  buttonWrapper,
  button,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasModernJson {
        FAQ_DATA {
          title
          description
          expend
        }
      }
    }
  `);

  return (
    <Box {...sectionWrapper} id="faq_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="FREQUENTLY ASK QUESTION" />
          <Heading {...secHeading} content="Want to ask something from us?" />
        </Box>
        <Box {...row}>
          <Box {...col}>
            <FaqWrapper>
              <Accordion>
                <>
                  {Data.saasModernJson.FAQ_DATA.map((accordionItem, index) => (
                    <AccordionItem
                      className="accordion_item"
                      key={`accordion-${index}`}
                      expanded={accordionItem.expend}
                    >
                      <>
                        <AccordionTitle className="accordion_title">
                          <>
                            <Heading {...title} content={accordionItem.title} />
                            <IconWrapper>
                              <OpenIcon>
                                <Icon icon={minus} size={18} />
                              </OpenIcon>
                              <CloseIcon>
                                <Icon icon={plus} size={18} />
                              </CloseIcon>
                            </IconWrapper>
                          </>
                        </AccordionTitle>
                        <AccordionBody className="accordion_body">
                          <Text
                            {...description}
                            content={accordionItem.description}
                          />
                        </AccordionBody>
                      </>
                    </AccordionItem>
                  ))}
                </>
              </Accordion>
            </FaqWrapper>
            <Box {...buttonWrapper}>
              <a href="#1">
                <Button {...button} title="EXPLORE FORUM" />
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

FaqSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
};

FaqSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '30px', '50px', '50px'],
    pb: ['60px', '80px', '80px', '80px'],
  },
  secTitleWrapper: {
    mb: ['55px', '65px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  col: {
    width: ['100%', '100%', '75%', '75%'],
  },
  title: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: 0,
  },
  description: {
    fontSize: '15px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: 0,
  },
  buttonWrapper: {
    mt: '50px',
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: ['22px'],
    pr: ['22px'],
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default FaqSection;
