
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import Layouts from '../Components/Layouts';
import * as styles from '../styles/project-details.module.css';


function projectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    return (
        <Layouts>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}> 
                    <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}/>
            </div>
        </Layouts>

    )
}

export default projectDetails;

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`