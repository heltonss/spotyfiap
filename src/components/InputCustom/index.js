import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "./style";

const InputCustom = ({ label, type, func }) => {
  return (
    <Label htmlFor={label}>
      {label}
      <Input
        id={label}
        type={type}
        onChange={(event) => func(event.target.value)}
      />
    </Label>
  );
};

InputCustom.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  func: PropTypes.func,
};

export default InputCustom;
