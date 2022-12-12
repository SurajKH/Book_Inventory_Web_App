import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const {books}=useContext(BookContext);
  return books.length ?(
    <div className='book-list'>
    {/* we are mapping over each entry in the books */}
      <ul>
        {books.map(book => {
          return (<BookDetails book={book} key={book.id} />)
        })}
                
      </ul>
    </div>
  ):
  (
    <div className='empty'>
        No Books present in the Inventory
    </div>
  )
}

export default BookList;
