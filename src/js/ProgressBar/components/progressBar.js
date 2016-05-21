/**
 * ProgressBar component shows the completion of a flow or process
 * @param {Object}
 * @return {Object}
 * @author Jyoti Kaustuv Nanda <j_k_nanda@hotmail.com>
 */

import React, {PropTypes} from "react";

const {string, object, func, array, number} = PropTypes;

const ProgressBar = (props) => {
  return (
    <div>
      <h4>Progress Bar</h4>
    </div>
  );
};

ProgressBar.propTypes = {
  noOfSteps: number.isRequired,
  steps: array.isRequired
};

export default ProgressBar;
