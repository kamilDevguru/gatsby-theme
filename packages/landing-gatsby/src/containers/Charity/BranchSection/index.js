import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Tab, { Panel } from 'common/src/components/Tabs';
import SectionWrapper, { ContentWrapper } from './branchSection.style';

const BranchSection = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        branchData {
          id
          menuItem
          image {
            publicURL
          }
          slogan
          title
          description
          linkUrl
          linkText
        }
      }
    }
  `);

  const title = text => {
    return { __html: text };
  };

  return (
    <SectionWrapper id="branch">
      <Tab active={2}>
        {data.charityJson.branchData.map(item => (
          <Panel title={item.menuItem} key={`tab_key${item.id}`}>
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <Image src={item.image.publicURL} alt="Charity Landing" />
                </div>
              </Fade>
              <div className="content">
                <Heading as="h4" content={item.slogan} />
                <h2 dangerouslySetInnerHTML={title(item.title)} />
                <Text content={item.description} />
                <a className="learn__more-btn" href={item.linkUrl}>
                  <span className="hyphen" />
                  <span className="btn_text">{item.linkText}</span>
                </a>
              </div>
            </ContentWrapper>
          </Panel>
        ))}
      </Tab>
    </SectionWrapper>
  );
};

export default BranchSection;
