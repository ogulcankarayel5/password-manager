import {useEffect} from "react";


export const useOnMouseMove = (divRef) => {
  let x,y=0;
  const onMouseMove = (e) => {
    x=e.clientX;
    y=e.clientY;
    setBackgroundPx();
  
  };

  const setBackgroundPx = () => {
    divRef.current.style.backgroundPositionX=x+"px";
    divRef.current.style.backgroundPositionY=y+"px";
  }

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    
   
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  
};
