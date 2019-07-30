import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import NavbarWrapper from 'reusecore/src/elements/Navbar';
import Drawer from 'reusecore/src/elements/Drawer';
import Button from 'reusecore/src/elements/Button';
import Logo from 'reusecore/src/elements/UI/Logo';
import Box from 'reusecore/src/elements/Box';
import HamburgMenu from 'common/src/components/HamburgMenu';
import Container from 'common/src/components/UI/Container';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';

import LogoImage from 'common/src/assets/image/portfolio/logo.png';
import LogoImageAlt from 'common/src/assets/image/portfolio/logo-alt.png';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        MENU_ITEMS {
          label
          path
          offset
        }
      }
    }
  `);

  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="portfolio_navbar">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Logo
            href="/portfolio"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="/portfolio"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={Data.portfolioJson.MENU_ITEMS}
              offset={-70}
            />
            <a className="navbar_button" href="#1">
              <Button {...button} title="LET'S TALK" />
            </a>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#3444f1" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={Data.portfolioJson.MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <a className="navbar_drawer_button" href="#1">
                <Button {...button} title="LET'S TALK" />
              </a>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: '16px',
    pl: '0',
    pr: '0',
    colors: 'primary',
    minHeight: 'auto',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
