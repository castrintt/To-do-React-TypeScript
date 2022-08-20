import { ReactElement } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
import Main from "./components/MainContent/Main";

const App = (): ReactElement => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
