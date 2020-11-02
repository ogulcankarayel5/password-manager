import React from "react";


//must refactor
export const Form = ({ submit,children, ...rest }) => {
  const props = { ...rest };
  console.log("re-render");

  return (
    <form onSubmit={submit}>
        
          {children}
    </form>

   
  );
};



