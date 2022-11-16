import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
const Footer = (props) => {
  let values  = props.values
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-left">
          {values.map((element)=>{
            return <div>
              <Link to={element.path}>{element.Val}</Link>
            </div>
          })}
            
            
          </div>
          <div className="footer-right">
            <h4>Book Management System</h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navigation(Footer);
