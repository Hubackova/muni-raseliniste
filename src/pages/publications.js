import React from "react"
import Layout from "../components/layout";
import Container from "../components/container";

const papers_2017 = [
"Beran L., Juřičková L. & Horsák M. (2017): Mollusca (měkkýši). In: Hejda R., Farkač J. & Chobot K. (eds.). Červený seznam ohrožených druhů České republiky. Bezobratlí. (Red List of threatened species of the Czech Republic. Invertebrates.). Příroda 36: 70-76.",
"Bryja J., Horsák M., Horsáková V., Řehák Z. & Zukal J. (2017): Zoologické dny Brno 2017. Sborník abstraktů z konference 9.-10. února 2017. Pp. 254.",
"Dítě D., Peterka T., Dítětová Z., Hájková P. & Hájek M. (2017): Arcto-alpine species at Their Niche Margin: The Western Carpathian refugia of Juncus castaneus and J. triglumis in Slovakia. Annales Botanici Fennici 54: 67-82.",
"Dřevojan P., Eckstein J., Hájek M., Hájková P., Hradílek Z., Košnar J., Kučera J., Šímová A. & Vicherová E. (2017): Zajímavé bryofloristické nálezy XXVIII. Bryonora 60: 65-69. - fulltext in pdf",
"Ďurčanová P., Jiroušek M. & Peterka T. (2017): Pozoruhodné nálezy Sphagnum affine a ďalších rašelinníkov v severnej časti západných Karpát na Slovensku. Bryonora 59: 58-66. - fulltext in pdf",
"Frodlová J., Hájková P. & Horsák M. (2017): Effect of sample size and resolution on palaeomalacological interpretation: a case study from Holocene calcareous-fen deposits. Journal of Quaternary Science 33: 68-78.",
"Geisen S., Mitchell E.A.D., Wilkinson D.M., Adl S., Bonkowski M., Brown M.W., Fiore-Donno A.M., Heger T.J., Jassey V.E.J., Krashevska V., Lahr D.J.G., Marcisz K., Mulot M., Payne R., Singer D., Anderson O.R., Charman D.J., Ekelund F., Griffiths B.S., Rønn R., Smirnov A., Bass D., Belbahri L., Berney C., Blandenier Q., Chatzinotas A., Clarholm M., Dunthorn M., Feest A., Fernandez L.D., Foissner W., Fournier B., Gentekaki E., Hájek M., Helder J., Jousset A., Koller R., Kumar S., La Terza A., Lamentowicz M., Mazei Y., Santos S.S., Seppey C.V.W., Spiegel F.W., Walochnik J., Winding A. & Lara E. (2017): Soil protistology rebooted: 30 fundamental questions to start with. Soil Biology and Biochemistry 111: 94-103. - fulltext on ScienceDirect",
"Hájek M., Dresler P., Hájková P., Hettenbergerová E., Milo P., Plesková Z. & Pavonič M. (2017): Long-lasting imprint of former glassworks on vegetation pattern in an extremely species-rich grassland: a battle of species pools on mesic soils. Ecosystems 20: 1233-1249. - fulltext on SpringerLink",
"Horsák M. (2017): Boděnka Ložkova a vrkoč Chytrého: dvě velká jména pro malé plže. Živa 6: 298-300.",
"Horsák M. (2017): S Lucií Juřičkovou o tom, jaké je to učit se od klasiků a proč studovat plže. Živa 5: CXLV-CXLVI.",
"Horsák M., Hájek M., Horsáková V., Hlaváč J., Hájková P., Dítě D., Peterka T., Divíšek J., Potůčková A. & Preece R.C. (2017): Refugial occurrence and ecology of the land snail Vertigo lilljeborgi in fen habitats in temperate mainland Europe. Journal of Molluscan Studies 83: 451-460.",
"Horsák M., Juřičková L. & Škodová J. (2017): Pod svícnem bývá tma - identita záhadné fosilní zrnovky z Brna odhalena. Živa 65: 124-125.",
"Horsák M., Tajovská E. & Horsáková V. (2017): Calcareous forest seepages acting as biodiversity hotspots and refugia for woodland snail faunas. Acta Oecologica - International Journal of Ecology 82: 16-22. - fulltext on ScienceDirect",
"Horsáková V. & Horsák M. (2017): Vrkoči - malí, ale výjimeční. Vesmír 96: 174-175.",
"Hošek J., Lisá L., Hambach U., Petr L., Vejrostová L., Bajer A., Grygar T.M., Moska P., Gottvald Z. & Horsák M. (2017): Middle Pleniglacial pedogenesis on the northwestern edge of the Carpathian basin: A multidisciplinary investigation of the Bíňa pedo-sedimentary section, SW Slovakia. Palaeogeography, Palaeoclimatology, Palaeoecology 487: 321-339. - fulltext on ScienceDirect",
"Chytrý M., Horsák M., Syrovátka V., Danihelka J., Ermakov N., German D.A., Hájek M., Hájek O., Hájková P., Horsáková V., Kočí M., Kubešová S., Lustyk P., Nekola J.C., Preislerová Z., Resl P. & Valachovič M. (2017): Refugial ecosystems in central Asia as indicators of biodiversity change during the Pleistocene-Holocene transition. Ecological Indicators 77: 357-367. - fulltext on ScienceDirect",
"Lapčík O., Horsák M. & Horsáková V. (2017): Kam se točí ulity. Vesmír 96: 343.",
"Lizoňová T. & Horsák M. (2017): Contrasting diversity of testate amoebae communities in Sphagnum and brown-moss dominated patches in relation to shell counts. European Journal of Protistology 58: 135-142. - fulltext on ScienceDirect",
"Mikulášková E., Veleba A., Šmerda J., Knoll A. & Hájek M. (2017): Microsatellite variation in three calcium-tolerant species of peat moss detected specific genotypes of Sphagnum warnstorfii on magnesium-rich bedrock. Preslia 89: 101-114. - fulltext pdf file",
"Navrátilová J., Hájek M., Navrátil J., Hájková P. & Frazier R.J. (2017): Convergence and impoverishment of fen communitiesin a eutrophicated agricultural landscape of the CzechRepublic. Applied Vegetation Science 20: 225-235. - fulltext in Wiley Online Library",
"Palpurina S., Wagner V., von Wehrden H., Hájek M., Horsák M., Brinkert A., Hölzel N., Wesche K., Kamp J., Hájková P., Danihelka J., Lustyk P., Merunková K., Preislerová Z., Kočí M., Kubešová S., Cherosov M., Ermakov N., German D., Gogoleva P., Lashchinsky N., Martynenko V. & Chytrý M. (2017): The relationship between plant species richness and soil pH vanishes within creasing aridity across Eurasian drygrasslands. Global Ecology and Biogeography 26: 425-434. - fulltext in Wiley Online Library",
"Peterka T., Hájek M., Jiroušek M., Jiménez-Alfaro B., Aunina L., Bergamini A., Dítě D., Felbaba-Klushyna L., Graf U., Hájková P., Hettenbergerová E., Ivchenko T.G., Jansen F., Koroleva N.E., Lapshina E.D., Lazarević P.M., Moen A., Napreenko M.G., Pawlikowski P., Plesková Z., Sekulová L., Smagin V.A., Tahvanainen T., Thiele A., Biţă-Nicolae C., Biurrun I., Brisse H., Ćušterevska R., De Bie E., Ewald J., FitzPatrick Ú., Font X., Jandt U., Kązcki Z., Kuzemko A., Landucci F., Moeslund J.E., Pérez-Haase A., Rašomavičius V., Rodwell J.S., Schaminée J.H.J., Šilc U., Stancić Z. & Chytrý M. (2017): Formalized classification of European fen vegetation at the alliance level. Applied Vegetation Science 20: 124-142. - fulltext in Wiley Online Library",
"Peterka T., Kalníková V. & Plesková Z. (2017): Pseudocalliergon lycopodioides, a new bryophyte species for Montenegro. Herzogia 30: 496-500.",
"Szabó P., Gálová A., Jamrichová E., Šumberová K., Šipoš J. & Hédl R. (2017): Trends and events through seven centuries: the history of a wetland landscape in the Czech Republic. Regional Environmental Change 17: 501-514. - fulltext on SpringerLink",
"Vicherová E., Hájek M., Šmilauer P. & Hájek T. (2017): Sphagnum establishment in alkaline fens: Importance of weather and water chemistry. Science of the Total Environment 580: 1429-1438. - fulltext on ScienceDirect"
]

const Publications = props => {
    const papers2017 = papers_2017.map(i => {
            return <li key={i}>{i}</li>;
          })
    return (
    <Layout>
        <Container>
            <h2>2017</h2>
            <ul>
            {papers2017}
            </ul>
            <h2>2016</h2>
            <ul>
            {papers2017}
            </ul>
        </Container>
    </Layout>
    );
};

Publications.propTypes = {

};

export default Publications;