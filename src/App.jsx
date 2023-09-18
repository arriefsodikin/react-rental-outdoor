// Panggil Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Panggil Style Css
import './dist/css/style.css';
// Panggil Fungsi Routes & Route
import{ Routes, Route} from "react-router-dom";

//Panggil Komponen Navbar 
import NavbarComponent from "./components/NavbarComponent";
// Panggil Semua File di folder Pages
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import FeedPage from "./pages/FeedPage";
import ContactPage from "./pages/ContactPage";
import InfoPage from "./pages/InfoPage";
import FooterComponent from "./components/FooterComponent";


function App() {
  return <div>
    <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/menu" Component={MenuPage} />
        <Route path="/order" Component={OrderPage} />
        <Route path="/feed" Component={FeedPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/info" Component={InfoPage} />
      </Routes>
    <FooterComponent />
  </div>
}

export default App
