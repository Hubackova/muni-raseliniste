import React from 'react'

import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

// const imgs = [hp01, hp02, hp03, hp04, hp05, hp06, hp07, hp08, hp09, hp10] //do props
// todo find another component for img slideshow
const Images = ({imgs}) => {
  const images = imgs.map((i, index) => <img key={index} src={i} />)
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
      {images}
    </Carousel>
  )
}

export default Images

Images.propTypes = {
  imgs: PropTypes.array
}

