import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./routes/home"
import Profile from "./routes/profile"
import Login from "./routes/login";
import CreateaAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path: "/create-account",
    element:<CreateaAccount/>
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }

  body {
    background-color: black;
    color:white;

  }

`;


function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async() => {
    // wait for firebase
    setLoading(false);
  };
  useEffect(()=> {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen/> : <RouterProvider router = {router} />}
    </>
  );
}

export default App
