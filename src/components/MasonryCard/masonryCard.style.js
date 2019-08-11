import styled from 'styled-components';
import { themeGet } from 'styled-system';

export const MasonryCardWrapper = styled.div`
  position: relative;
  &:hover {
    .post_preview {
      a {
        transform: scale(1.05);
      }
    }
  }
`;

export const PostPreview = styled.div`
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  img {
    border-radius: 3px;
  }
  a {
    display: block;
    transition: 0.25s ease-in-out;
  }
`;

export const PostDetails = styled.div``;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const PostDate = styled.div`
  font-size: 13px;
  color: ${themeGet('colors.lightTextColor', '#757575')};
  @media (max-width: 990px) {
    font-size: 12px;
  }
`;

export const ReadingTime = styled.div`
  font-size: 13px;
  color: ${themeGet('colors.lightTextColor', '#757575')};
  position: relative;
  padding-left: 7px;
  margin-left: 5px;
  @media (max-width: 990px) {
    font-size: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    display: block;
    background: ${themeGet('colors.lightTextColor', '#757575')};
  }
`;

export const ReadMore = styled.div`
  a {
    font-size: 15px;
    color: ${themeGet('colors.lightTextColor', '#757575')};
    display: inline-flex;
    align-items: center;
    transition: 0.15s ease-in-out;
    @media (max-width: 990px) {
      font-size: 14px;
    }
    &:hover {
      color: ${themeGet('colors.textColor', '#292929')};
      text-decoration: underline;
    }
    svg {
      margin-left: 5px;
      font-size: 14px;
      margin-top: 1px;
    }
  }
`;

export const PostTitle = styled.h2`
  font-size: 21px;
  font-weight: 700;
  color: ${themeGet('colors.textColor', '#292929')};
  line-height: 2;
  margin-bottom: 15px;
  a {
    color: ${themeGet('colors.textColor', '#292929')};
  }
  @media (max-width: 1200px) {
    font-size: 19px;
  }
  @media (max-width: 1024px) {
    font-size: 17px;
  }
  @media (max-width: 990px) {
    font-size: 15px;
  }
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    display: none;
  }

  a {
    display: block;
    margin-left: 20px;
    font-size: 13px;
    font-weight: 400;
    color: ${themeGet('primary', '#D10068')};
    @media (max-width: 990px) {
      font-size: 13px;
      margin-left: 25px;
    }
  }
`;
