import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'
import twitter from '../images/twitter.png'

const FooterContent = ({footer}) => {
  return (
    <Container>
      <FooterSection background="rgba(150,150,150, 0.9)">
        <FooterHeader>MUNI</FooterHeader>
        <A  target="_blank" rel="noopener noreferrer" href="http://botzool.sci.muni.cz">{footer.botzool}</A>
        <A  target="_blank" rel="noopener noreferrer" href="http://www.sci.muni.cz/">{footer.faculty}</A>
        <A  target="_blank" rel="noopener noreferrer" href="https://www.muni.cz/">{footer.university}</A>
      </FooterSection>
      <FooterSection background="rgba(150,150,150, 0.8)">
        <FooterHeader>{footer.postalAddressHeading}</FooterHeader>
        {footer.postalAddress}
      </FooterSection>
      <FooterSection background="rgba(150,150,150, 0.7)">
        <FooterHeader>{footer.physicalAddressHeading}</FooterHeader>
        {footer.physicalAddress}
      </FooterSection>
      <FooterSection background="rgba(150,150,150, 0.6)">
        <FooterHeader>{footer.links}</FooterHeader>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/botzool">
          <Img src={facebook} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCpUU624DlUwOewM_KfG1rpA/videos">
          <Img src={youtube} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BotZool_MUNI">
          <Img src={twitter} />
        </a>
      </FooterSection>
    </Container>
  )
}

export default FooterContent

FooterContent.propTypes = {
  language: PropTypes.object,
  footer: PropTypes.object
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1em auto 0;
  height: 100%;
`

const FooterSection = styled.div`
  flex: 1;
  color: ${props => props.theme.white};
  background-color: ${props => props.background};
  padding: 1em;
  text-align: center;
  line-height: 1.2;
  min-width: 255px;
  font-size: 16px;
`

const A = styled.a`
  color: ${props => props.theme.white};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`

const Img = styled.img`
  width: 3.8em;
  padding: 0.5em;
`

const FooterHeader = styled.div`
  color: black;
  text-decoration: underline;
  font-weight: bold;
  padding-bottom: 0.5em;
`
