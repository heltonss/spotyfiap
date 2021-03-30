import React from "react";
import PropTypes from "prop-types";
import { Button } from "./style";

const ButtonCustom = ({
  label,
  type,
  background,
  colorFont,
  disabled,
  func,
}) => {
  return (
    <Button
      background={background}
      colorFont={colorFont}
      type={type}
      onClick={func}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

ButtonCustom.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  func: PropTypes.func,
  background: PropTypes.string,
  colorFont: PropTypes.string,
};

export default ButtonCustom;
