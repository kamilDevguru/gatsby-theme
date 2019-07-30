import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/src/theme/charity';
import { ResetCSS } from 'common/src/assets/css/style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Charity/Navbar';
import DrawerSection from '../containers/Charity/DrawerSection';
import BannerSection from '../containers/Charity/BannerSection';
import FeatureSection from '../containers/Charity/FeatureSection';
import BranchSection from '../containers/Charity/BranchSection';
import WorkSection from '../containers/Charity/WorkSection';
import MilestoneBlock from '../containers/Charity/MilestoneBlock';
import HumanityBlock from '../containers/Charity/HumanityBlock';
import PromotionBlock from '../containers/Charity/PromotionBlock';
import DonateSection from '../containers/Charity/DonateSection';
import MapSection from '../containers/Charity/MapSection';
import FundraiserSection from '../containers/Charity/FundraiserSection';
import BlogSection from '../containers/Charity/BlogSection';
import ClientBlock from '../containers/Charity/ClientBlock';
import Footer from '../containers/Charity/Footer';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from '../containers/Charity/charity.style';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <SEO title="Charity" />
        <ResetCSS />
        <GlobalStyle />
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            <BannerSection />
            <FeatureSection />
            <BranchSection />
            <WorkSection />
            <MilestoneBlock />
            <HumanityBlock />
            <PromotionBlock />
            <DonateSection />
            <MapSection />
            <FundraiserSection />
            <BlogSection />
            <ClientBlock />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
