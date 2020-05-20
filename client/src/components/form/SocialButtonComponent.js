import React from "react";
import { SocialButton } from "./";
export const SocialButtonComponent = React.memo(
  ({ background, color, borderColor, svg, spanText, onClick, type }) => {
    console.log("socialbuttonrender");
    return (
      <SocialButton
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
