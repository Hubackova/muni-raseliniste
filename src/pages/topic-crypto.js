import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";

import Databases from "../components/homepage/Databases";
import Backarrow from "../components/atoms/Backarrow";
import ContainerWrapper from "../components/atoms/ContainerWrapper";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/general";
import {
    cryptogamologyTextEn,
    cryptogamologyTextCz,
  results
} from "../content/topics";

const Relicts = () => {
  const getResults = results => {
    return results.map((i, index) => <li key={index}>{i}</li>);
  };
  return (
    <Consumer>
      {context => (
        <ContainerWrapper><div><Backarrow to="" />
        <h2>{context.int === "en" ? en.cryptogamology : cz.cryptogamology}</h2>
        <div>
          {context.int === "en" ? cryptogamologyTextEn : cryptogamologyTextCz}
        </div>
        <h2>{context.int === "en" ? en.mainResults : cz.mainResults}</h2>
        <div>{getResults(results.cryptogamologyResults)}</div></div>
          
          <Databases data={context.int === "en" ? en : cz} />
        </ContainerWrapper>
      )}
    </Consumer>
  );
};

export default Relicts;

Relicts.propTypes = {
  location: PropTypes.object
};
