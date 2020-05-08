import React, { useRef } from "react";
import styled from "styled-components";
import img from "../../assets/images/p404.png";
import { useOnMouseMove } from "../../hooks";

import { Button } from "../";

const StatusErrorDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: url(${img}),
    ${(props) => props.theme.colors.statusErrorBackground};
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);

  & div {
    display: flex;
    flex-direction: column;

    height: 20rem;
    max-width: 600px;
    text-align: center;
  }

  & h2 {
    margin-bottom: 3rem;
    font-size: 5rem;
    color: ${(props) => props.theme.colors.background};
    line-height: 1rem;
  }

  & p {
    color: ${(props) => props.theme.colors.background};
    font-size: 2rem;
  }

  & a {
    
    margin-top: 2.5rem;
    color: ${(props) => props.theme.colors.background};
    border-radius: 25px;
    
  }
`;

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
