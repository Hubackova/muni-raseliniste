import React, {Component} from "react";
import styled from "styled-components";

import StudentBox from "../components/studentBox"

const hrivovaInfo = {
    name: "Dana Hřívová",
    thesis: "Taxocenózy plazivek (Copepoda: Harpacticoida) na prameništních slatiništích Západních Karpat",
    supervisor: "Marie Zhai",
    email: "323984@mail.muni.cz"
}

const dalsiInfo = {
    name: "Někdo Další",
    thesis: "Téma diplomové nebo magisterské práce",
    supervisor: "Jméno Školitele",
    email: "111111@mail.muni.cz"
}

const personLink = "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/person.png"

class Students extends Component {
    render() {
        return (
  <Container>
  <StudentBox img={personLink} personInfo={hrivovaInfo} />
  <StudentBox img={personLink} personInfo={dalsiInfo} />
  <StudentBox img={personLink} personInfo={dalsiInfo} />
  <StudentBox img={personLink} personInfo={dalsiInfo} />
  <StudentBox img={personLink} personInfo={dalsiInfo} />
  <StudentBox img={personLink} personInfo={dalsiInfo} />
</Container>
);
}}

export default Students;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;