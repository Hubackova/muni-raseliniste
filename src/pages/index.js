import React, {Component} from "react"
import styled, { injectGlobal } from 'styled-components'
import 'font-awesome/css/font-awesome.min.css';

import MainContainer from "../components/MainContainer";
import Layout from "../components/layout";
import { LocalizationConsumer } from '../components/localization.context';
import snail from "../images/snail.png"
import plant from "../images/plant.png"

const Databases = () => {
    return (
    <Section>
      <p><strong>Databases</strong></p>
      <p><img src={plant} alt='plant' height='30em'/><StyledLink href='http://is.muni.cz'>Macrofossils</StyledLink></p>
      <p><img src={snail} alt='snail' height='30em'/><StyledLink href='http://is.muni.cz'>Palaeo-profiles</StyledLink></p>
      <p><img src={plant} alt='plant' height='30em'/><StyledLink href='http://is.muni.cz'>Vegetation</StyledLink></p>
    </Section>
    )
}

class Index extends Component {
  state = {showAll: false}

  toggleShowFulltext = () => {
    this.setState(prevState => ({
      showAll: !prevState.showAll
    }));
  }

  render() {
    return (
      <Layout isIndex={this.props.location.pathname === '/'}>
        <ContainerWrapper>
        <MainContainer text>
        <LocalizationConsumer>
          {context => <>
          <h2>{context.language.mainPage.introHeader}</h2>
          <div>
            <p>
              {this.state.showAll
                ? context.language.mainPage.introText
                : context.language.mainPage.introTextShort
              }
            {!this.state.showAll && <span style={{color: 'red', cursor: 'pointer'}} onClick={this.toggleShowFulltext}> {context.language.mainPage.fullText}</span>}
            </p>

            <span style={{color: 'green'}}>{context.language.mainPage.mainTopics}</span>
            <ul style={{fontWeight: 'bold'}}>
            <li>{context.language.mainPage.mireEcology}</li>
            <li>{context.language.mainPage.palaeoecology}</li>
            <li>{context.language.mainPage.relictEcosystems}</li>
            <li>{context.language.mainPage.cryptogamology}</li>
            </ul>
          </div>
          </>}
          </LocalizationConsumer>
        </MainContainer>
        <Databases/>
        </ContainerWrapper>
      </Layout>)
  }
}

export default Index;

const ContainerWrapper = styled.div`
    display: flex;
    margin: 0 50px;
    @media (max-width: ${props => props.theme.largeDevice}) {
      margin: 0 15px;
      flex-wrap: wrap;
    }
`;

const StyledLink = styled.a`
  color: ${props => props.theme.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;

const Section = styled.section`
  flex: 1;
  border-left: 1px solid ${props => props.theme.grey};
  padding-left: 1em;
  padding-right: 1em;
  margin-left: 2em;
  line-height: 1em;
  min-width: 250px;
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin: 0;
    border: 0;
    border-top: 1px solid ${props => props.theme.grey};
  }
`;


// TODO: move this section to gatsby-browser after solving the issue with global styles: https://github.com/gatsbyjs/gatsby/issues/7447
injectGlobal`
html, body, #___gatsby, #___gatsby>div {
    width: 100%;
    margin: 0;
}

body {
    font-family: Elena, sans-serif;
    font-size: calc(17px + .25vw);
    letter-spacing: -.25px;
    line-height: calc(1.5em + .2vw);
    color: #333;
}


body h1, body h2 {
  line-height: 1.2;
}

h1 {
  font-size: calc(22px + 1.6vw);
}

h2 {
  font-size: calc(24px + .25vw);
  font-weight: bold;

}

h2 + ul {
  list-style-type:none;
  padding: 0;
  line-height: 1.2em;
}

h2 + ul > li {
  margin-bottom: 1em;
}

a {
  color: green;
}


* {
    box-sizing: border-box
}

.images-wrap, .images-wrap img, .images-wrap > div {
   max-height: 200px;
   object-fit: cover;
   @media (max-width: ${props => props.theme.extraLargeDevice}) {
     object-fit: contain;
  }
   @media (max-width: ${props => props.theme.largeDevice}) {
     max-height: 150px;
     object-fit: contain;
  }
}

.indexImg .images-wrap, .indexImg .images-wrap img, .indexImg .images-wrap > div {
   max-height: 250px;
   object-fit: cover;
   @media (max-width: ${props => props.theme.extraLargeDevice}) {
     object-fit: contain;
  }
   @media (max-width: ${props => props.theme.largeDevice}) {
     max-height: 150px;
     object-fit: contain;
  }
}
`
