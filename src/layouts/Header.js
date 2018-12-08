import React, {Fragment} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import ImgSlider from './ImgSlider'
import HeaderTop from './HeaderTop'

import logo from '../images/logo2.png'
import mainLogo from '../images/mainLogo.png'

import hp01 from '../images/homepage/hp01.jpg'
import hp02 from '../images/homepage/hp02.jpg'
import hp03 from '../images/homepage/hp03.jpg'
import hp04 from '../images/homepage/hp04.jpg'
import hp05 from '../images/homepage/hp05.jpg'
import hp06 from '../images/homepage/hp06.jpg'
import hp07 from '../images/homepage/hp07.jpg'
import hp08 from '../images/homepage/hp08.jpg'
import hp09 from '../images/homepage/hp09.jpg'
import hp10 from '../images/homepage/hp10.jpg'
import shp01 from '../images/smallhomepage/shp01small.jpg'
import shp02 from '../images/smallhomepage/shp02small.jpg'
import shp03 from '../images/smallhomepage/shp03small.jpg'
import shp04 from '../images/smallhomepage/shp04small.jpg'
import shp05 from '../images/smallhomepage/shp05small.jpg'
import shp06 from '../images/smallhomepage/shp06small.jpg'
import shp07 from '../images/smallhomepage/shp07small.jpg'

const imgs = [hp01, hp02, hp03, hp04, hp05, hp06, hp07, hp08, hp09, hp10] //do props
const sImgs = [shp01, shp02, shp03, shp04, shp05, shp06, shp07] //do props

const Header = ({isIndex, data}) => {
  return (
    <Fragment>
      <HeaderTop data={data}/>
      <SubContainer>
        <LeftSide>
          <LeftSideWrapper>
            <MainLogo src={mainLogo} alt="mainLogo" />
          </LeftSideWrapper>
          <LeftSideWrapper>
            <LogoText>
              {data.mainHeader}
              <br />
            </LogoText>
            <LogoTextSmall>{data.muni}</LogoTextSmall>
          </LeftSideWrapper>
          <LeftSideWrapper>
            <Logo src={logo} alt="logo" />
          </LeftSideWrapper>
        </LeftSide>
        {isIndex && (
          <RightSide>
            <ImgSlider imgs={imgs}/>
          </RightSide>
        )}
        {!isIndex && (
          <RightSide>
            <ImgSlider imgs={sImgs}/>
          </RightSide>
        )}
      </SubContainer>
    </Fragment>
  )
}

export default Header

Header.propTypes = {
  language: PropTypes.object,
  isIndex: PropTypes.bool
}

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${props => props.theme.extraLargeDevice}) {
    flex-direction: column;
  }
  padding-bottom: 2em;
`

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(110deg, #578724 33.33%, #51811D 33.33%, #51811D 66.66%, #3E7404 66.66%);
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
  `

const LeftSideWrapper = styled.div`
  justify-content: center;
  text-align: center;
`

const RightSide = styled.div`
  flex: 1;
`

const LogoText = styled.h1`
  font-family: Lucida Sans Unicode;
  color: ${props => props.theme.white};
  background-color: inherit;
  margin: 0;
  @media (max-width: 600px) {
    margin: 0;
  }
`

const LogoTextSmall = styled.h2`
  color: ${props => props.theme.white};
  font-family: Lucida Sans Unicode;
  font-weight: normal;
  background-color: inherit;
  margin: 0;
  @media (max-width: 600px) {
    margin: 0 0 30px 0;
  }
`

const Logo = styled.img`
  max-width: 7em;
  margin-left: 10px;
  @media (max-width: 670px) {
    display: none;
  }
  margin-right: 2em;
`

const MainLogo = styled.img`
  max-width: 8em;
`
