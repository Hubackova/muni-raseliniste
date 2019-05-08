import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";

import Databases from "../components/homepage/Databases";
import Backarrow from "../components/atoms/Backarrow";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";
import { mireEcologyTextCz, mireEcologyTextEn, results } from "../content/topics";

const Relicts = () => {
  const getResults = results => {
    return results.map((i, index) => <li key={index}>{i}</li>);
  };
  return (
    <Consumer>
      {({ int }) => (
        <ContainerWrapper>
          <div style={{ flex: 1 }}>
            <Backarrow to="" />
            <h2>{int === "en" ? en.mireEcology : cz.mireEcology}</h2>
            <div>{int === "en" ? mireEcologyTextEn : mireEcologyTextCz}</div>
            <h2>{int === "en" ? en.mainResults : cz.mainResults}</h2>
            <div>{getResults(results.mireEcologyResults)}</div>
          </div>
          <Databases text={int === "en" ? en : cz} style={{ flex: 1 }} />
        </ContainerWrapper>
      )}
    </Consumer>
  );
};

export default Relicts;

Relicts.propTypes = {
  location: PropTypes.object
};
