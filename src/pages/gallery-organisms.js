import React from 'react'
import Gallery from 'react-grid-gallery'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import GalleryContainer from '../components/GalleryContainer'

const PhotoGallery = ({data}) => {
  const imgs = data.images.edges.map(i => i.node.childImageSharp.fluid)
  const PHOTO_SET = imgs.map(i => {
    const caption = i.src.split('/').pop().slice(0,-4);
    return ({src: i.src, thumbnail: i.src, caption: caption})
  })
  
  return (
    <GalleryContainer heading="Rostliny a živočichové">
        <Gallery images={PHOTO_SET} />
    </GalleryContainer>
  )
}

export default PhotoGallery

PhotoGallery.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query {
    images: allFile(filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "gallery-bio"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`