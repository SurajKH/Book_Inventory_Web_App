import React,{ createContext,useState } from "react";
//lets create a new constant

export const BookContext=createContext();

const BookContextProvider = (props) =>
{
    const [books,setBook]=useState([
        {title:"new_title_1",author:"new_author_1"},
        {title:"new_title_2",author:"new_author_2"},
        {title:"new_title_3",author:"new_author_3"}
    ]);

    const addbook = (title,author) =>
    {
      setBook([...books,{title,author}]);
    }
    const deletebook = (author) =>
    {
      setBook(books.filter(book=>book.author!==author));
    }
    //inspect saves a lot of time over here.
    return(
        <BookContext.Provider value={{books,addbook,deletebook}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;