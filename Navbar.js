import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books}=useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Book Inventory Web App</h1>
      {/* <p>we have {books.length} in our inventory!!!</p> */}
      <p>Currently we have {books.length} number of books on our inventory.</p>
    </div>
  )
}

export default Navbar;
