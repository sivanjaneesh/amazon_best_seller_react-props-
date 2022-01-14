import './App.css';
import Book from './Book';
import Books from './Books.json'
function App() {
  return (
    <div className='main'>   
    <h1 className='heading'>Bestsellers in books</h1> 
    <div className="row">
      {
        Books.map((book)=>{
        return <Book key={book.id} book={book}/>
        })
      }
    </div>
    </div>
  );
}

export default App;
