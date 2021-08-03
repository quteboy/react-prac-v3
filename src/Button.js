import React from "react";
import "./components/Button.css";

const STYLES = ["btn--primary", "btn--secondary", "btn--outline"];
const SIZES = ["btn-medium", "btn-large", "btn-mobile", "btn-wide"];
const COLORS = ["#3a606e", "#bb4430", "#6f1d1b"];
export const Button = ({
  children,
  type,
  buttonStyle,
  buttonColor,
  buttonSize,
  onclick,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonColor = COLORS.includes(buttonColor)
    ? buttonColor
    : null;
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onclick}
      type={type}
    >
      {children}
    </button>
  );
};
