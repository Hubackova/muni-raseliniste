import React, {Component} from "react";
import styled from "styled-components";
import researchgate from "../pages/images/social-researchgate.png";
import email from "../pages/images/social-email.png";
import is from "../pages/images/social-is.png";

class StaffBox extends Component {
    render() {
      const {img, personInfo} = this.props
      const research = personInfo.research.map(i => {
            return <li key={i}>{i}</li>;
          })
        return (
        <Box>
            <BoxPart style={{flex: 1}}>
                <BoxSubPart><img src={img} alt={personInfo.name}/></BoxSubPart>
                <BoxSubPart style={{paddingTop: '1em'}}>
                    <a href={`mailto:${personInfo.email}` || '#'}><img src={email}/></a>
                    <a href={personInfo.researchgate || '#'}><img src={researchgate}/></a>
                    <a href={personInfo.is || '#'}><img src={is}/></a>
                </BoxSubPart>
            </BoxPart>
            <BoxPart style={{flex: 5}}>
                <Name>{personInfo.name}
                <div style={{fontSize: '0.8em', color: '#778899'}}>{personInfo.position}</div>
                </Name>
                <div>
                    {research}
                </div>
            </BoxPart>

        </Box>
);
}}
export default StaffBox;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 18em;
  min-height: 18em;
  padding: 1em;
  border-bottom: 0.1em solid #46ACC2;
  line-height: 1.6em;
  @media (max-width: ${props => props.theme.mediumDevice}) {
    flex-direction: column;
  }
`;

const Name = styled.h3`
    color: ${props => props.theme.main};
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