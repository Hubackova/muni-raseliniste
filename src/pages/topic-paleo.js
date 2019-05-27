import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import { graphql } from "gatsby";
import Databases from "../components/homepage/Databases";
import Backarrow from "../components/atoms/Backarrow";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";
import { palaeoEcologyTextEn, palaeoEcologyTextCz, results } from "../content/topics";
import Img from "gatsby-image";

const Paleo = ({ data }) => {
  const getResults = results => {
    return results.map((i, index) => <li key={index}>{i}</li>);
  };
  const imgs = data.images.edges.map((i, index) => (
    <Img key={index} fluid={i.node.childImageSharp.fluid} />
  ));
  return (
    <Consumer>
      {({ int }) => (
        <ContainerWrapper>
          <div style={{ flex: 4, paddingRight: "1em" }}>
            <Backarrow to="" />
            <h2>{int === "en" ? en.palaeoEcology : cz.palaeoEcology}</h2>
            <div>{int === "en" ? palaeoEcologyTextEn : palaeoEcologyTextCz}</div>
            <h2>{int === "en" ? en.mainResults : cz.mainResults}</h2>
            <div>{getResults(results.palaeoEcologyResults)}</div>
          </div>
          <div style={{ flex: 1 }}>{imgs}</div>
          <Databases text={int === "en" ? en : cz} style={{ flex: 1 }} />
        </ContainerWrapper>
      )}
    </Consumer>
  );
};

export default Paleo;

Paleo.propTypes = {
  location: PropTypes.object
};

export const query = graphql`
  query {
    images: allFile(
      filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { eq: "research-paleo" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
