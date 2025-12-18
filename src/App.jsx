import React from "react";
import Todo from "./TODOO/Todo";
import Api from "./API/Api";
import Web from "./webpage/Web";
import Product from "./producr/Product";
import Productss from "./producr/Prod";
import Portfolio from "./PORTFOLIO/Portfolio";
import Ustate from "./Hooks/Usestate";
import Useref from "./Hooks/Useref";
import Products from "./producr/Food";
import Slider from "./Hooks/slider";
import TestimonialSlider from "./webpage/Webfit";
import Flip_Filter from "./webpage/Flip_Filter";
// import UseReducer from "./Hooks/UseR";
const App=()=>
{
  return(
    <>
    {/* <Api/> */}
    {/* <Web/> */}
    <Todo/>
{/* <Product/>     */}
{/* <Products/> */}
{/* <Slider/> */}
{/* <Productss/> */}
<Portfolio/>
{/* <Ustate/> */}
{/* <TestimonialSlider/> */}
{/* <UseReducer/> */}
{/* <Useref/> */}
{/* <Flip_Filter/> */}
    </>
  )

}
export default App;