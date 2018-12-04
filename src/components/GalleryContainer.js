import React from 'react'
import PropTypes from 'prop-types';

import Layout from '../layouts'
import MainContainer from '../components/MainContainer'
import {H2, StyledLink} from '../components/atoms'

const GalleryContainer = ({children, heading}) => {
  return (
      <MainContainer>
        <H2>
          <StyledLink to="/gallery/">
            <i className="fa fa-arrow-left" />
          </StyledLink>
          {heading}
        </H2>
        {children}
      </MainContainer>
  )
}

export default GalleryContainer

GalleryContainer.propTypes = {
    children: PropTypes.node,
    heading: PropTypes.string
  }