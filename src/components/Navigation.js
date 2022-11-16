import React, { useState } from "react";

const Navigation = (WrappedComponent) => {

  let values = [
    { Val: "Home", path: "/" },
    { Val: "Your Books", path: "/yourbooks" },
    { Val: "About", path: "/about" }
  ];

  const Navigation = () => {
    
    return (
      <div>
        <WrappedComponent  values={values} />
      </div>
    );
  };
  return Navigation;
};
export default Navigation;
