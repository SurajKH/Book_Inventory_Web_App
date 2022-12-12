import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  return (
    <BookContextProvider>
    <Navbar />
    <BookList />
    <BookForm />
    </BookContextProvider>
  );
}

export default App;
