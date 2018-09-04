import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const MainContainer = ({children, text}) => {
  return <ContainerWrapper text={text}>{children}</ContainerWrapper>
}

export default MainContainer

MainContainer.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
}

const ContainerWrapper = styled.div`
  width: ${props => (props.text ? '85ch' : '80%')};
  margin: 0 auto;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    width: 100%;
  }
`
