import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NewContext from "../context/bookContext";
import Navigation from "./Navigation";

const Navbar = (props) => {
  let context = useContext(NewContext);
  const {searchVal} = context;
  let values  = props.values;

  const resp = () => {
    let nav = document.querySelector(".nav");
    let leftVisibilty = document.querySelector(".nav-left");
    let rightVisibilty = document.querySelector(".nav-right");
    nav.classList.toggle('nav-height')
    leftVisibilty.classList.toggle('v-nav')
    rightVisibilty.classList.toggle('v-nav')
  };

  const search = (e)=>{
    e.preventDefault();
  }
  return (
    <>
    <header>
      <div className="nav nav-height">
        <div className="nav-left v-nav">
        {values.map((element)=>{
          return <div >
            <Link to={element.path}>{element.Val} </Link>
          </div>
        })}   
        </div>
        <div className="nav-center">
          <h5>Book Management system</h5>
        </div>
        <div className="nav-right v-nav">
          <form onChange={searchVal}>
            <input type="text" id="searchInp" className="searchInp" placeholder="Search" />
            <button className="search" onClick={search}>Search</button>
          </form>
        </div>
        <div className="burger" onClick={resp}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>
    </header>
</>
  );
};

export default Navigation(Navbar);
