import React, { useContext } from "react";
import NewContext from "../context/bookContext";

const Card = (props) => {
  const context = useContext(NewContext);
  const { deleteBook } = context;
  const { book , editBook } = props;

  return (
    <div>
      <div className="card bookdata">
        <div className="card-header">
          <div className="booktype">{book.booktype}</div>
          <div>
            <i
              className="fa fa-pen-to-square mx-2"
              onClick={() => {
                editBook(book);
              }}
            ></i>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteBook(book._id);
              }}
            ></i>
          </div>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p className="bookname">{book.name}</p>
            <footer className="blockquote-footer">
              By <cite title="Source Title" className="bookauthor">{book.authorname}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Card;
