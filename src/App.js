import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import { MainRouter } from "./routes";
import { Theme } from "./shared";
import { authActions } from "./store/actions/authActions";
import { GlobalStyle, history } from "./utils";


function App() {
 
  const dispatch = useDispatch()
  const { loading,isAuth } = useSelector((state) => ({
    loading: state.authReducer.loading,
    isAuth : state.authReducer.isAuthenticated
  }));
  console.log(isAuth)
  // loading true oldugu için loginde initialize user oluyor ve token geçersizse 401 dönüyor
 

  useEffect(() => {
   
   if(!isAuth){
    dispatch(authActions.initializeUser())
   }
   
  },[isAuth])

  if(loading){
    return <Loading/>
  }

  return (
    <HelmetProvider>
      <Router history={history}>
        <ScrollToTop/>
        <Theme>
          <ToastContainer/>
          <GlobalStyle />
          <MainRouter />
        </Theme>
      </Router>
    </HelmetProvider>
  );
}

export default App;
