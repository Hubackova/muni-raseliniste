import React from 'react'
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import Img from "gatsby-image"

const Images = ({imgs}) => {
  const images = imgs.map((i, index) => <Img key={index} fluid={i}/>)
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={7000}>
      {images}
    </Carousel>
  )
}

export default Images

Images.propTypes = {
  imgs: PropTypes.array
}

