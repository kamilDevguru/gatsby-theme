import React from 'react';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import BlogPost from 'common/src/components/BlogPost';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './featureSection.style';

import { featureData } from 'common/src/data/Charity';

const FeatureSection = () => {
  const { title, slogan, features } = featureData;

  return (
    <SectionWrapper id="feature">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {features.map(item => (
            <BlogPost
              key={`option_key${item.id}`}
              thumbUrl={item.icon}
              title={item.title}
              excerpt={item.description}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureSection;
