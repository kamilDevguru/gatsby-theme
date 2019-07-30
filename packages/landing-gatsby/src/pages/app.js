import React, { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import {
  GlobalStyle,
  AppWrapper,
  ConditionWrapper,
} from '../containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import DomainSection from '../containers/App/Banner';
import FeatureSection from '../containers/App/FeatureSection';
import ControllSection from '../containers/App/Control';
import TestimonialSection from '../containers/App/Testimonial';
import PartnerHistory from '../containers/App/PartnerHistory';
import PaymentSection from '../containers/App/PaymentSection';
import Footer from '../containers/App/Footer';
import FeatureSlider from '../containers/App/FeatureSlider';
import FeatureSliderTwo from '../containers/App/FeatureSliderTwo';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default () => {
  const size = process.browser && useWindowSize();
  const innerWidth = process.browser && size.innerWidth;

  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="App | A react next landing page" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <DomainSection />
          <FeatureSection />
          <ControllSection />
          <ConditionWrapper id="keyfeature">
            {innerWidth > 1100 ? <FeatureSlider /> : <FeatureSliderTwo />}
          </ConditionWrapper>
          <PartnerHistory />
          <PaymentSection />
          <TestimonialSection />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
