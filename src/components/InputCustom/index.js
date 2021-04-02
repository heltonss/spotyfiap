import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "./style";

const InputCustom = ({
  label,
  type,
  func,
  submit = undefined,
  placeholder = "",
}) => {
  const action = (event) => {
    if (event.keyCode === 13 && submit) {
      submit();
    }
  };

  return (
    <Label htmlFor={label}>
      {label}
      <Input
        id={label}
        type={type}
        onChange={(event) => func(event.target.value)}
        onKeyDown={(e) => action(e)}
        placeholder={placeholder}
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
