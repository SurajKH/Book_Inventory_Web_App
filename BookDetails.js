import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

//we are making use of deletebook functionality from BookContext.
const BookDetails = ({book}) => {
  const {deletebook}=useContext(BookContext);
  return (
    <li onClick={()=>deletebook(book.author)}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  )
}

export default BookDetails;
