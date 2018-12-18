import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import excursions from "../images/gallery/excursions.jpg";
import organisms from "../images/gallery/organisms.jpg";
import fieldwork from "../images/gallery/fieldwork.jpg";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";

const GalleryType = ({ to, img, heading }) => {
  return (
    <div style={{ margin: "1em" }}>
      <Link to={to}>
        <img src={img} alt={heading} height="265px" />
      </Link>
      <div style={{ textAlign: "center" }}>{heading}</div>
    </div>
  );
};

GalleryType.propTypes = {
  heading: PropTypes.string,
  img: PropTypes.string,
  to: PropTypes.string
};

const PhotoGallery = () => {
  return (
    <Consumer>
      {({ int }) => (
        <Container>
          <GalleryType
            to="/gallery-excursions/"
            img={excursions}
            heading={int === "en" ? en.gallery.excursions : cz.gallery.excursions}
          />
          <GalleryType
            to="/gallery-organisms/"
            img={organisms}
            heading={int === "en" ? en.gallery.plantsAndAnimals : cz.gallery.plantsAndAnimals}
          />
          <GalleryType
            to="/gallery-fieldwork/"
            img={fieldwork}
            heading={int === "en" ? en.gallery.terrains : cz.gallery.terrains}
          />
        </Container>
      )}
    </Consumer>
  );
};

export default PhotoGallery;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
`;
