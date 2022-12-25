import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";

import { Routes, Route } from "react-router-dom";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/ourwork" exact element={<OurWork />} />
        <Route path="/contactus" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
