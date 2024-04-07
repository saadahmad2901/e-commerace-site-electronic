// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Signout from "./Signout";
import Products from "./Products";
// import NewProducts from "./NewProducts";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
          Home
        </Route>


        {/* Mobiles */}
        {/* <Route path="/mobiles" element={<Products />}>
          Mobiles
        </Route> */}

        <Route path="/mobiles/nokia" element={<Products />}>
        Nokia
        </Route>
        <Route path="/mobiles/oppo" element={<Products />}>
        Oppo
        </Route>
        <Route path="/mobiles/samsung" element={<Products />}>
        Samsung
        </Route>
        <Route path="/mobiles/sony" element={<Products />}>
        Sony
        </Route>
        <Route path="/mobiles/qmobile" element={<Products />}>
        Q  Mobiles
        </Route>
{/* Laptop */}
<Route path="/laptop/dell" element={<Products />}>
       Laptop
        </Route>
        <Route path="/laptop/hp" element={<Products />}>
       Laptop
        </Route>
        <Route path="/laptop/samsung" element={<Products />}>
       Laptop
        </Route>
        <Route path="/laptop/fujisto" element={<Products />}>
       Laptop
        </Route>

        <Route path="/laptop/sony" element={<Products />}>
       Laptop
        </Route>

        
        <Route path="/contact" element={<Contact />}>
          Contact us
        </Route>
        <Route path="/about" element={<About />}>
          About us
        </Route>
        <Route path="/signout" element={<Signout />}>
          Signout
        </Route>
      </Routes>
      {/* <div><NewProducts/></div> */}
    </div>
  );
};

export default Content;
