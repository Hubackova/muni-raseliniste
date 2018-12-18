import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image"
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";

const GalleryType = ({ to, img, heading }) => {
  return (
    <div style={{ margin: "1em" }}>
      <Link to={to}>
        <Img fixed={img} alt={heading} height="265px" />
      </Link>
      <div style={{ textAlign: "center" }}>{heading}</div>
    </div>
  );
};

GalleryType.propTypes = {
  heading: PropTypes.string,
  img: PropTypes.object,
  to: PropTypes.string
};

const PhotoGallery = ({data}) => {
  return (
    <Consumer>
      {({ int }) => (
        <Container>
          <GalleryType
            to="/gallery-excursions/"
            img={data.excursions.childImageSharp.fixed}
            heading={
              int === "en" ? en.gallery.excursions : cz.gallery.excursions
            }
          />
          <GalleryType
            to="/gallery-organisms/"
            img={data.organisms.childImageSharp.fixed}
            heading={
              int === "en"
                ? en.gallery.plantsAndAnimals
                : cz.gallery.plantsAndAnimals
            }
          />
          <GalleryType
            to="/gallery-fieldwork/"
            img={data.fieldwork.childImageSharp.fixed}
            heading={
              int === "en" ? en.gallery.fieldworks : cz.gallery.fieldworks
            }
          />
        </Container>
      )}
    </Consumer>
  );
};

export default PhotoGallery;

PhotoGallery.propTypes = {
  data: PropTypes.object
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
`;

export const query = graphql`
query {
  excursions: file(relativePath: { eq: "gallery/excursions.jpg" }) {
    childImageSharp {
      fixed(width: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fieldwork: file(relativePath: { eq: "gallery/fieldwork.jpg" }) {
    childImageSharp {
      fixed(width: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  organisms: file(relativePath: { eq: "gallery/organisms.jpg" }) {
    childImageSharp {
      fixed(width: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;
