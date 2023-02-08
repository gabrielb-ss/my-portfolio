import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Projects } from "./components/Projects";

export function App() {
  return (
    <>
      <Header></Header>
      <Projects></Projects>

      <GlobalStyle />
    </>
  )
}


