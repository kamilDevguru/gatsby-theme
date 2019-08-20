import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import NavbarWrapper from '../../../reusecore/src/elements/Navbar';
import Drawer from '../../../reusecore/src/elements/Drawer';
import Logo from '../../../reusecore/src/elements/UI/Logo';
import Box from '../../../reusecore/src/elements/Box';
import HamburgMenu from '../../../common/src/components/HamburgMenu';
import Container from '../../../common/src/components/UI/Container';
import { DrawerContext } from '../../../common/src/contexts/DrawerContext';
import ScrollSpyMenu from '../../../common/src/components/ScrollSpyMenu';

import './style.css';
import LogoImage from '../../../common/src/assets/image/saas/logo.png';

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper }) => {
  const Data = useStaticQuery(graphql`
    query {
      allContentfulNav {
        edges {
          node {
            module {
              caption
              link
              pageLink
            }
          }
        }
      }
    }
  `);

  const menuItems = Data.allContentfulNav.edges[0].node.module;
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const path = typeof document !== 'undefined' ? document.location.pathname : '';

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={LogoImage}
            title="Agency"
            logoStyle={logoStyle}
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={menuItems}
              offset={-70}
            />
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#eb4d4b" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={menuItems}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
          {path.includes('page') && (
            <a className="academy-nav" href="/login">Login</a>
          )}
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
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: [
      'space-between',
      'space-between',
      'space-between',
      'flex-start',
    ],
    width: '100%',
  },
  logoStyle: {
    maxWidth: '200px',
    mr: [0, 0, 0, '166px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
