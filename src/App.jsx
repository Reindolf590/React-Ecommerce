import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kids_banner from "./assets/banner_kids.png"
import ShopContextProvider from "./Context/ShopContext"


const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
            <Route path='/product/:productId' element={<Product />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/loginsignup' element={<LoginSignup />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>

    </div>
  )
}

export default App
