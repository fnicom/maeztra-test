import "./App.scss";

// components
import Header from "./components/HeaderMenu/Header/Header";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import PurchaseBenefits from "./components/PurchaseBenefits/PurchaseBenefits";
import Partnerbrands from "./components/Partnerbrands/Partnerbrands";
import NewCollection from "./components/NewCollection/NewCollection";
import ProductList from "./components/ShelfProducts/ProductList";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <BannerSlider />
      <PurchaseBenefits />
      <Partnerbrands />
      <ProductList />
      <NewCollection />
      <Modal />
      <Footer />
    </>
  );
}

export default App;
