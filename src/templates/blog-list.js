import React from "react"
import { graphql } from "gatsby"
import Masonry from "react-masonry-component"
import MasonryCard from "../components/MasonryCard/masonryCard"
import Pagination from "../components/Pagination/pagination"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  BlogPostsWrapper,
  BlogHeroWrapper,
  PostRow,
  PostCol,
} from "./templates.style"

const BlogList = (props) => {
  const { data } = props
  const Posts = data.allContentfulBlog.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/page/1" : `/page/${(currentPage - 1).toString()}`
  const nextPage = `/page/${(currentPage + 1).toString()}`
  const PrevLink = !isFirst && prevPage
  const NextLink = !isLast && nextPage

  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />
      <BlogPostsWrapper>
        <BlogHeroWrapper>
          <div className="academy-hero__item">
            <div className="academy-hero__text">
              <h1>Online Boekhouden</h1>
              <p>
                Leer alles over slim online boekhouden. Bekijk het aanbod van
                online boekhoudprogramma's en vergelijk deze op prijs en kwaliteit.
              </p>
            </div>
            <div className="academy-hero__cta-wrapper">
              <a className="academy-hero__cta" href="#">
                Alle online boekhoudprogramma's
              </a>
            </div>
          </div>
          <div className="academy-hero__item">
            <div className="placeholder" />
          </div>
        </BlogHeroWrapper>
        <PostRow>
          <Masonry className="showcase">
            {Posts.map(({ node }) => {
              return (
                <PostCol key={node.slug}>
                  <MasonryCard
                    title={node.title || node.slug}
                    image={
                      node.cover == null
                        ? null
                        : node.cover.fluid
                    }
                    url={`/blog/${node.slug}`}
                    date={node.date}
                    tags={node.tags.map(tag => tag.tagName)}
                    readTime={node.readTime}
                  />
                </PostCol>
              )
            })}
          </Masonry>
        </PostRow>

        <Pagination
          prevLink={PrevLink}
          nextLink={NextLink}
          currentPage={`${currentPage}`}
          totalPage={`${numPages}`}
        />
      </BlogPostsWrapper>
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlog (
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
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
          date(formatString: "DD [<span>] MMMM [</span>]")
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