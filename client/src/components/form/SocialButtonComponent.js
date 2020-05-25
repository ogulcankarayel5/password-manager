import React from "react";
import { SocialButton } from "./";
import PropTypes from 'prop-types'
export const SocialButtonComponent = React.memo(
  ({ background, color, borderColor, svg, spanText, onClick, type }) => {
    console.log("socialbuttonrender");
    return (
      <SocialButton
        data-test="buttonComponent"
        type={type}
        onClick={onClick}
        backgroundColor={background}
        color={color}
        borderColor={borderColor}
      >
        {svg}
        {spanText}
      </SocialButton>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.spanText === nextProps.spanText) {
      return true;
    }
  }
);

SocialButtonComponent.propTypes={
  background:PropTypes.string,
  color:PropTypes.string,
  borderColor:PropTypes.string,
  spanText:PropTypes.string,
  onClick:PropTypes.func,
  type:PropTypes.string
}
