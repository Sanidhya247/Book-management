import { useState } from "react";
import NewContext from "./bookContext";

const BookState = (props) => {
  const [data, setData] = useState([]);
  const addBook = async () => {
    let name = document.getElementById("bookname").value;
    let authorname = document.getElementById("authorname").value;
    let booktype = document.getElementById("booktype").value;
    let newBook;
    if (!booktype) {
      newBook = { name, authorname };
    } else {
      newBook = { name, authorname, booktype };
    }
    const response = await fetch("http://localhost:5000/api/book/addbook", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBook),
    });
    const json = await response.json();
    document.getElementById("bookname").value = "";
    document.getElementById("authorname").value = "";
    document.getElementById("booktype").value = "";
  };

  const getBooks = async () => {
    const response = await fetch("http://localhost:5000/api/book/getbooks", {
      method: "GET",
    });
    const json = await response.json();
    setData(json);
  };

  const deleteBook = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/book/deletebook/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    console.log(json);
    getBooks();
  };

  const updateABook = async (id, name, authorname, booktype) => {
    const response = await fetch(
      `http://localhost:5000/api/book/updatebook/${id}`,
      {
        headers: { "Content-type": "application/json" },
        method: "PUT",
        body: JSON.stringify({ name, authorname, booktype }),
      }
    );
    const json = await response.json();
    console.log(json);
    getBooks();
  };
  const searchVal = () => {
    let value = document.getElementById("searchInp").value;

    let classes = document.getElementsByClassName("bookdata");
    Array.from(classes).forEach((element) => {
      let type = element.getElementsByTagName("div")[1].innerText;
      let name = element.getElementsByTagName("p")[0].innerText;
      let author = element.getElementsByTagName("cite")[0].innerText;
      if (
        type.toLowerCase().includes(value) ||
        name.toLowerCase().includes(value) ||
        author.toLowerCase().includes(value)
      ) {
        element.parentNode.style.display='block'
      } else {
        element.parentNode.style.display='none'  
      }
    });
  };

  return (
    <NewContext.Provider
      value={{ addBook, getBooks, data, deleteBook, updateABook, searchVal }}
    >
      {props.children}
    </NewContext.Provider>
  );
};

export default BookState;
