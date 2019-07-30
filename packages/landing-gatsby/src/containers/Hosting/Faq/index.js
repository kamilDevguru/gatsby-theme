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
      hostingJson {
        FAQ_DATA {
          title
          description
          expend
        }
      }
    }
  `);

  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="FREQUENTLY ASK QUESTION" />
          <Heading {...secHeading} content="Want to ask something from us?" />
        </Box>
        <Box {...row}>
          <Box {...col}>
            <Accordion>
              <>
                {Data.hostingJson.FAQ_DATA.map((accordionItem, index) => (
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
    id: 'faq_section',
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
    bg: '#f9fbfd',
  },
  secTitleWrapper: {
    mb: ['55px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: -`${4}`,
    mr: -`${4}`,
  },
  col: {
    width: [1],
    pr: `${4}`,
    pl: `${4}`,
    mb: `${7}`,
  },
  title: {
    fontSize: ['16px', '19px'],
    fontWeight: `${3}`,
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  description: {
    fontSize: `${3}`,
    color: 'textColor',
    lineHeight: '1.75',
    mb: `${0}`,
  },
  buttonWrapper: {
    mt: `${11}`,
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primary',
    height: `${4}`,
  },
};

export default FaqSection;
