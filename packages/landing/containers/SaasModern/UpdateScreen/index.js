import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import TiltShape from '../TiltShape';

import SectionWrapper from './updateScreen.style';
import { SCREENSHOTS } from 'common/src/data/SaasModern';

const UpdateScreen = ({ secTitleWrapper, secText, secHeading }) => {
  return (
    <SectionWrapper>
      <TiltShape />
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="UPDATE" />
          <Heading {...secHeading} content="Meet our new updated screen" />
        </Box>
        <Tabs
          renderTabBar={() => <ScrollableInkTabBar />}
          renderTabContent={() => <TabContent animated={false} />}
          className="update-screen-tab"
        >
          {SCREENSHOTS.map((item, index) => (
            <TabPane
              forceRender={true}
              tab={
                <>
                  <Icon icon={item.icon} size={24} />
                  {item.title}
                </>
              }
              key={index + 1}
            >
              <Image src={item.image} alt={`screenshot-${index + 1}`} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#fff',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
};

export default UpdateScreen;
