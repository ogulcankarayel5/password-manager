import { toast } from "react-toastify";




  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
 export const showToast = (type, message) => {
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


