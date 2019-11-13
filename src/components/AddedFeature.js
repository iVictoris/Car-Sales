import React from "react";
import { connect } from "react-redux";
import { deleteFeature } from "../actions/";

const AddedFeature = ({ feature, deleteFeature }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => deleteFeature(feature)}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default connect(null, { deleteFeature })(AddedFeature);
