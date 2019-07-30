import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { saasClassicTheme } from 'common/src/theme/saasClassic';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/SaasClassic/saasClassic.style';

import BannerSection from '../containers/SaasClassic/Banner';
import Navbar from '../containers/SaasClassic/Navbar';
import ServiceSection from '../containers/SaasClassic/Service';
import PricingSection from '../containers/SaasClassic/Pricing';
import PartnerSection from '../containers/SaasClassic/Partner';
import TrialSection from '../containers/SaasClassic/Trial';
import FeatureSection from '../containers/SaasClassic/Feature';
import UpdateScreen from '../containers/SaasClassic/UpdateScreen';
import TestimonialSection from '../containers/SaasClassic/Testimonial';
import Newsletter from '../containers/SaasClassic/Newsletter';
import Footer from '../containers/SaasClassic/Footer';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasClassicTheme}>
      <Fragment>
        <SEO title="SaaS Classic | A react next landing page" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ServiceSection />
          <UpdateScreen />
          <FeatureSection />
          <PartnerSection />
          <PricingSection />
          <TestimonialSection />
          <TrialSection />
          <Newsletter />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
