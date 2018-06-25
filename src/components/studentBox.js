import React, {Component} from "react";
import styled from "styled-components";
import researchgate from "../pages/images/social-researchgate.png";
import is from "../pages/images/social-is.png";
class PersonBox extends Component {

    render() {
      const {img, personInfo} = this.props

        return (
        <Box>
            <BoxPart>
                <BoxSubPart><Img src={img} alt={personInfo.name}/>
                </BoxSubPart>
            </BoxPart>
            <BoxPart >
                <Name>{personInfo.name}
                </Name>
                <div><u>Email</u>: {personInfo.email}</div>
                <div><u>Telefon</u>: {personInfo.phone}</div>
                <div><b>Práce: </b>{personInfo.thesis}</div>
                <div>
                    <b>Školitel: </b>{personInfo.supervisor}
                </div><a href={personInfo.is || '#'}><img src={is}/></a>
                                    <a href={personInfo.researchgate || '#'}><img src={researchgate}/></a>

            </BoxPart>

        </Box>
);
}}
export default PersonBox;


const Box = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 300px;
  min-height: 300px;
  padding: 0.4em;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    min-width: 200px;
    min-height: 200px;
  }
`;

const Name = styled.h3`
    display: flex;
    color: #46ACC2;
    text-transform: uppercase;
    margin-top: 0;
    border-bottom: 0.08em solid rgb(229, 229, 229);
 `

const BoxPart = styled.div`
    padding: 1em;
 `

 const BoxSubPart = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
 `

const Img = styled.img`
  max-height: 200px
`;