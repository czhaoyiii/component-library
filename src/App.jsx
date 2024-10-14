import Badges from "./components/Badges.jsx";
import Banners from "./components/Banners.jsx";
import Cards from "./components/Cards.jsx";
import Testimonials from "./components/Testimonials.jsx";
import TooltipsToasts from "./components/TooltipsToasts.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="appComponents">
        <h1 className="appTitle">React Component Library</h1>
        <Badges />
        <Banners />
        <Cards />
        <Testimonials />
        <TooltipsToasts />
      </div>
      <Footer />
    </div>
  );
}
