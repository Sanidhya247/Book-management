import React, { useContext } from "react";
import NewContext from "../context/bookContext";


const Home = () => {
  let context = useContext(NewContext);
  const {addBook} = context;
  return (
    <>
      <section className="add-book mt-3">
        <div className="container my-3">
          <div className="heading">
            <h1>Add a Book</h1>
          </div>
          <div className="line"></div>
          <div className="content">
            <label>Book Name</label>
            <input id="bookname" placeholder="Enter Book Name" type="text"  />
            <label>Author </label>
            <input id="authorname" placeholder="Enter Author Name" type="text" />
            <label>Book Type</label>
            <input id="booktype" placeholder="Enter Book Type" type="text" />
            <button className="btn mx-2 btn-success" onClick={addBook} >Add a Book </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
