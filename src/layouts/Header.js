import React, {Fragment} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

import ImgSlider from './ImgSlider'
import HeaderTop from './HeaderTop'

import logo from '../images/logo2.png'
import mainLogo from '../images/mainLogo.png'

const Header = ({isIndex, generalData}) => (
  <StaticQuery
    query={query}
    render={data => {
      const imgs = [
        data.image1.childImageSharp.sizes,
        data.image2.childImageSharp.sizes,
        data.image3.childImageSharp.sizes,
        data.image4.childImageSharp.sizes,
        data.image5.childImageSharp.sizes,
        data.image6.childImageSharp.sizes,
        data.image7.childImageSharp.sizes,
        data.image8.childImageSharp.sizes,
        data.image9.childImageSharp.sizes,
        data.image10.childImageSharp.sizes
      ]
      const sImgs = [
        data.simage1.childImageSharp.sizes,
        data.simage2.childImageSharp.sizes,
        data.simage3.childImageSharp.sizes,
        data.simage4.childImageSharp.sizes,
        data.simage5.childImageSharp.sizes,
        data.simage6.childImageSharp.sizes,
        data.simage7.childImageSharp.sizes,
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

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export const query = graphql`
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
`

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
