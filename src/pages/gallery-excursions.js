import React from "react";
import Gallery from "react-grid-gallery";
import PropTypes from "prop-types";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";
import { graphql } from "gatsby";
import GalleryContainer from "../components/GalleryContainer";

const PhotoGallery = ({ data }) => {
  const imgs = data.images.edges.map(i => i.node.childImageSharp.fluid);
  const PHOTO_SET = imgs.map(i => {
    const caption = i.src
      .split("/")
      .pop()
      .slice(0, -4);
    return { src: i.src, thumbnail: i.src, caption: caption };
  });
  return (
    <Consumer>
      {({ int }) => (
        <GalleryContainer
          heading={int === "en" ? en.gallery.excursions : cz.gallery.excursions}
        >
          <Gallery images={PHOTO_SET} />
        </GalleryContainer>
      )}
    </Consumer>
  );
};

export default PhotoGallery;

PhotoGallery.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query {
    images: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)/" }
        relativeDirectory: { eq: "gallery-excursions" }
      }
    ) {
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
`;