import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShowToast = React.memo(({ type, message }) => {
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const showToast = () => {
    switch (type) {
      case "success":
        toast.success(message, toastOptions);
        break;
      case "warn":
        toast.warn(message, toastOptions);
        break;
      case "error":
        toast.error(message, toastOptions);
        break;
      default:
        toast.info(message, toastOptions);
    }
  };

  return (
    <>
      <ToastContainer />
      {showToast()}
    </>
  );
},(prevProps,nextProps)=>{
  if(prevProps.message === nextProps.message){
    return true;
  }
}
)