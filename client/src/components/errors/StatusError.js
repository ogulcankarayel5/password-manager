import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import img from '../../assets/images/p404.png'
import {useOnMouseMove} from '../../hooks'
import {Link} from 'react-router-dom';
const StatusErrorDiv = styled.div`
  /* 
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%; */
  position: absolute;
  width: 100%;
  height: 100%;
  //border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: url(${img}), ${props=>props.theme.colors.statusErrorBackground};
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);

  & div {
    position: relative;
    display: flex;
    flex-direction: column;

    height: 20rem;
    max-width: 600px;
    text-align: center;
  }

  & h2 {
    position: relative;
    margin-bottom: 3rem;
    font-size: 5rem;
    color: ${(props) => props.theme.colors.background};
    line-height: 1rem;
  }

  & p {
    color: ${(props) => props.theme.colors.background};
  }

  & a {
    font-size: 1.5rem;
    position: relative;
    display: inline-block;
    padding: 1rem 2.5rem;
    background: #ff0562;
    margin-top: 2.5rem;
    color: ${(props) => props.theme.colors.background};
    border-radius: 25px;
    border-bottom: 4px solid #d00d56;
  }
`;

export const StatusError = React.memo(({title,description}) => {
  const divRef = useRef(null);
  const position = useOnMouseMove();

  useEffect(() => {
    divRef.current.style.backgroundPositionX = position.x + "px";
    divRef.current.style.backgroundPositionY = position.y + "px";
  }, [position]);

  return (
    <StatusErrorDiv ref={divRef}>
      <div>
        <h2>{title}</h2>

        <p>{description}</p>
        <Link to="/">Home</Link>
      </div>
    </StatusErrorDiv>
  );
});
