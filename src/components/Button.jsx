import React from "react";
import { Link } from "react-router-dom";

import "../../scss/Button.scss";

// Array with classNames for different css styles
const STYLES = ["btn--primary", "btn--outline"];
// Array with classNames for different css sizes
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // Change button Style/Size to buttonStyle/ButtonSize else use STYLES[0]/SIZES[0]
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/logga-in" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {/* children = whatever is put inside "button" will be rendered */}
        {children}
      </button>
    </Link>
  );
};
