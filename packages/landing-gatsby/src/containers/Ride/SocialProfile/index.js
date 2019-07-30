import React from 'react';
import { SocialProfileWrapper, SocialProfileItem } from './socialProfile.style';

const SocialProfile = ({ items, className }) => {
  const addAllClasses = ['social_profiles'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <SocialProfileWrapper className={addAllClasses.join(' ')}>
      {items.map((item, index) => (
        <SocialProfileItem
          key={`social-item-${index}`}
          className="social_profile_item"
        >
          <a href={item.url || '#'}>
            <i className={item.icon}></i>
          </a>
        </SocialProfileItem>
      ))}
    </SocialProfileWrapper>
  );
};

export default SocialProfile;
