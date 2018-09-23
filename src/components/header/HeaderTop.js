import React from 'react'
import styled from 'styled-components'

import czFlag from '../../images/cz-icon.png'
import ukFlag from '../../images/uk-icon.png'
import Navigation from './Navigation'
import {LocalizationConsumer} from '../localization.context'

const FlagCZ = () => (
  <LocalizationConsumer>{({changeToCz}) => <Flag src={czFlag} onClick={() => changeToCz()} />}</LocalizationConsumer>
)
const FlagEN = () => (
  <LocalizationConsumer>{({changeToEn}) => <Flag src={ukFlag} onClick={() => changeToEn()} />}</LocalizationConsumer>
)

const HeaderTop = () => {
  return (
    <Container>
      <FlagEN />
      <FlagCZ />
      <Navigation />
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
  @media (min-width: ${props => props.theme.mediumDevice}) {
    transform: skewY(-1deg);
    transform-origin: top right;
  }
`

const Flag = styled.img`
  height: 48px;
  margin: 2px;
  align-self: flex-end;
  cursor: pointer;
`

export default HeaderTop
