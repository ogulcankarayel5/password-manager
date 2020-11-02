import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { CenterComponent } from './style';

export function Loading() {


  return (

   <CenterComponent>
      <BounceLoader color={"#56DDC3"} />
   </CenterComponent>
  );
}
