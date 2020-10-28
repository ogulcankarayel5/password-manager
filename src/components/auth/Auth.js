import React, { useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { getTokens, isTokensDefined, setTokens } from "../../utils";
import { CenterComponent } from './style';

export function Auth() {
  

  useEffect(() => {
    // burada dispatch yapılabilir initializerequest ile ve tek bir loading ile iş çözülebilir
    const { accessToken} = getTokens();
    
    console.log("access: ", accessToken);
    const result = isTokensDefined();
    if(!result){
      setTokens();
    }
    
  }, []);
  return (

   <CenterComponent>
      <BounceLoader color={"#56DDC3"} />
   </CenterComponent>
  );
}
