import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Logo from 'reusecore/src/elements/UI/Logo';
import Container from 'common/src/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';

import LogoImage from 'common/src/assets/image/agency/logo.png';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      agencyJson {
        menuWidget {
          id
          title
          menuItems {
            id
            text
            url
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper id="footerSection">
      <Container>
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Agency"
              logoStyle={logoStyle}
            />
            <Text content="RedQ, Inc." {...textStyle} />
            <Text content="+97 0267 5923" {...textStyle} />
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {Data.agencyJson.menuWidget.map(widget => (
              <Box className="col" {...col} key={widget.id}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map(item => (
                    <ListItem key={`list__item-${item.id}`}>
                      <a className="ListItem" href={item.url}>
                        {item.text}
                      </a>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
};

export default Footer;
