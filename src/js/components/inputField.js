/**
 * InputField component to get user input and to add placeholder text
 * @param {String}
 * @return {String}
 * @author Chetan Meshram <meshram.chetan@gmail.com>
 */


import React from "react";

const InputField = () => {
  return (
    <div>
      <label htmlFor="inputField">
        <input id="inputField" type="text" />
      </label>
    </div>
  )
}

export default InputField;
