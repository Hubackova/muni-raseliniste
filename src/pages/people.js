import React, { Component } from "react";
import { Consumer } from "../layouts/Context";
import styled from "styled-components";
import People from "../components/people/People";
import { staffCz, staffEn } from "../content/staff";
import { studentsCz, studentsEn } from "../content/students";
import { cz, en } from "../content/general";

class Staff extends Component {
  render() {
    return (
      <Consumer>
        {({int}) => (
          <Container>
            <People
              staffData={int === "en" ? staffEn : staffCz}
              studentsData={int === "en" ? studentsEn : studentsCz}
              data={int === "en" ? en : cz}
            />
          </Container>
        )}
      </Consumer>
    );
  }
}

export default Staff;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;
