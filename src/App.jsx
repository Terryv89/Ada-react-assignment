import "./App.css";
import Image from "./adaImg/Image.jsx";
import About from "./about/About.jsx";

function App() {
  const ada = <h1>Ada lovelace</h1>;

  return (
    <>
      {ada}
      <Image />
      <About></About>
    </>
  );
}

export default App;
