import React, {Component} from "react";
import styled from "styled-components";
import hp01 from "../pages/images/homepage/hp01.jpg";
import hp02 from "../pages/images/homepage/hp02.jpg";
import hp03 from "../pages/images/homepage/hp03.jpg";
import hp04 from "../pages/images/homepage/hp04.jpg";
import hp05 from "../pages/images/homepage/hp05.jpg";

const imgs = [hp01, hp02, hp03, hp04, hp05] //do props

class Images extends Component {
    state = {imgIndex: 0}
    componentDidMount() {
         setTimeout(()=> this.pictureChanger(), 3000)
    }

    componentDidUpdate() {
         setTimeout(()=> this.pictureChanger(), 3000)
    }

    pictureChanger = () => {
        if (this.state.imgIndex<imgs.length-1) {
            this.setState((prevState) => ({imgIndex: prevState.imgIndex + 1}))
        } else {
            this.setState({imgIndex: 0})
        }
    }

    render() {
        const dots = imgs.map((i, index) => <RoundDot key={i} active={this.state.imgIndex === index}>{false && <InnerDot key={i} active={this.state.imgIndex === index}/>}</RoundDot>)

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
   position: relative;
   paddingLeft: 1000px;
 `
  const Img = styled.img`
   object-fit: none;
   height: 250px;
   width: 85%;
    @media (max-width: ${props => props.theme.mediumDevice}) {
      width: 100%;
    }
 `
  const ImgWrapper = styled.div`
   height: 250px;
   background-color: black;
   text-align: center;
 `

  const DotsWrapper = styled.div`
    position: absolute;
    bottom: 8px;
    left: 50%;
 `

   const RoundDot = styled.div`
  height: 20px;
  width: 20px;
  background-color:  ${props => props.active ? props.theme.secondary : 'lightgrey'};
  border:  ${props => props.active ? `1px solid ${props.active}` : '1px solid lightgrey'};
  border-radius: 50%;
  display: inline-block;
  margin: 1px
 `
   const InnerDot = styled.span`
  height: 10px;
  width: 10px;
  background-color:  ${props => props.active ? 'white' : 'lightgrey'};
  border-radius: 50%;
  display: inline-block;
 `