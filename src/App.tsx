import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { useState } from "react";

export function App() {
  const [lightMode, setLightMode] = useState("dark");

  return (
    <>
      <Header setLightMode={setLightMode}/>
      <Projects />
      <GlobalStyle theme = {lightMode}/>
    </>
  )
}


