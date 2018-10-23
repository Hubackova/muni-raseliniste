import React, {Component} from 'react'
import styled from 'styled-components'
import {Link, Element} from 'react-scroll'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PersonBox from '../components/people/PersonBox'
import {H2} from '../components/atoms'
import {Container as MenuContainer, Li} from '../components/header/Navigation'
import {withLocalization} from '../components/localization.context'
import hajek from '../images/people/hajek.jpg'
import horsak from '../images/people/horsak.jpg'
import horsakova from '../images/people/horsakova.jpg'




const horsakInfo = {
  name: 'Prof. RNDr. Michal Horsák Ph.D.',
  position: 'Professor',
  description: 'Michal Horsák has got a full job at the Dept. of Botany and Zoology of the Masaryk University since 2004. He gives courses on Phylogeny and diversity of invertebrates, Malacology, and with J. Roleček on Quaternary environments. As a permanent member of the Biotým group he loves to guide and organise field excursions for Biopeople. He studied the systematic zoology and ecology at the Masaryk University. His current scientific interests include three main topics: 1) ecology of terrestrial temperate molluscs across Eurasia, 2) development of central European environments since the Last glacial maximum, and 3) ecology of macroinvertebrates of model aquatic systems. Recently he focusses on the research of ecology and palaeoecology of European fen habitats and also on modern analogies of central European full-glacial and early-Holocene ecosystems. He is attracted by the role of dispersal abilities and environmental filtering on the composition of biotic communities and the influence of historical processes on modern distribution and a long-term survival of glacial relicts and habitat specialists.',
  descriptionCz: "Michal Horsák pracuje od roku 2004 na Ústavu botaniky a zoologie Masarykovy univerzity, kde přednáší fylogenezi a diverzitu bezobratlých, malakozoologii a s J. Rolečkem vývoj přírody ve čtvrtohorách. Jako stálý člen Biotýmu se rád věnuje výuce v terénu a pořádání terénních cvičení. Studoval obor Systematická zoologie a ekologie na Masarykově univerzitě. Aktuální výzkumné aktivity sledují tři hlavní tematické okruhy: 1) ekologii kontinentálních měkkýšů mírného pásu Eurasie, 2) vývoj středoevropské přírody od posledního glaciálního maxima a 3) studium ekologie makrozoobentosu vybraných vodních ekosystémů. V posledních letech se soustředí na výzkum ekologie a paleoekologie slatinišť a také současných analogií středoevropské přírody glaciálu a raného holocénu. Zajímají ho také témata týkající se vlivu dispersních schopností a podmínek prostředí na utváření biotických společenstev nebo vlivu historických aspektů na současný výskyt a přežívaní glaciálních reliktů či stanovištních specialistů.",
  email: 'horsak@sci.muni.cz',
  phoneNumber: '549494448',
  img: horsak
}

const hajkovaInfo = {
  name: 'Mgr. Petra Hájková, Ph.D.',
  position: 'Researcher',
  description: 'Petra Hájková studied Plant Systematics and Ecology in Palacký University, Olomouc, and was graduated in 1999. Her master thesis was devoted to bryoflora and plant communities of fens and fen meadows in the Hostýnské vrchy Mts. She continued as postgradual student in Masaryk University, Brno. Her PhD thesis concerned ecology and palaeoecology of wetlands in the Western Carpathians, and was defended in 2005. Presently, she is a research assistant in Masaryk University, Brno and in Institute of Botany, Czech Academy of Sciences. Her research interests are phytosociology, ecology and palaeoecology of mires, springs and wet meadows in the Western Carpathians and in Bulgaria. A special attention is paid to bryophytes.',
  descriptionCz: "Petra Hájková studovala obor Systematická biologie a ekologie na Přírodovědecké fakultě Univerzity Palackého v Olomouci. Její diplomová práce se týkala rostlinných společenstev slatinišť a mokřadních luk a jejich bryoflory. Ve studiu pokračovala jako postgraduální student na Katedře botaniky PřF MU v Brně. Její disertační práce se týkala ekologie a palaeoekologie mokřadní vegetace v Západních Karpatech a byla obhájena v únoru 2005. V současné době je odborným pracovníkem na PřF MU v Brně a na Botanickém ústavu Akademie Věd ČR. Ve svém výzkumu se zaměřuje především na fytocenologii, ekologii a paleoekologii rašelinišť, pramenišť a mokrých luk v Západních Karpatech a na Balkáně (především v Bulharsku). Zvláštní pozornost věnuje mechorostům.",
  email: 'buriana@sci.muni.cz',
  phoneNumber: '549494010'
}

const mikulaskovaInfo = {
  name: 'Mgr. Eva Mikulášková, Ph.D.',
  position: 'Researcher',
  description: `Eva Mikulášková received her Mgr. and Ph.D. at the Department of Botany, Faculty of Science, Charles University in Prague. The focus of her master's thesis was on biodiversity and ecology of bryophytes in selected zones of national park Bohemian Forest. In 2012 she earned her Ph.D., the topic of her thesis being "Biology and Ecology of the moss Campylopus introflexus". From 2005 to 2009 she worked as a bryologist at the Administration of Protected Land Area and National Park Bohemian Forest, during which period she carried out bryofloristic surveys on the territory of the park, focusing primarily on wetland and epiphytic bryophytes. Since 2006 she has been working at the Department of Botany and Zoology, Faculty of Science, Masaryk University in Brno, where she is leading a course Biology and ecology of bryophytes. Her current research is focused on population genetics of the genus Sphagnum and on bryofloristic surveys of mainly wetland and epiphytic bryophytes. Currently she is part-time working as a researcher and is part-time on a maternity leave.`,
  descriptionCz: "Eva Mikulášková studovala obor Odborná biologie na Katedře botaniky PřF Univerzity Karlovy v Praze, absolvovala v roce 2004. Ve své diplomové práci se zabývala biodiverzitou a ekologií mechorostů ve vybraných I. zónách NP Šumava. Poté na PřF UK navázala doktorským oborem Botanika s tématem disertační práce Biologie a ekologie mechu Campylopus introflexus. Absolvovala v roce 2012. Během let 2005-2009 pracovala jako bryolog na Správě CHKO a NP Šumava, kde se zaměřovala převážně na výzkum mokřadních a epifytických mechorostů a celkovou bryofloristiku. Od roku 2006 pracuje na Ústavu botaniky a zoologie PřF Masarykovy Univerzity v Brně, kde vede kurz Obecné bryologie, zabývá se populační genetikou rodu Sphagnum, mokřadními a epifytickými mechorosty a příležitostně se věnuje bryofloristice jiných biotopů. V současné době pracuje ve vědě pouze částečně a zbytek času je na rodičovské dovolené",
  email: 'klicek@mail.muni.cz',
  phoneNumber: '549498474'
}

const smerdovaInfo = {
  name: 'Mgr. Eva Šmerdová (Hettenbergerová), Ph.D.',
  position: 'Researcher',
  description: `Eva Hettenbergerová studied Plant Systematics and Ecology at University of Ostrava. She continued in master study of botany at Masaryk University, Brno and was graduated in 2006. Her master thesis dealt with the effect of contact plant communities on the species composition of spring fens. Her PhD thesis dealt with species richness of plants and molluscs along the moisture gradient. Currently she works on database of plant macrofossils of Czech and Slovak Republic. She likes to travel with co-workers to sample field data for the next research`,
  descriptionCz: "Eva Hettenbergerová získala bakalářský titul na Ostravské Univerzitě, její práce se zaměřovala na flóru a vegetaci hald. Magisterské studium botaniky ukončila v roce 2006 na PřF Masarykovy Univerzity v Brně diplomovou prací zabývající se vlivem kontaktních společenstev na druhové složení lučních pramenišť. Doktorskou práci na téma druhová bohatost a variabilita rostlin a měkkýšů na vlhkostním gradientu obhájila v roce 2013. V současné době se mimo jiné zabývá tvorbou databáze rostlinných makrozbytků České a Slovenské republiky a doplňováním vegetačních snímků a jiných údajů pro projekt PLADIAS. Ráda cestuje s kolegy po rodné vlasti i do zahraničí a sbírá terénní data k dalšímu výzkumu ekologie mokřadů i jiných biotopů.",
  email: 'eva.hette@centrum.cz',
  phoneNumber: '549498487'
}

const jirousekInfo = {
  name: 'Mgr. Martin Jiroušek, Ph.D.',
  position: 'Researcher',
  description: `Martin Jirousek studied Systematic botany and ecology at Masaryk University, Faculty of Science, Department of Botany and Zoology, in Brno, Czech Republic. He continued with postgraduate studies at the same department and in 2012 defended Ph.D. thesis focused on ecology of mountain bogs in Sudetes Mountains. He continues to study bogs in the mentioned region to this day, but during last years took greater interest also on bogs, but also on fens, from broader central-European region.
  Recently, his main research aims are related to mire classifications on whole-European scale based on large phytosociological datasets (within project PLADIAS together with T. Peterka, M. Hajek and other colleagues).
  Specialisation: mire vegetation, mire ecology, vegetation change, Sphagnum biology, productivity and decomposition of Sphagnum species, relationships among bog organisms, mire vegetation classification
  He is also employed as a research assistant at Department of Biology, Faculty of AgriSciences, Mendel University in Brno.
  `,
  descriptionCz: `Martin Jiroušek studoval obor Systematická biologie a ekologie na Přírodovědecké fakultě Masarykovy Univerzity v Brně. Na stejném pracovišti v roce 2012 obhájil i dizertační práci v oboru Botanika na téma Ekologie vrchovišť v pohořích Sudetské soustavy. Výzkumu vrchovišť českého pohraničí se věnuje nejvíce i doposud, v poslední době se však zabýval i výzkumem slatiništních rašelinišť či vrchovišť jiných oblastí, především střední Evropy.
  Nyní se spolu s T. Peterkou, M. Hájkem a ostatními kolegy nejen z rašeliništní pracovní skupiny zabývá syntézami fytocenologických databází s rašeliništními daty a klasifikacemi evropské vegetace rašelinišť pro projekt PLADIAS.
  Specializace: vegetace rašelinišť, ekologie rašelinišť, vegetační změny, biologie rašeliníků, produkce a dekompozice rašeliníků, vztahy mezi různými skupinami vrchovištních organismů, klasifikace rašeliništní vegetace.
  Mimo rašeliništní skupinu ÚBZ pracuje také na Ústavu biologie rostlin Agronomické fakulty Mendelovy univerzity v Brně.`,
  email: 'merlin.mann@seznam.cz',
  phoneNumber: '549498266'
}

const kosuthovovaInfo = {
  name: 'Mgr. Alica Košuthová, Ph.D.',
  position: 'Researcher',
  description: `Alica Košuthová is an external researcher in botany at Masaryk University. Her diploma thesis, defended in 2005, concerned management of the ski-slopes and its effect on diversity of terricolous lichens in NP Low Taras. PhD thesis on lichens assemblages and teir correlation to environmental variables, ecological and climatic factors, was studied on acidic aeolian sands in Central-Europe and was defended in 2013. Since 2013, she works as a research scientist in botany at Masaryk University and she is employee at Institute of Botany, Academy of Sciences of the Slovak Republic. Her research interest are: (1) biodiversity of lichens world-wild, especially terricolous genus Cladonia and saxicolous genus Placynthium, (2) modern approaches in genetics (DNA-barcoding, NGS) and ecology (study of mycobiont and fotobiont, co-evolution) (3) conservation biology.`,
  descriptionCz: `Alica Košuthová pracuje jako externí odborná pracovnice na Katedře botaniky Masarykovy university v Brně. Studovala odbor Environmentalistika na Přírodovědecké fakultě na Univerzitě Komenského v Bratislavě. Diplomovou práci o vlivu úprav sjezdovek na diverzitu lišejníků v NP Nízke Tatry obhájila v roce 2005. Doktorská práce se zabývala změnami v synuziích terestrických lišejníků na kyselých píscích Borské nížiny (Slovensko) ve vztahu k ekologickým a klimatickým faktorům a byla obhájena v roce 2013. Od roku 2013 pracuje na Ústavu botaniky a zoologie Masarykovy university a úvazek má i na Botanickém ústavu Akademie Věd SR. Její vědecký výzkum je zaměřen na: (1) diverzitu lišejníků v celosvětovém měřítku, zejména na terestrické lišejníky rodu Cladonia a saxikolní rod Placynthium, (2) moderní přístupy v oblasti genetiky (DNA-barcoding,  NGS) a ekologii (studium mycobionta a fotobionta, co-evoluce), (3) ochranu přírody.`,
  email: 'kosuthova.alica@gmail.com',
  phoneNumber: '549498494'
}

const petrInfo = {
  name: 'Mgr. Libor Petr, Ph.D',
  position: 'Researcher',
  description: `Libor Petr studied Botany at Faculty of Science, Charles University in Prague. He finished Ph.D in, 2013 with thesis Environmental gradients during Late Glacial in Central Europe. He works at Masaryk University since 2012. He is specialist in palynology and paleoecology. Topic of research are vegetation and environmental changes of last Glacial and Holocene under climate oscillation and human impact in the Central Europe region.`,
  descriptionCz: `Libor Petr vystudoval botaniku na Přírodovědecké fakultě Univerzity Karlovy v Praze. V roce 2013 obhájil doktorskou práci na téma Diverzita životního prostředí v pozdním glaciálu ve střední Evropě. Na Masarykově univerzitě pracuje od roku 2012. Jeho specializací je palynologie a paleoekologie. Zabývá se změnami vegetace a životního prostředí v posledním glaciálu a holocénu způsobených klimatickými oscilacemi a činností člověka v oblasti střední Evropy.`,
  email: '115762@mail.muni.cz',
  phoneNumber: '549498485'
}

const horsakovaInfo = {
  name: 'Mgr. Veronika Horsáková, Ph.D.',
  position: 'Researcher',
  description: `Veronika Horsáková studied the field of Systematic biology and ecology at the Faculty of Science, MU. In her diploma thesis, defended in 2012, she studied the variation of mollusc communities in mineral-rich fens of Poland and southern Scandinavia. In her PhD thesis she analyses the species richness and composition of mollusc communities in fens of continental Europe. At present she is a PhD student of the field of Ecology and a research assistant at MU. In her current research she focuses on the ecology of land-mollusc communities with respect to spring-fen habitats and ecology of relict land-snail species.`,
  descriptionCz: `Veronika Horsáková studovala obor Systematická biologie a ekologie na PřF MU. Diplomovou práci obhájila v r. 2012 a zabývala se v ní studiem variability společenstev měkkýšů bazických slatinišť Polska a jižní Skandinávie. Tématem její disertační práce je analýza druhové bohatosti a skladby společenstev měkkýšů na slatiništích kontinentální Evropy. V současnosti je studentkou doktorského studia oboru Ekologie a odbornou pracovnicí na MU. Ve svém aktuálním výzkumu se věnuje ekologii suchozemských společenstev měkkýšů se zaměřením na prameništní slatiniště a ekologii reliktních druhů plžů.`,
  email: 'veronika.horsakova@seznam.cz',
  phoneNumber: '549495163'
}

const pleskovaInfo = {
  name: 'Mgr. Zuzana Plesková',
  position: 'Researcher',
  description: `Zuzana Plesková is an absolvent of Systematic Biology and Ecology with specialization on Botany. In her Bachelor and Master Thesis she was studing succesion on abandoned meadows of White Carpathians. For now she is interested in fen ecology and currently works on her Ph.D. thesis "Realised niches of calcitolerant mire species". She works also as a researcher on different grant projects of Masaryk University and Czech Academy of Sciences.`,
  descriptionCz: `Zuzana Plesková vystudovala Systematickou biologii a ekologii se zaměřením na botaniku a ve své bakalářské i diplomové práci se věnovala sukcesi zarůstajících bělokarpatských luk. V současné době pracuje na dizertaci, ve které se věnuje ekologii rašelinišť. Téma její práce zní "Realizované niky kalcitolerantních rašeliništních rostlin". Zároveň pracuje na Masarykově univerzitě a Botanickém ústavu AVČR jako odborný asistent na různých grantových projektech.`,
  email: 'pleskovicova@gmail.com',
  phoneNumber: '549498487'
}

const phdDurcanovaInfo = {
  name: 'Mgr. Patrícía Ďurčanová',
  position: '',
  description: 'Patrícia Ďurčanová studied biology at The Constantine the Philosopher University in Nitra and was graduated 2005. Her diploma thesis dealt with wetland vegetation of Kysuce region in Slovakia. Currently she is a PhD student of Department of Botany in Brno. Her PhD thesis concerns succession of minerotrophic mires and its relationship with availability of nutrients.',
  email: 'patadurcanova@gmail.com',
}

const studentInfoA = {
  name: 'Stedent Kdosi',
  supervisor: 'Prof. RNDr. Michal Horsák Ph.D.',
  thesis:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl. Aliquam erat volutpat. Fusce tellus'
}

const Student = ({studentInfo}) => {
  return (
    <div style={{margin: '0.8em 0'}}>
      <div style={{fontWeight: 'bold'}}>{studentInfo.name}</div>
      <div>
        <span>
          <u>Supervizor</u>: {studentInfo.supervisor}
        </span>
      </div>
      <div>
        <span>
          <u>Thesis</u>: {studentInfo.thesis}
        </span>
      </div>
    </div>
  )
}

Student.propTypes = {
  studentInfo: PropTypes.object
}

class Staff extends Component {
  render() {
    const {data} = this.props
    if (!data && !data.markdownRemark) return <div>...loading</div>

    const {title, email, phone, position, description} = data.markdownRemark.frontmatter
    const hajekInfo = {
      name: title,
      position: position,
      description: description,
      email: email,
      researchgate: 'https://www.researchgate.net/',
      is: 'https://is.muni.cz/osoba/580',
      phoneNumber: phone,
      img: hajek
    }
    return (
      <Layout>
        <Container>
          <MenuContainer>
            <Li isVisible={true}>
              <StyledLink activeClass="active" to="staff" spy={true} smooth={true} duration={500}>
                {/* {people.staff} */}
              </StyledLink>
            </Li>
            <Li isVisible={true}>
              <StyledLink activeClass="active" to="PhD" spy={true} smooth={true} duration={500}>
                PhD Students
              </StyledLink>
            </Li>
            <Li isVisible={true}>
              <StyledLink activeClass="active" to="students" spy={true} smooth={true} duration={500}>
                Students
              </StyledLink>
            </Li>
          </MenuContainer>
          <Element name="staff" className="element">
            <H2>Staff</H2>
          </Element>
          <PersonBox personInfo={hajekInfo} />
          <PersonBox personInfo={horsakInfo} />
          <PersonBox personInfo={hajkovaInfo} />
          <PersonBox personInfo={mikulaskovaInfo} />
          <PersonBox personInfo={smerdovaInfo} />
          <PersonBox personInfo={jirousekInfo} />
          <PersonBox personInfo={kosuthovovaInfo} />
          <PersonBox personInfo={petrInfo} />
          <PersonBox personInfo={horsakovaInfo} />
          <PersonBox personInfo={pleskovaInfo} />
          <Element name="PhD" className="element">
            <H2>PhD Students</H2>
          </Element>
          <PersonBox personInfo={phdDurcanovaInfo} />
          <Element name="students" className="element">
            <H2>Students</H2>
          </Element>
          <Student studentInfo={studentInfoA} />
          <Student studentInfo={studentInfoA} />
        </Container>
    </Layout>
    )
  }
}

export default withLocalization(Staff)

export const peopleQuery = graphql`
  query peopleQuery {
    markdownRemark(frontmatter: {id: {eq: "hajek"}}) {
      frontmatter {
        title
        email
        phone
        position
        description
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`
