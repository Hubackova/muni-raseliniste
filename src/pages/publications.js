import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../layouts'
import MainContainer from '../components/MainContainer'
import {H2} from '../components/atoms'

const Publications = ({data}) => {
  if (!data && !data.markdownRemark) return <div>...loading</div>
  const {markdownRemark: publications} = data
  return (
      <MainContainer>
        <H2>2018</H2>
        {papers_2018}
        <H2>2017</H2>
        {papers_2017}
        {/*markdown example, todo: use createPages and allMarkdownRemark*/}
        <H2>{publications.frontmatter.title}</H2>
        <MarkdownStyles dangerouslySetInnerHTML={{__html: publications.html}} />
      </MainContainer>
  )
}

export default Publications

export const publicationsQuery = graphql`
  query publicationsQuery {
    markdownRemark(frontmatter: {title: {eq: "2016"}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
const MarkdownStyles = styled.div`
  & > ul {
    list-style-type: none;
    padding: 0;
    line-height: 1.2em;
  }

  & > ul > li {
    margin-bottom: 1em;
  }
`

const papers_2018 = (
  <ul>
    <li>
      <strong>
        Čejka T., Beran L., Hlaváč J.Č., Horsák M., Juřičková L., Čačaný J., Buďová J., Dvořáková J., Frodlová J.,
        Horáčková J., Horsáková V., Hrdlička V., Jansová A., Myšák J., Novák J. &amp; Škodová J.
      </strong>{' '}
      (2018): Měkkýši Hostýnských vrchů. [Molluscs of the Hostýnské vrchy Hills]. <em>Malacologica Bohemoslovaca</em>{' '}
      17: 17-27. -&nbsp;
      <a href="http://mollusca.sav.sk/pdf/17/17.Cejka.pdf">fulltext&nbsp;in&nbsp;pdf</a>
    </li>
    <li>
      <strong>Pavelková Řičánková V., Horsák M., Hais M., Robovský J. &amp; Chytrý M.</strong> (2018): Environmental
      correlates of the Late Quaternary regional extinctions of large and small Palaearctic mammals. <em>Ecography</em>{' '}
      41: 516-527. -&nbsp;
      <a href="http://onlinelibrary.wiley.com/doi/10.1111/ecog.02851/epdf">
        fulltext&nbsp;in&nbsp;Wiley&nbsp;Online&nbsp;Library
      </a>
    </li>
    <li>
      <strong>Říhová D., Janovský Z., Horsák M. &amp; Juřičková L.</strong> (2018): Shell decomposition rates in
      relation to shell size and habitat conditions in contrasting types of Central European forests.{' '}
      <em>Journal of Molluscan Studies</em> 84: 54-61.{' '}
    </li>
  </ul>
)

const papers_2017 = (
  <ul>
    <li>
      <strong>Beran L., Juřičková L. &amp; Horsák M.</strong> (2017): Mollusca (měkkýši).{' '}
      <em>
        In: Hejda R., Farkač J. &amp; Chobot K. (eds.). Červený seznam ohrožených druhů České republiky. Bezobratlí.
        (Red List of threatened species of the Czech Republic. Invertebrates.). Příroda
      </em>{' '}
      36: 70-76.{' '}
    </li>
    <li>
      <strong>Bryja J., Horsák M., Horsáková V., Řehák Z. &amp; Zukal J.</strong> (2017): Zoologické dny Brno 2017.
      Sborník abstraktů z konference 9.-10. února 2017. <em /> Pp. 254.{' '}
    </li>
    <li>
      <strong>Dítě D., Peterka T., Dítětová Z., Hájková P. &amp; Hájek M.</strong> (2017): Arcto-alpine species at Their
      Niche Margin: The Western Carpathian refugia of <em>Juncus castaneus</em> and <em>J. triglumis</em> in Slovakia.{' '}
      <em>Annales Botanici Fennici</em> 54: 67-82.{' '}
    </li>
    <li>
      <strong>
        Dřevojan P., Eckstein J., Hájek M., Hájková P., Hradílek Z., Košnar J., Kučera J., Šímová A. &amp; Vicherová E.
      </strong>{' '}
      (2017): Zajímavé bryofloristické nálezy XXVIII. <em>Bryonora</em> 60: 65-69. -&nbsp;
      <a href="http://botanika.prf.jcu.cz/BLS/english/files/bryonora60_5.pdf">fulltext&nbsp;in&nbsp;pdf</a>
    </li>
    <li>
      <strong>Ďurčanová P., Jiroušek M. &amp; Peterka T.</strong> (2017): Pozoruhodné nálezy <em>Sphagnum affine</em> a
      ďalších rašelinníkov v severnej časti západných Karpát na Slovensku. <em>Bryonora</em> 59: 58-66. -&nbsp;
      <a href="http://botanika.prf.jcu.cz/BLS/english/files/bryonora59_6.pdf">fulltext&nbsp;in&nbsp;pdf</a>
    </li>
    <li>
      <strong>Frodlová J., Hájková P. &amp; Horsák M.</strong> (2017): Effect of sample size and resolution on
      palaeomalacological interpretation: a case study from Holocene calcareous-fen deposits.{' '}
      <em>Journal of Quaternary Science</em> 33: 68-78.{' '}
    </li>
    <li>
      <strong>
        Geisen S., Mitchell E.A.D., Wilkinson D.M., Adl S., Bonkowski M., Brown M.W., Fiore-Donno A.M., Heger T.J.,
        Jassey V.E.J., Krashevska V., Lahr D.J.G., Marcisz K., Mulot M., Payne R., Singer D., Anderson O.R., Charman
        D.J., Ekelund F., Griffiths B.S., Rønn R., Smirnov A., Bass D., Belbahri L., Berney C., Blandenier Q.,
        Chatzinotas A., Clarholm M., Dunthorn M., Feest A., Fernandez L.D., Foissner W., Fournier B., Gentekaki E.,
        Hájek M., Helder J., Jousset A., Koller R., Kumar S., La Terza A., Lamentowicz M., Mazei Y., Santos S.S., Seppey
        C.V.W., Spiegel F.W., Walochnik J., Winding A. &amp; Lara E.
      </strong>{' '}
      (2017): Soil protistology rebooted: 30 fundamental questions to start with. <em>Soil Biology and Biochemistry</em>{' '}
      111: 94-103. -&nbsp;
      <a href="https://ac.els-cdn.com/S0038071717301219/1-s2.0-S0038071717301219-main.pdf?_tid=spdf-fdd5401e-f801-4aff-bb71-5c2dec898f66&amp;acdnat=1519654568_74657471ecaa6b4f54ffe907a91011ff">
        fulltext&nbsp;on&nbsp;ScienceDirect
      </a>
    </li>
    <li>
      <strong>Hájek M., Dresler P., Hájková P., Hettenbergerová E., Milo P., Plesková Z. &amp; Pavonič M.</strong>{' '}
      (2017): Long-lasting imprint of former glassworks on vegetation pattern in an extremely species-rich grassland: a
      battle of species pools on mesic soils. <em>Ecosystems</em> 20: 1233-1249. -&nbsp;
      <a href="https://link.springer.com/content/pdf/10.1007%2Fs10021-017-0107-2.pdf">
        fulltext&nbsp;on&nbsp;SpringerLink
      </a>
    </li>
    <li>
      <strong>Horsák M.</strong> (2017): Boděnka Ložkova a vrkoč Chytrého: dvě velká jména pro malé plže. <em>Živa</em>{' '}
      6: 298-300.{' '}
    </li>
    <li>
      <strong>Horsák M.</strong> (2017): S Lucií Juřičkovou o tom, jaké je to učit se od klasiků a proč studovat plže.{' '}
      <em>Živa</em> 5: CXLV-CXLVI.{' '}
    </li>
    <li>
      <strong>
        Horsák M., Hájek M., Horsáková V., Hlaváč J., Hájková P., Dítě D., Peterka T., Divíšek J., Potůčková A. &amp;
        Preece R.C.
      </strong>{' '}
      (2017): Refugial occurrence and ecology of the land snail <em>Vertigo lilljeborgi</em> in fen habitats in
      temperate mainland Europe. <em>Journal of Molluscan Studies</em> 83: 451-460.{' '}
    </li>
    <li>
      <strong>Horsák M., Juřičková L. &amp; Škodová J.</strong> (2017): Pod svícnem bývá tma - identita záhadné fosilní
      zrnovky z Brna odhalena. <em>Živa</em> 65: 124-125.{' '}
    </li>
    <li>
      <strong>Horsák M., Tajovská E. &amp; Horsáková V.</strong> (2017): Calcareous forest seepages acting as
      biodiversity hotspots and refugia for woodland snail faunas.{' '}
      <em>Acta Oecologica - International Journal of Ecology</em> 82: 16-22. -&nbsp;
      <a href="https://ac.els-cdn.com/S1146609X17300243/1-s2.0-S1146609X17300243-main.pdf?_tid=spdf-4f607824-8e50-440a-a21a-881dfacbeed1&amp;acdnat=1519735627_3fa3d2b0c8b412067355720aae4828ad">
        fulltext&nbsp;on&nbsp;ScienceDirect
      </a>
    </li>
    <li>
      <strong>Horsáková V. &amp; Horsák M.</strong> (2017): Vrkoči - malí, ale výjimeční. <em>Vesmír</em> 96: 174-175.{' '}
    </li>
    <li>
      <strong>
        Hošek J., Lisá L., Hambach U., Petr L., Vejrostová L., Bajer A., Grygar T.M., Moska P., Gottvald Z. &amp; Horsák
        M.
      </strong>{' '}
      (2017): Middle Pleniglacial pedogenesis on the northwestern edge of the Carpathian basin: A multidisciplinary
      investigation of the Bíňa pedo-sedimentary section, SW Slovakia.{' '}
      <em>Palaeogeography, Palaeoclimatology, Palaeoecology</em> 487: 321-339. -&nbsp;
      <a href="https://ac.els-cdn.com/S0031018217305011/1-s2.0-S0031018217305011-main.pdf?_tid=spdf-36d8c237-d9d4-47ba-8e0a-0ec952ff30ca&amp;acdnat=1519735946_0b8476c05b97b0dcafe6f9052c107edb">
        fulltext&nbsp;on&nbsp;ScienceDirect
      </a>
    </li>
    <li>
      <strong>
        Chytrý M., Horsák M., Syrovátka V., Danihelka J., Ermakov N., German D.A., Hájek M., Hájek O., Hájková P.,
        Horsáková V., Kočí M., Kubešová S., Lustyk P., Nekola J.C., Preislerová Z., Resl P. &amp; Valachovič M.
      </strong>{' '}
      (2017): Refugial ecosystems in central Asia as indicators of biodiversity change during the Pleistocene-Holocene
      transition. <em>Ecological Indicators</em> 77: 357-367. -&nbsp;
      <a href="https://ac.els-cdn.com/S1470160X1630721X/1-s2.0-S1470160X1630721X-main.pdf?_tid=1a6f5e4c-f51f-11e7-b647-00000aab0f6b&amp;acdnat=1515490140_16d3b1ec63076ecd42b4c6e755a77e54">
        fulltext&nbsp;on&nbsp;ScienceDirect
      </a>
    </li>
    <li>
      <strong>Lapčík O., Horsák M. &amp; Horsáková V.</strong> (2017): Kam se točí ulity. <em>Vesmír</em> 96: 343.{' '}
    </li>
    <li>
      <strong>Lizoňová T. &amp; Horsák M.</strong> (2017): Contrasting diversity of testate amoebae communities in{' '}
      <em>Sphagnum</em> and brown-moss dominated patches in relation to shell counts.{' '}
      <em>European Journal of Protistology</em> 58: 135-142. -&nbsp;
      <a href="https://ac.els-cdn.com/S093247391730038X/1-s2.0-S093247391730038X-main.pdf?_tid=spdf-55e2538c-1fa3-4430-be6a-bb93520f3863&amp;acdnat=1519740193_db9a99a3d8d6796e92633ae908e7ddca">
        fulltext&nbsp;on&nbsp;ScienceDirect
      </a>
    </li>
    <li>
      <strong>Mikulášková E., Veleba A., Šmerda J., Knoll A. &amp; Hájek M.</strong> (2017): Microsatellite variation in
      three calcium-tolerant species of peat moss detected specific genotypes of <em>Sphagnum warnstorfii</em> on
      magnesium-rich bedrock. <em>Preslia</em> 89: 101-114. -&nbsp;
      <a href="http://www.preslia.cz/P172Mikulaskova.pdf">fulltext&nbsp;pdf&nbsp;file</a>
    </li>
    <li>
      <strong>Navrátilová J., Hájek M., Navrátil J., Hájková P. &amp; Frazier R.J.</strong> (2017): Convergence and
      impoverishment of fen communitiesin a eutrophicated agricultural landscape of the CzechRepublic.{' '}
      <em>Applied Vegetation Science</em> 20: 225-235. -&nbsp;
      <a href="http://onlinelibrary.wiley.com/doi/10.1111/avsc.12298/epdf">
        fulltext&nbsp;in&nbsp;Wiley&nbsp;Online&nbsp;Library
      </a>
    </li>
    <li>
      <strong>
        Palpurina S., Wagner V., von Wehrden H., Hájek M., Horsák M., Brinkert A., Hölzel N., Wesche K., Kamp J.,
        Hájková P., Danihelka J., Lustyk P., Merunková K., Preislerová Z., Kočí M., Kubešová S., Cherosov M., Ermakov
        N., German D., Gogoleva P., Lashchinsky N., Martynenko V. &amp; Chytrý M.{' '}
      </strong>{' '}
      (2017): The relationship between plant species richness and soil pH vanishes within creasing aridity across
      Eurasian drygrasslands. <em>Global Ecology and Biogeography</em> 26: 425-434. -&nbsp;
      <a href="http://onlinelibrary.wiley.com/doi/10.1111/geb.12549/epdf">
        fulltext&nbsp;in&nbsp;Wiley&nbsp;Online&nbsp;Library
      </a>
    </li>
    <li>
      <strong>
        Peterka T., Hájek M., Jiroušek M., Jiménez-Alfaro B., Aunina L., Bergamini A., Dítě D., Felbaba-Klushyna L.,
        Graf U., Hájková P., Hettenbergerová E., Ivchenko T.G., Jansen F., Koroleva N.E., Lapshina E.D., Lazarević P.M.,
        Moen A., Napreenko M.G., Pawlikowski P., Plesková Z., Sekulová L., Smagin V.A., Tahvanainen T., Thiele A.,
        Biţă-Nicolae C., Biurrun I., Brisse H., Ćušterevska R., De Bie E., Ewald J., FitzPatrick Ú., Font X., Jandt U.,
        Kązcki Z., Kuzemko A., Landucci F., Moeslund J.E., Pérez-Haase A., Rašomavičius V., Rodwell J.S., Schaminée
        J.H.J., Šilc U., Stancić Z. &amp; Chytrý M.
      </strong>{' '}
      (2017): Formalized classification of European fen vegetation at the alliance level.{' '}
      <em>Applied Vegetation Science</em> 20: 124-142. -&nbsp;
      <a href="http://onlinelibrary.wiley.com/doi/10.1111/avsc.12271/pdf">
        fulltext&nbsp;in&nbsp;Wiley&nbsp;Online&nbsp;Library
      </a>
    </li>
    <li>
      <strong>Peterka T., Kalníková V. &amp; Plesková Z.</strong> (2017): <em>Pseudocalliergon lycopodioides</em>, a new
      bryophyte species for Montenegro. <em>Herzogia</em> 30: 496-500.{' '}
    </li>
    <li>
      <strong>Szabó P., Gálová A., Jamrichová E., Šumberová K., Šipoš J. &amp; Hédl R.</strong> (2017): Trends and
      events through seven centuries: the history of a wetland landscape in the Czech Republic.{' '}
      <em>Regional Environmental Change</em> 17: 501-514. -&nbsp;
      <a href="http://download.springer.com/static/pdf/107/art%253A10.1007%252Fs10113-016-1033-0.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Farticle%2F10.1007%2Fs10113-016-1033-0&amp;token2=exp=1488984526~acl=%2Fstatic%2Fpdf%2F107%2Fart%25253A10.1007%25252Fs10113-016-1033-0.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Farticle%252F10.1007%252Fs10113-016-1033-0*~hmac=a77b4306f56447d8b77479bfb9807a576d37141f510f0b3f4511f54a4e309924">
        fulltext&nbsp;on&nbsp;SpringerLink
      </a>
    </li>
    <li>
      <strong>Vicherová E., Hájek M., Šmilauer P. &amp; Hájek T.</strong> (2017): <em>Sphagnum</em> establishment in
      alkaline fens: Importance of weather and water chemistry. <em>Science of the Total Environment</em> 580:
      1429-1438. -&nbsp;
      <a href="http://ac.els-cdn.com/S0048969716327978/1-s2.0-S0048969716327978-main.pdf?_tid=d83c01b0-0401-11e7-8f31-00000aacb35d&amp;acdnat=1488979342_d55671d5e18b575050c8e4327bf24a4b">
        fulltext&nbsp;on&nbsp;ScienceDirect
      </a>
    </li>
  </ul>
)
