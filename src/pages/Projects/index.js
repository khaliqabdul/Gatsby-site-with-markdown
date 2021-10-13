import { graphql, Link } from 'gatsby';
import React from 'react'
import Layouts from '../../Components/Layouts'
import * as styles from '../../styles/projects.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function PortFolio({ data }) {
  const Projects = data.allMarkdownRemark.nodes
  const contact = data.site.siteMetadata.contact
  //console.log(data)
  return (
    <Layouts>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I have created</h3>
        <br />
        <hr />
        <div className={styles.projects}>
          {Projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what yoy see? Email me at {contact} for a quote!</p>
      </div>
    </Layouts>
  )
}
// Query
export const query = graphql`
  query ProjectPage {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
`