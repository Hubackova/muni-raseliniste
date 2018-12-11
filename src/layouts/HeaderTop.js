import React from 'react'
import styled from 'styled-components'

import czFlag from '../images/cz-icon.png'
import ukFlag from '../images/uk-icon.png'
import Navigation from './Navigation'
import {Consumer} from './Context'

const FlagCZ = () => (
  <Consumer>{({changeToCz}) => <Flag src={czFlag} name="cz" onClick={() => changeToCz()} />}</Consumer>
)
const FlagEN = () => (
  <Consumer>{({changeToEn}) => <Flag src={ukFlag} name="en" onClick={() => changeToEn()} />}</Consumer>
)

const HeaderTop = ({general}) => {
  return (
    <Container>
      <FlagEN />
      <FlagCZ />
      <Navigation general={general}/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: relative;
  min-height: 100px;
  padding-left: 10px;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    min-height: 40px;
    padding-bottom: 10px;
  }
`

const Flag = styled.img`
  height: 48px;
  margin: 2px;
  align-self: flex-end;
  cursor: pointer;
`

export default HeaderTop
