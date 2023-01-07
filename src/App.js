import { RouterProvider } from "react-router-dom";
import Router from "./pages/Router";
import { useSelector } from 'react-redux'
import { useEffect } from "react";

function App() {

  const selectedTheme = useSelector(state => state.theme.selectedTheme)
  
  useEffect( ()=>{
    const $html = document.querySelector("html")
    $html.className = selectedTheme
  },[selectedTheme])

  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
