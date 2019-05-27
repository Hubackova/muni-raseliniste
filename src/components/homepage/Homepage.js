import React from "react";
import PropTypes from "prop-types";

const Homepage = ({ data, toggleShowFulltext, showAll }) => {
  return (
    <div style={{ flex: 1, paddingRight: "1em" }}>
      <h2>{data.introHeader}</h2>
      <div>
        <p>
          {showAll ? data.introText : data.introTextShort}

          <span style={{ color: "red", cursor: "pointer" }} onClick={toggleShowFulltext}>
            {showAll ? data.hideFullText : data.showFullText}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;

Homepage.propTypes = {
  selectTopic: PropTypes.string,
  showAll: PropTypes.bool,
  toggleShowFulltext: PropTypes.func,
  data: PropTypes.object
};
