import { BrowserRouter, Switch, Route } from "react-router-dom";
import Headers from "./layout/Headers";
import HeaderButtom from "./layout/HeaderButtom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Reference from "./pages/Reference";
import Contactpage from "./pages/Contactpage";
import Products1 from "./pages/Products1";
import Products2 from "./pages/Products2";
import Products3 from "./pages/Products3";
import Products4 from "./pages/Products4";
import Products5 from "./pages/Products5";
import Products6 from "./pages/Products6";
import Products7 from "./pages/Products7";
import Products8 from "./pages/Products8";
import Sitemaps from "./pages/Sitemaps";
import Footer from "./layout/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Headers />
      <HeaderButtom />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
