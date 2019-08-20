import React from "react"
import { graphql } from "gatsby"

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
} from "./templates.style"

const BlogPostTemplate = (props) => {
  const post = props.data.contentfulBlog
  const { edges } = props.data.allContentfulBlog

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.content.content}
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
          description={post.content.content}
          tags={post.tags.map(tag => tag.tagName)}
          author={{
            name: post.authorName,
            socialName: post.authorTwitterName,
            socialLink: post.authorTwitterLink,
            photo: post.authorPhoto.fluid
          }}
          readTime={post.readTime}
        />
      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }) => (
              <RelatedPostItem key={node.slug}>
                <PostCard
                  title={node.title || node.slug}
                  url={`/blog/${node.slug}`}
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
        date(formatString: "DD MMMM, YYYY")
        cover {
          fluid(maxWidth: 1500){
            ...GatsbyContentfulFluid_withWebp
          }
        }
        slug
        readTime
        authorName
        authorTwitterLink
        authorTwitterName
        authorPhoto {
          fluid(maxWidth: 500){
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }

    allContentfulBlog (
      sort: { fields: [date], order: DESC }
      limit: 3
      filter: {
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

