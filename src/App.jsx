import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ShopInfo from "./Pages/ShopInfo";
import { PaymentPage } from "./Pages/Payment";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import OurLegacy from "./Pages/Legacy";
import CareGuide from "./Pages/CareGuide";
import HomePage from "./Pages/Home";
import FAQ from "./Pages/FAQ";

import FishDetail from "./Pages/Details";
import Collection from "./Pages/Collection"; 

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Main routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/fish" element={<Collection/>} />{" "}
        <Route path="/fish/:slug" element={<FishDetail />} />
        
        {/* Other pages */}
        <Route path="/shop-info" element={<ShopInfo />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/legacy" element={<OurLegacy />} />
        <Route path="/care-guides" element={<CareGuide />} />
        <Route path="/faq" element={<FAQ />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
