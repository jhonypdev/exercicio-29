/** @format */

import "./App.css";
import Header from "./components/Header";
import BannerHome from "./components/Banner";
import DealOfWeek from "./components/DealOfWeek";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerHome />
      <DealOfWeek />
      <Benefits />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
