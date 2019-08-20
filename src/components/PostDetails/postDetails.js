import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import _ from "lodash"
import { Row, Col } from "react-bootstrap"
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from "./postDetails.style"

const PostDetails = ({
  title,
  date,
  preview,
  description,
  tags,
  ...props
}) => {
  return (
    <PostDetailsWrapper {...props} className="post_details">
      {preview === null ? null : (
        <PostPreview className="post_preview">
          <Row>
            <Col md={5} sm={12}className="post-header__text">
              <p className="post-header__meta">
                MARKETING | 7 MIN READ
              </p>
              <h1 className="post-header__title">
                {title}
              </h1>
              <Row className="post-author-tag">
                <Col xs={4} className="post-author-tag__image-container">
                  <a href="#">
                    <img src="" alt="author" />
                  </a>
                </Col>
                <Col xs={8} className="post-author-tag__text">
                  <p>
                    Written by
                    <a href="#">Eddie Shleyner</a>
                  </p>
                  <a href="https://twitter.com/VeryGoodCopy" className="post-author-tag__twitter">
                    @VeryGoodCopy
                  </a>
                </Col>
              </Row>
            </Col>
            <Col md={7} sm={12} className="post-header__image">
              <Img fluid={preview} alt={title} />
            </Col>
          </Row>
        </PostPreview>
      )}
      <PostDescriptionWrapper className="post_des_wrapper">
        <PostDate>{date}</PostDate>
        <PostDescription
          dangerouslySetInnerHTML={{ __html: description }}
          className="post_des"
        />
        {tags === null ? null : (
          <PostTags>
            {tags.map((tag, index) => (
              <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  )
}

PostDetails.defaultProps = {
  imagePosition: "top",
}

export default PostDetails
