import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "gatsby"

import Layout from "../components/layout";
import StaffBox from "../components/staffBox"
import H2 from "../components/atoms/h2";
import {hajekInfo} from "./people"

class StaffDetail extends Component {
    render() {
        const {personInfo} = this.props
        return (
        <Layout>
            <NarrowContainer>
                <H2>{hajekInfo.name}</H2>
                <StaffBox personInfo={hajekInfo} />
                <div>{hajekInfo.description}</div>
                <StyledLink to="/people/"><i className="fa fa-arrow-left"></i></StyledLink>
            </NarrowContainer>
        </Layout>
        );
    }
}

export default StaffDetail;

const StyledLink = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;

const NarrowContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    @media (max-width: ${props => props.theme.mediumDevice}) {
        width: 100%;
    }
`;