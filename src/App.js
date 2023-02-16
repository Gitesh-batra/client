
import { Children } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./App.css"

const Layout = () =>{
  return(
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>

    </div>
  )
}



const router = createBrowserRouter([
  {
    // mainurl
    path: "/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    }, 
    {
      // category
      path: "/products/:id",
      element: <Products/>,
    },
    
    {
      // product
      path: "/product/:id",
      element: <Product/>,
    },


  ]

  },



]);

function App() {
  return (
    <div className="App">
       
    <RouterProvider router={router} />
          
    </div>

  );
}

export default App;
