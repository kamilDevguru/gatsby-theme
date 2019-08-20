import React from 'react';
import Sticky from 'react-stickynode';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from '../common/src/theme/saas';

import { ResetCSS } from '../common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import Navbar from '../containers/Saas/Navbar';
import Footer from '../containers/Saas/Footer';
import { DrawerProvider } from '../common/src/contexts/DrawerContext';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={saasTheme}>
        <main>
          <ResetCSS />
          <GlobalStyle />
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            {children}
            <Footer />
          </ContentWrapper>
        </main>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
