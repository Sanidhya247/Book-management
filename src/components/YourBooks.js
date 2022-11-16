import React, { useContext, useEffect, useRef, useState } from "react";
import NewContext from "../context/bookContext";
import Card from "./Card";

const YourBooks = () => {
  let context = useContext(NewContext);
  const { getBooks, data , updateABook} = context;
  const [updatedBookId , setUpdatedBookId] = useState();
  useEffect(() => {
    getBooks();
    let fixedMargin = document.querySelector('.Your-books');
    if(data.length===0){
      fixedMargin.classList.add('.fixed-margin')
    }else{
      fixedMargin.classList.remove('.fixed-margin')
    }
    
  }, []);
  
  const ref = useRef(null);
  const editBook = (book) => {
    ref.current.click();
    document.getElementById('e-book-name').value =book.name
    document.getElementById('e-author-name').value = book.authorname
    document.getElementById('e-book-type').value = book.booktype 
    setUpdatedBookId(book._id);
  };

  const updateBook = ()=>{
   let updatedName=document.getElementById('e-book-name').value;
   let updatedAuthorName=document.getElementById('e-author-name').value;
   let updatedBookType=document.getElementById('e-book-type').value 
    ref.current.click();
    updateABook(updatedBookId,updatedName,updatedAuthorName,updatedBookType)
  }

 
  return (
    <>
      <div className="Your-books fixed-margin">
        <section className="container my-3 ">
          <div className="heading">
            <h3>
              Books -<small className="text-muted"> added by you</small>
            </h3>
          </div>

          <div className="line"></div>
          {/* ///////////// */}
          <button
            ref={ref}
            type="button"
            className="btn btn-primary d-none"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Update a Book
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  
                    <div className="mb-2">
                      <label htmlFor="recipient-name" className="col-form-label">
                        Book Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="e-book-name"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="recipient-name" className="col-form-label">
                        Author Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="e-author-name"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="recipient-name" className="col-form-label">
                        Book Type
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="e-book-type"
                      />
                    </div>
                  
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" onClick={updateBook} className="btn btn-success">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ////////////////.. */}
          <div className="content-your-books ">
            <div className="row data">

              {data.map((element) => {
                return (
                  <Card
                    editBook={editBook}
                    book={element}
                    key={element._id}
                  />
                );
              })}
              {data.length===0?<div>No Books please add a book to view</div> : null}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default YourBooks;
