import React, {Component} from 'react'
import PropTypes from 'prop-types';

const languages = {
  en: {
    mainPage: {
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
    },
    footer: {
      botzool: 'Department of Botany and Zoology, ',
      faculty: 'Faculty of Science, ',
      university: ' Masaryk University',
      postalAddressHeading: 'Postal Address: ',
      physicalAddressHeading: `Physical Address: `,
      postalAddress: 'Kotlářská 267/2, 611 37, Brno, Czech Republic',
      physicalAddress: `Campus Bohunice, building A31, Kamenice 5, Brno`,
      links: 'Links'
    },
    people: {
      staff: `Personál`
    }
  },
  cz: {
    mainPage: {
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
    },
    footer: {
      botzool: 'Ústav botaniky a zoologie, ',
      faculty: 'Přírodovědecká fakulta, ',
      university: ' Masarykova Univerzita',
      postalAddressHeading: 'Poštovní adresa: ',
      physicalAddressHeading: `Adresa pracoviště: `,
      postalAddress: 'Kotlářská 267/2, 611 37, Brno, Czech Republic',
      physicalAddress: `Campus Bohunice, budova A31, Kamenice 5, Brno`,
      links: 'Odkazy'
    },
    people: {
      staff: `Staff`
    }
  }
}

const LocalizationContext = React.createContext()

export class LocalizationProvider extends Component {
  state = {
    language: languages.en
  }

  changeToEn = () => {
    this.setState({
      language: languages.en
    })
  }

  changeToCz = () => {
    this.setState({
      language: languages.cz
    })
  }
  render() {
    const {children} = this.props

    return (
      <LocalizationContext.Provider
        value={{
          language: this.state.language,
          changeToCz: this.changeToCz,
          changeToEn: this.changeToEn
        }}
      >
        {children}
      </LocalizationContext.Provider>
    )
  }
}

LocalizationProvider.propTypes = {
  children: PropTypes.node
}

export const LocalizationConsumer = LocalizationContext.Consumer

export function withLocalization(Component) {
  return function LocalizedComponent(props) {
    return <LocalizationConsumer>{language => <Component {...props} language={language} />}</LocalizationConsumer>
  }
}
