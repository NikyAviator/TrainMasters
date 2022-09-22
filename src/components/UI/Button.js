import React from "react";
import { Link } from "react-router-dom";

import "../../scss/Button.scss";

// Array with classNames for different css styles
const STYLES = ["btn--primary", "btn--outline", "btn--secondary-outline"];
// Array with classNames for different css sizes
const SIZES = ["btn--medium", "btn--large", "btn--extra-large", "btn--medium-secondary"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link
}) => {
  // Change button Style/Size to buttonStyle/ButtonSize else use STYLES[0]/SIZES[0]
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={link} className="btn-mobile">
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
