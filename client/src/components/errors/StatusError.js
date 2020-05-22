import React, { useRef } from "react";
import PropTypes from "prop-types";

import { useOnMouseMove } from "../../hooks";
import {StatusErrorDiv} from './styles'
import { Button } from "../../shared";


export const StatusError = ({ title, description,color }) => {

  if(!title){
    return null;
  }
  console.log(color);
  const divRef = useRef(null);
  useOnMouseMove(divRef);

  return (
    <StatusErrorDiv data-test="statusErrorDiv" ref={divRef}>
      <div>
        <h2 data-test="statusErrorH2">{title}</h2>

        <p data-test="statusErrorText">{description}</p>
        <Button fontSize={"2rem"} to="/" color={color} data-test="statusErrorButton">
          Get Back Home
        </Button>
      </div>
    </StatusErrorDiv>
  );
};

StatusError.propTypes = {
  title:PropTypes.string,
  description:PropTypes.string,
  color:PropTypes.string
}
