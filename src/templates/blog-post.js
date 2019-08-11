import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard/postCard"
import PostDetails from "../components/PostDetails/postDetails"
import {
  BlogPostDetailsWrapper,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
  BlogPostFooter,
  PostTags,
  BlogPostComment,
} from "./templates.style"

const BlogPostTemplate = (props) => {
  const post = props.data.contentfulBlog
  const { edges } = props.data.allContentfulBlog
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.content.content || post.excerpt}
      />
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.title}
          date={post.date}
          preview={
            post.cover == null
              ? null
              : post.cover.fluid
          }
          description={post.html}
          imagePosition="left"
          tags={post.tags.map(tag => tag.tagName)}
        />

        <BlogPostFooter
          className={post.cover == null ? "center" : ""}
        >
          {post.tags == null ? null : (
            <PostTags className="post_tags">
              {post.tags.map(tag => tag.tagName).map((tag, index) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
        </BlogPostFooter>
        <BlogPostComment
          className={post.cover == null ? "center" : ""}
        >
        </BlogPostComment>
      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }) => (
              <RelatedPostItem key={node.slug}>
                <PostCard
                  title={node.title || node.slug}
                  url={node.slug}
                  image={
                    node.cover == null
                      ? null
                      : node.cover.fluid
                  }
                  tags={node.tags.map(tag => tag.tagName)}
                />
              </RelatedPostItem>
            ))}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlog(
      slug: { eq: $slug }
      node_locale: { eq: "en-US" }
    ) {
        node_locale
        content {
          content
        }
        title
        tags {
          tagName
        }
        date(formatString: "DD MMMM")
        cover {
          fluid(maxWidth: 1500){
            ...GatsbyContentfulFluid_withWebp
          }
        }
        slug
        readTime
      }

    allContentfulBlog (
      sort: { fields: [date], order: DESC }
      limit: 3
      filter: {
        slug: { eq: $slug }
        node_locale: { eq: "en-US"}
      }
    ) {
      edges {
        node {
          node_locale
          content {
            content
          }
          title
          tags {
            tagName
          }
          date(formatString: "DD MMMM")
          cover {
            fluid(maxWidth: 1500){
              ...GatsbyContentfulFluid_withWebp
            }
          }
          slug
          readTime
        }
      }
    }
  }`

