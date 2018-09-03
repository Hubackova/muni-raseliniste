import React from 'react'
import styled from 'styled-components'

const H2 = ({children}) => {
  return <H2Styled> {children} </H2Styled>
}

const H2Styled = styled.h2`
  color: '#969696';
  border-bottom: 1px solid ${props => props.theme.grey};
`

export default H2
