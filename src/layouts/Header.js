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
      query {
        images: allFile(filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "homepage"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        smallimages: allFile(filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "smallhomepage"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imgs = data.images.edges.map(i => i.node.childImageSharp.fluid)
      const sImgs = data.smallimages.edges.map(i => i.node.childImageSharp.fluid)
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
  font-family: "Lucida Sans Unicode", sans-serif;
  color: ${props => props.theme.white};
  background-color: inherit;
  margin: 0;
  @media (max-width: 600px) {
    margin: 0;
  }
`

const LogoTextSmall = styled.h2`
  color: ${props => props.theme.white};
  font-family: "Lucida Sans Unicode", sans-serif;
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
