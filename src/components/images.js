import React, {Component} from "react";
import styled from "styled-components";
import hp01 from "../pages/images/homepage/hp01.jpg";
import hp02 from "../pages/images/homepage/hp02.jpg";
import hp03 from "../pages/images/homepage/hp03.jpg";
import hp04 from "../pages/images/homepage/hp04.jpg";
import hp05 from "../pages/images/homepage/hp05.jpg";
import hp06 from "../pages/images/homepage/hp06.jpg";
import hp07 from "../pages/images/homepage/hp07.jpg";
import hp08 from "../pages/images/homepage/hp08.jpg";
import hp09 from "../pages/images/homepage/hp09.jpg";
import hp10 from "../pages/images/homepage/hp10.jpg";

const imgs = [hp01, hp02, hp03, hp04, hp05, hp06, hp07, hp08, hp09, hp10] //do props

class Images extends Component {
    state = {imgIndex: 0}

    pictureChanger = () => {
        if (this.state.imgIndex<imgs.length-1) {
            this.setState((prevState) => ({imgIndex: prevState.imgIndex + 1}))
        } else {
            this.setState({imgIndex: 0})
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.pictureChanger()
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    pictureDotChange = (i) => {
        this.setState({imgIndex: i})
    }

    render() {
        const dots = imgs.map((i, index) =>
            <RoundDot key={i} active={this.state.imgIndex === index} onClick={() => this.pictureDotChange(index)}/>
        )

        return (
            <Container>
            <ImgWrapper>
                <Img src={imgs[this.state.imgIndex]} />
            </ImgWrapper>
            <DotsWrapper>{dots}</DotsWrapper>
            </Container>
);
}}
export default Images;

const Container = styled.div`
  padding-top: 15px;
 `
const Img = styled.img`
   object-fit: none;
   max-height: 250px;
   width: 85%;
   @media (max-width: ${props => props.theme.mediumDevice}) {
     object-fit: contain;
     width: 100%;
     max-height: 150px;
  }
 `
const ImgWrapper = styled.div`
   height: 250px;
   background-color: black;
   text-align: center;
   @media (max-width: ${props => props.theme.mediumDevice}) {
    height: 150px;
   }
 `

const DotsWrapper = styled.div`
    text-align: center;
    padding-top: 10px;
 `

const RoundDot = styled.div`
    height: 20px;
    width: 20px;
    background-color:  ${props => props.active ? props.theme.secondary : 'lightgrey'};
    border:  ${props => props.active ? `1px solid ${props.active}` : '1px solid lightgrey'};
    border-radius: 50%;
    display: inline-block;
    margin: 1px;
    cursor: pointer;
    &:hover {
       border: 1px solid ${props => props.theme.black};
    }
`
