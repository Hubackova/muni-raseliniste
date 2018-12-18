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
      .slice(0, -4)
      .substring(2);
    //const finalCaption = ["m-", "t-", "v-"].some(word => caption.includes(word))
    return { src: i.src, thumbnail: i.src, caption: caption };
  });
  PHOTO_SET.sort((a, b) => a.caption.localeCompare(b.caption));
  return (
    <Consumer>
      {({ int }) => (
        <GalleryContainer
          heading={
            int === "en"
              ? en.gallery.plantsAndAnimals
              : cz.gallery.plantsAndAnimals
          }
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
        relativeDirectory: { eq: "gallery-bio" }
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
