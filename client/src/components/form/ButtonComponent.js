import React from "react";
import { Button } from "./";
import PropTypes from 'prop-types'
export const ButtonComponent = React.memo(
  ({ background, color, borderColor, svg, spanText="button", onClick, type="button" }) => {
    console.log("buttonrender");
    return (
      <Button
        data-test="buttonComponent"
        type={type}
        onClick={onClick}
        backgroundColor={background}
        color={color}
        borderColor={borderColor}
      >
        {svg}
        {spanText}
      </Button>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.spanText === nextProps.spanText) {
      return true;
    }
  }
);

ButtonComponent.propTypes={
  background:PropTypes.string,
  color:PropTypes.string,
  borderColor:PropTypes.string,
  spanText:PropTypes.string,
  onClick:PropTypes.func,
  type:PropTypes.string
}
