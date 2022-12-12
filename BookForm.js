import React,{useState,useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = ({book}) => {
  // we will be using the bookcontext
    const {addbook}=useContext(BookContext);

  //lets consider the react states as followed.
  const [title,SetTitle]=useState('');
  const [author,SetAuthor]=useState('');
 const handleSubmit=(e)=>
 {
  e.preventDefault();
  //now lets make use of addbook method over here.
  addbook(title,author);
  SetTitle('');
  SetAuthor('');
 }
  return (
   <form onSubmit={handleSubmit}>
    <input
     type="text" 
     placeholder="Enter Book Title:"
      value={title}
      onChange={(e)=>SetTitle(e.target.value)}
      required
    />
    <input
     type="text" 
     placeholder="Enter Book Author Name:"
      value={author}
      onChange={(e)=>SetAuthor(e.target.value)}
      required
    />
    <input type="submit" value="SUBMIT"></input>
   </form>
  )
};

export default BookForm;
