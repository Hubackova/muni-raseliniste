import React, {Fragment} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

import ImgSlider from './ImgSlider'
import HeaderTop from './HeaderTop'

import logo from '../images/logo2.png'
import mainLogo from '../images/mainLogo.png'

//query must be inline!!! not as a variable!
const Header = ({isIndex, generalData}) => (
  <StaticQuery
    query={graphql`
      fragment fluidImage on File {
        childImageSharp {
          fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
        }
      }
      query {
        image1: file(relativePath: {eq: "homepage/hp01.jpg"}) {
          ...fluidImage
        }
        image2: file(relativePath: {eq: "homepage/hp02.jpg"}) {
          ...fluidImage
        }
        image3: file(relativePath: {eq: "homepage/hp03.jpg"}) {
          ...fluidImage
        }
        image4: file(relativePath: {eq: "homepage/hp04.jpg"}) {
          ...fluidImage
        }
        image5: file(relativePath: {eq: "homepage/hp05.jpg"}) {
          ...fluidImage
        }
        image6: file(relativePath: {eq: "homepage/hp06.jpg"}) {
          ...fluidImage
        }
        image7: file(relativePath: {eq: "homepage/hp07.jpg"}) {
          ...fluidImage
        }
        image8: file(relativePath: {eq: "homepage/hp08.jpg"}) {
          ...fluidImage
        }
        image9: file(relativePath: {eq: "homepage/hp09.jpg"}) {
          ...fluidImage
        }
        image10: file(relativePath: {eq: "homepage/hp10.jpg"}) {
          ...fluidImage
        }
        simage1: file(relativePath: {eq: "smallhomepage/shp01small.jpg"}) {
          ...fluidImage
        }
        simage2: file(relativePath: {eq: "smallhomepage/shp02small.jpg"}) {
          ...fluidImage
        }
        simage3: file(relativePath: {eq: "smallhomepage/shp03small.jpg"}) {
          ...fluidImage
        }
        simage4: file(relativePath: {eq: "smallhomepage/shp04small.jpg"}) {
          ...fluidImage
        }
        simage5: file(relativePath: {eq: "smallhomepage/shp05small.jpg"}) {
          ...fluidImage
        }
        simage6: file(relativePath: {eq: "smallhomepage/shp06small.jpg"}) {
          ...fluidImage
        }
        simage7: file(relativePath: {eq: "smallhomepage/shp07small.jpg"}) {
          ...fluidImage
        }
      }
    `}
    render={data => {
      const imgs = [
        data.image1.childImageSharp.fluid,
        data.image2.childImageSharp.fluid,
        data.image3.childImageSharp.fluid,
        data.image4.childImageSharp.fluid,
        data.image5.childImageSharp.fluid,
        data.image6.childImageSharp.fluid,
        data.image7.childImageSharp.fluid,
        data.image8.childImageSharp.fluid,
        data.image9.childImageSharp.fluid,
        data.image10.childImageSharp.fluid
      ]
      const sImgs = [
        data.simage1.childImageSharp.fluid,
        data.simage2.childImageSharp.fluid,
        data.simage3.childImageSharp.fluid,
        data.simage4.childImageSharp.fluid,
        data.simage5.childImageSharp.fluid,
        data.simage6.childImageSharp.fluid,
        data.simage7.childImageSharp.fluid
      ]
      return (
        <Fragment>
          <HeaderTop generalData={generalData} isIndex={isIndex} />
          <SubContainer>
            <LeftSide>
              <LeftSideWrapper>
                <MainLogo src={mainLogo} alt="mainLogo" />
              </LeftSideWrapper>
              <LeftSideWrapper>
                <LogoText>
                  {generalData.mainHeader}
                  <br />
                </LogoText>
                <LogoTextSmall>{generalData.muni}</LogoTextSmall>
              </LeftSideWrapper>
              <LeftSideWrapper>
                <Logo src={logo} alt="logo" />
              </LeftSideWrapper>
            </LeftSide>
            {isIndex && (
              <RightSide>
                <ImgSlider imgs={imgs} />
              </RightSide>
            )}
            {!isIndex && (
              <RightSide>
                <ImgSlider imgs={sImgs} />
              </RightSide>
            )}
          </SubContainer>
        </Fragment>
      )
    }}
  />
)

export default Header

Header.propTypes = {
  language: PropTypes.object,
  isIndex: PropTypes.bool,
  generalData: PropTypes.object
}

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  padding-bottom: 2em;
`

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 285px;
  background-image: linear-gradient(110deg, #578724 33.33%, #51811d 33.33%, #51811d 66.66%, #3e7404 66.66%);
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
  @media (max-width: 1400px) {
    width: 100%;
  }
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
