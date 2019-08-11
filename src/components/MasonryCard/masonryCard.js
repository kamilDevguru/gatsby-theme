import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Img from 'gatsby-image';
import {
  MasonryCardWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  PostTags,
  PostMeta,
  ReadingTime,
  ReadMore,
} from './masonryCard.style';
import { IoIosArrowForward } from 'react-icons/io';

const MasonryCard = ({
  image,
  title,
  url,
  date,
  tags,
  className,
  imageType,
  readTime,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['mesonry_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <MasonryCardWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            {imageType === 'fluid' ? (
              <Img fluid={image} alt="post preview" />
            ) : (
              <Img fixed={image} alt="post preview" />
            )}
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        <PostMeta>
          {date && (
            <PostDate
              dangerouslySetInnerHTML={{
                __html: date,
              }}
              className="post_date"
            />
          )}
          {readTime && <ReadingTime>{readTime}</ReadingTime>}
          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag, index) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
        </PostMeta>

        <PostTitle className="post_title">
          <Link to={url}>{title}</Link>
        </PostTitle>
        <ReadMore>
          <Link to={url}>
            Read More <IoIosArrowForward />
          </Link>
        </ReadMore>
      </PostDetails>
    </MasonryCardWrapper>
  );
};

MasonryCard.defaultProps = {
  imageType: 'fluid',
};

export default MasonryCard;
