import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import validator from "email-validator";

import { Input, Label, Small } from "./style";

const InputCustom = ({ label, func }) => {
  const [invalidEmail, setInvalidEmail] = useState(false);

  return (
    <Label htmlFor={label}>
      {label}
      <Input
        id={label}
        type="email"
        onChange={(event) => {
          setInvalidEmail(!validator.validate(event.target.value));
          func(event.target.value);
        }}
      />
      {invalidEmail && <Small>utilize um e-mail válido</Small>}
    </Label>
  );
};

InputCustom.propTypes = {
  label: PropTypes.string.isRequired,
  func: PropTypes.func,
};

export default InputCustom;
