import * as React from "react"
import { Link } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostContent,
  PostTags,
} from "./postCard.style"

const PostCard = ({
  image,
  title,
  description,
  url,
  date,
  tags,
  className,
  imageType,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["post_card"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <PostCardWrapper className={addAllClasses.join(" ")} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            {imageType === "fluid" ? (
              <Img fluid={image} alt="post preview" />
            ) : (
              <Img fixed={image} alt="post preview" />
            )}
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        {date && (
          <PostDate
            dangerouslySetInnerHTML={{
              __html: date,
            }}
            className="post_date"
          />
        )}

        <PostContent className="post_content">
          <PostTitle className="post_title">
            <Link to={url}>{title}</Link>
          </PostTitle>
          {description && (
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className="excerpt"
            />
          )}

          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag, index) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  )
}

PostCard.defaultProps = {
  imageType: "fluid",
}

export default PostCard
