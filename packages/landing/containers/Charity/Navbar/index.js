import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from 'reusecore/src/elements/UI/Logo';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/src/assets/image/charity/logo.svg';
import heartImage from 'common/src/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Logo
          href="/charity"
          logoSrc={logoImage}
          title="Charity React Next Landing"
        />
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="#donate" offset={81}>
            Help us help them
          </AnchorLink>
          <Button>
            <span className="text">SPREAD</span>
            <Image src={heartImage} alt="Charity Landing" />
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
