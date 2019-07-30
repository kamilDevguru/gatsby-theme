import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'reusecore/src/elements/Text';
import CopyrightWrapper from './copyrightSection.style';

const CopyrightSection = () => {
  const Data = useStaticQuery(graphql`
    query {
      agencyJson {
        social_profile {
          id
          icon
          link
        }
      }
    }
  `);

  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {Data.agencyJson.social_profile.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <a href={profile.link} aira-label={profile.icon}>
              <i className={profile.icon} />
            </a>
          </li>
        ))}
      </ul>
      <Text content="Copyrights 2019 @RedQ Inc" />
    </CopyrightWrapper>
  );
};

export default CopyrightSection;
