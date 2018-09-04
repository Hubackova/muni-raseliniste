import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const MainContainer = ({children, isText}) => {
  return <ContainerWrapper isText={isText}>{children}</ContainerWrapper>
}

export default MainContainer

MainContainer.propTypes = {
  isText: PropTypes.bool,
  children: PropTypes.node
}

const ContainerWrapper = styled.div`
  width: ${props => (props.isText ? '85ch' : '80%')};
  margin: 0 auto;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    width: 100%;
  }
`
