import React, { useRef } from "react";


import { useOnMouseMove } from "../../hooks";
import {StatusErrorDiv} from './styles'
import { Button } from "../../shared";


export const StatusError = ({ title, description,color }) => {

  console.log(color);
  const divRef = useRef(null);
  useOnMouseMove(divRef);

  return (
    <StatusErrorDiv ref={divRef}>
      <div>
        <h2>{title}</h2>

        <p>{description}</p>
        <Button fontSize={"2rem"} to="/" color={color}>
          Get Back Home
        </Button>
      </div>
    </StatusErrorDiv>
  );
};
