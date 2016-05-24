/**
 * ProgressBar component shows the completion of a flow or process
 * @param {Object}
 * @return {Object}
 * @author Jyoti Kaustuv Nanda <j_k_nanda@hotmail.com>
 */

require("../style/progressBar.scss");
import React, {PropTypes} from "react";

const {array} = PropTypes;

const ProgressBar = (props) => {
  const {steps} = props;
  const list = steps.map((item) => {
    return (
        <li id={item.name} key={item.name}>{item.label}</li>
    );
  });

  return (
    <div className="progress-bar">
      <h2>Progress Bar</h2>
      <ul>
        {list}
      </ul>
    </div>
  );
};

ProgressBar.propTypes = {
  steps: array.isRequired
};

export default ProgressBar;
