import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from './Home'
import Category from './Category'

const getRoute=[
  {path:'/',element:<Home/>},
  {path:'/category',element:<Category/>}
]

const Main = () => {
  return (
<section className="home">
  <Routes>
    {
      getRoute.map((val)=>(
        <Route path={val.path} element={val.element}/>
      ))
    }
  </Routes>
</section>

  );
};

export default Main;
