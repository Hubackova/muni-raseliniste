import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import PropTypes from 'prop-types';

import Layout from '../components/layout'
import excursions from '../images/gallery/excursions.jpg'
import organisms from '../images/gallery/organisms.jpg'
import fieldwork from '../images/gallery/fieldwork.jpg'

const GalleryType = ({to, img, heading}) => {
  return (
    <div style={{margin: '1em'}}>
      <Link to={to}>
        <img src={img} alt={heading} height="265px" />
      </Link>
      <div style={{textAlign: 'center'}}>{heading}</div>
    </div>
  )
}

GalleryType.propTypes = {
  heading: PropTypes.string,
  img: PropTypes.string,
  to: PropTypes.string
}

const PhotoGallery = () => {
  return (
    <Layout>
      <Container>
        <GalleryType to="/gallery-excursions/" img={excursions} heading="Exkurze" />
        <GalleryType to="/gallery-organisms/" img={organisms} heading="Rostliny a živočichové" />
        <GalleryType to="/gallery-fieldwork/" img={fieldwork} heading="Terény" />
      </Container>
    </Layout>
  )
}

export default PhotoGallery

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
`
