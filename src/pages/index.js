import React, {Component, Fragment} from 'react'
import styled, {injectGlobal} from 'styled-components'
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css'

import MainContainer from '../components/MainContainer'
import Layout from '../layouts'
import snail from '../images/snail.png'
import plant from '../images/plant.png'

const mainPageEng = {
  mainHeader: 'Mire Ecology Group',
  muni: 'Masaryk university',
  introHeader: 'In our group we focus on',
  introText: `the long-term research of mire ecosystems, especially those rich in calcium (i.e. fens). The group involves botanists, zoologists and palaeoecologists,
    which allows us to interconnect the results from particular specializations in order to obtain complex knowledge about mire ecosystems as well as other biotopes.
    Mires represent island-like ecosystems that provide refugia for many rare and relict species, and can be therefore used as interesting and useful models to explore
    general ecological questions. Taxonomic scope of our research group is broad: we study vascular plants, bryophytes, molluscs, lichens, fungi, diatoms, testate amoebae
    and also fossil remains of pollen, plants, and shells of molluscs and testate amoebae. In these groups of organisms, we are mainly interested in the relationships
    between the species richness and composition and the environmental conditions. Based on these data we also reconstruct the development of mires from the Late Glacial
    up to the present (using multi-proxy biotic and abiotic analyses of organic sediments) in relation to distribution and ecology of selected relict taxa. Except for
    mires we also study other relict ecosystems such as extremely species-rich semi-dry grasslands that may potentially represent remnants of glacial steppes. We also
    monitor the influence of different management types on the vegetation of spring fens and fen meadows using permanent plots. Our research covers various spatial scales,
    from very local to pan-European. Recently, we have also dealt with the classification of mire vegetation on the European scale (large-scale syntheses), phylogenetic
    reconstructions, phylogeography and taxonomy.`,
  introTextShort: `the long-term research of mire ecosystems, especially those rich in calcium (i.e. fens). The group involves botanists, zoologists and palaeoecologists,
    which allows us to interconnect the results from particular specializations in order to obtain complex knowledge about mire ecosystems as well as other biotopes.
    Mires represent island-like ecosystems that provide refugia for many rare and relict species, and can be therefore used as interesting and useful models to explore
    general ecological questions. Taxonomic scope of our research group is broad: we study vascular plants, bryophytes, molluscs, lichens, fungi, diatoms, testate amoebae
    and also fossil remains of pollen, plants, and shells of molluscs and testate amoebae.`,
  fullText: 'Show full text...',
  mainTopics: 'Main research topics:',
  mireEcology: 'Mire ecology',
  palaeoecology: 'Palaeoecology',
  relictEcosystems: 'Relict ecosystems',
  cryptogamology: 'Cryptogamology'
}

const mainPage = {
  mainHeader: 'Skupina pro výzkum rašelinišť',
  muni: 'Masarykova univerzita',
  introHeader: 'Naše skupina',
  introText: `se dlouhodobě věnuje výzkumu rašelinišť se zvláštním důrazem na tzv. slatiniště (vápnitá rašeliniště). Skupinu tvoří botanici, zoologové a
  paleoekologové, což nám umožňuje propojovat výsledky jednotlivých specializací a získávat komplexní poznatky o ekosystémech rašelinišť, ale i dalších biotopů.
  Rašeliniště představují ostrovní biotopy, poskytující útočiště pro mnoho vzácných druhů s reliktním výskytem, a jsou proto velice zajímavým a užitečným modelovým
  ekosystémem pro výzkum obecných ekologických otázek. Taxonomický záběr skupiny je velmi široký: od cévnatých rostlin, mechorostů, měkkýšů, lišejníků, hub,
  rozsivek, krytenek až po subfosilní pyl, makrozbytky rostlin i schránky měkkýšů a krytenek. U těchto skupin nás zajímají především vztahy druhového složení a
  druhové bohatosti k podmínkám prostředí. S jejich pomocí také rekonstruujeme vývoj rašelinišť od doby ledové po současnost (tzv. multi-proxy biotické i abiotické
  analýzy organických sedimentů) v návaznosti na rozšíření a ekologii vybraných reliktních druhů. Kromě rašelinišť se zabýváme i výzkumem dalších reliktních
  ekosystémů jako jsou extrémně druhově bohaté suché trávníky, které mohou být pozůstatkem stepí z doby ledové. Studujeme také vliv různých typů managementu na
  vegetaci pramenišť a rašelinných luk, s cílem přispět k jejich efektivní ochraně. Naše výzkumy probíhají na rozmanitých prostorových škálách, od zcela lokální
  až po celoevropskou. V poslední době se věnujeme také klasifikaci vegetace na evropské škále (celoevropské syntézy), fylogenetickým rekonstrukcím,
  fylogeografii a taxonomii. `,
  introTextShort: `se dlouhodobě věnuje výzkumu rašelinišť se zvláštním důrazem na tzv. slatiniště (vápnitá rašeliniště). Skupinu tvoří botanici, zoologové a
  paleoekologové, což nám umožňuje propojovat výsledky jednotlivých specializací a získávat komplexní poznatky o ekosystémech rašelinišť, ale i dalších biotopů.
  Rašeliniště představují ostrovní biotopy, poskytující útočiště pro mnoho vzácných druhů s reliktním výskytem, a jsou proto velice zajímavým a užitečným modelovým
  ekosystémem pro výzkum obecných ekologických otázek. Taxonomický záběr skupiny je velmi široký: od cévnatých rostlin, mechorostů, měkkýšů, lišejníků, hub,
  rozsivek, krytenek až po subfosilní pyl, makrozbytky rostlin i schránky měkkýšů a krytenek.`,
  fullText: 'Zobrazit celý text...',
  mainTopics: 'Hlavní směry výzkumu:',
  mireEcology: 'Ekologie rašelinišť',
  palaeoecology: 'Paleoekologie',
  relictEcosystems: 'Reliktní ekosystémy',
  cryptogamology: 'Kryptogamologie'
}

const Databases = () => {
  return (
    <Section>
      <p>
        <strong>Databases</strong>
      </p>
      <p>
        <img src={plant} alt="plant" height="30em" />
        <StyledLink href="http://is.muni.cz">Macrofossils</StyledLink>
      </p>
      <p>
        <img src={snail} alt="snail" height="30em" />
        <StyledLink href="http://is.muni.cz">Palaeo-profiles</StyledLink>
      </p>
      <p>
        <img src={plant} alt="plant" height="30em" />
        <StyledLink href="http://is.muni.cz">Vegetation</StyledLink>
      </p>
    </Section>
  )
}

class Index extends Component {
  state = {showAll: false}

  toggleShowFulltext = () => {
    this.setState(prevState => ({
      showAll: !prevState.showAll
    }))
  }

  render() {
    return (
        <ContainerWrapper>
          <MainContainer isText>
                  <h2>{mainPage.introHeader}</h2>
                  <div>
                    <p>
                      {this.state.showAll
                        ? mainPage.introText
                        : mainPage.introTextShort}
                      {!this.state.showAll && (
                        <span style={{color: 'red', cursor: 'pointer'}} onClick={this.toggleShowFulltext}>
                          {' '}
                          {mainPage.fullText}
                        </span>
                      )}
                    </p>

                    <span style={{color: 'green'}}>{mainPage.mainTopics}</span>
                    <ul style={{fontWeight: 'bold'}}>
                      <li>{mainPage.mireEcology}</li>
                      <li>{mainPage.palaeoecology}</li>
                      <li>{mainPage.relictEcosystems}</li>
                      <li>{mainPage.cryptogamology}</li>
                    </ul>
                  </div>
          </MainContainer>
          <Databases />
        </ContainerWrapper>
    )
  }
}

export default Index

Index.propTypes = {
  location: PropTypes.object
}

const ContainerWrapper = styled.div`
  display: flex;
  margin: 0 50px;
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin: 0 15px;
    flex-wrap: wrap;
  }
`

const StyledLink = styled.a`
  color: ${props => props.theme.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`

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
`

// TODO: move this section to gatsby-browser after solving the issue with global styles: https://github.com/gatsbyjs/gatsby/issues/7447
injectGlobal`
html, body, #___gatsby, #___gatsby>div {
    width: 100%;
    margin: 0;
}

body {
    font-family: Calibri, sans-serif;
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

.carousel .slide {
  background: linear-gradient(#3E7404, #778F55, #A4AF8D, white) !important;
}
`
