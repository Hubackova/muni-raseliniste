import React, {Component, Fragment} from "react";
import styled from "styled-components";

import StaffBox from "../components/staffBox"
import helesic from "./images/helesic.jpg";
import omesova from "./images/omesova.jpg";
import sychra from "./images/sychra.jpg";
import zahradkova from "./images/zahradkova.jpg";
import paril from "./images/paril.jpg";
import Layout from "../components/layout";
const helesicInfo = {
    name: "Jan Helešic",
    position: "vedoucí pracovní skupiny Laboratoř biologie tekoucích vod",
    research: ["V době studia se věnoval ornitologii a chiropterologii",
     "Do roku 1990 pracoval v resortním ústavu Ministerstva dopravy, kde se věnoval se toxikologii, ochraně povrchových a podzemních vod a čistírenství",
     "Po návratu na MU se zpočátku věnoval ekotoxikologii a detekci znečištění prostředí perzistentními polutanty." ,
     "Specialista na řád pošvatky (Plecoptera), bioindikace stavu tekoucích vod (habilitace v roce 1999).",
     "Nyní se především věnuje ekologii tekoucích vod, hyporealu, procesům na a v říčním dně a obecným problémům populací a společenstev vodních bezobratlých."],
    email: "helesic@sci.muni.cz",
    researchgate: 'https://www.researchgate.net/profile/Jan_Helesic2',
    is: 'https://is.muni.cz/osoba/580'
}

const zhaiInfo = {
    name: "Marie Zhai",
    position: "",
    research: ["Marie Zhai je výzkumnou pracovnicí na Ústavu botaniky a zoologie Masarykovy univerzity a v současnosti se věnuje především mikroskopickým korýšům v tekoucích vodách. Tématem její magisterské práce byly planktonní korýši žijící v tůních a jejich sezónní dynamika. V roce 2007 obhájila dizertační práci na téma Časová a prostorová distribuce společenstva bezobratlých v hyporeálu štěrkovitého toku. Její vyvolenou skupinou korýšů jsou plazivky (Harpacticoida)."],
    email: "marie.zhai@yahoo.com"
}

const sychraInfo = {
    name: "Jan Sychra",
    position: "",
    research: ["Jan Sychra je studentem prezenční formy doktorského studijního programu biologie v oboru hydrobiologie. Během magisterského studia se zabýval výzkumem hnízdní biologie potápek (Podicipediformes) a jejich potravní nabídkou na rybnících. Diplomovou práci na toto téma obhájil v roce 2004. Z tohoto období vyplynulo jeho zaměření na studium rybničního ekosystému v širších souvislostech. Kromě výzkumu vodních ptáků se to týká především vodních bezobratlých živočichů rybničního litorálu, kteří žijí v asociaci s vodními makrofyty (hlavně Hirudinea, Coleoptera a Heteroptera). Tomuto tématu je věnována zpracovávaná disertační práce."],
    email: ""
}

const zahradkovaInfo = {
    name: "Světlana Zahrádková",
    position: "",
    research: ["Světlana Zahrádková pracuje jako docent na Ústavu botaniky a zoologie Masarykovy university. Její výzkum je zaměřen na makrozoobentos (především řád Ephemeroptera - jepice) a hodnocení ekologického stavu tekoucích vod. Studovala obor Systematická zoologie na Masarykově univerzitě. Diplomová práce, kterou obhájila v roce 1980, se týkala saprobiologických poměrů toků brněnské aglomerace. V doktorské práci (1999) studovala referenční taxocény jepic malých toků. V roce 2003 byla jmenována docentem, habilitační práce byla zaměřena na problematiku vývoje metod hodnocení ekologického stavu toků. V současné době se věnuje tématu hodnocení dlouhodobých změn akvatických biotopů prostřednictvím modelových skupin vodního hmyzu (jepice a pošvatky)."],
    email: ""
}

const parilInfo = {
    name: "Petr Pařil",
    position: "",
    research: ["Petr Pařil studoval obor Systematická zoologie a ekologie na Masarykově univerzitě. Diplomová práce, kterou obhájil v roce 1992, byla zaměřena na studium ekologické kvality toku v Moravském Krasu. Od roku 2002 do 2004 pracoval na Přírodovědecké fakultě MU v Brně v rámci mezinárodního projektu STAR. Následně nastoupil v roce 2005 na Katedru zoologie a ekologie jako odborný pracovník v rámci Výzkumného záměru. Aktuální výzkumné aktivity související s kombinovanou formou doktorského studia (od r. 2005) jsou zaměřeny na terénní výzkum bezobratlých živočichů malého vysychavého toku, zejména skupin Oligochaeta a Diptera. Těmto skupinám a částečně i problematice hydromorfologie se věnuje v rámci expertní činnosti při zavádění Rámcové směrnice o vodách (WFD) a systému PERLA do praxe. "],
    email: ""
}

class Staff extends Component {
    render() {
        return (<Layout>
  <Container>
  <StaffBox img={helesic} personInfo={helesicInfo} />
  <StaffBox img={paril} personInfo={parilInfo} />
  <StaffBox img={zahradkova} personInfo={zahradkovaInfo} />
  <StaffBox img={omesova} personInfo={zhaiInfo} />
  <StaffBox img={sychra} personInfo={sychraInfo} />
</Container></Layout>
);
}}
export default Staff;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
