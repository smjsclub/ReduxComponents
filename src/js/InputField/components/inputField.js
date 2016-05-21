/**
 * InputField component to get user input and to add placeholder text
 * @param {String}
 * @return {String}
 * @author Chetan Meshram <meshram.chetan@gmail.com>
 */


import React from "react";
require ("../style/style.scss");

const InputField = () => {
  return (
    <div>
      <label htmlFor="inputField">First Name</label>
      <input id="inputField" type="text" />
    </div>
  );
};

export default InputField;
