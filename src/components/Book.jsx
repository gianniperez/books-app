import '../stylesheets/Book.css';
import { Rating } from "./Rating";
import { useAppContext } from "./context/appContext";
import propTypes from 'prop-types'

export const Book = ({ book }) => {
    
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  
    const favoritesChecker = (id) => {
      const boolean = favorites.some((book) => book.id === id)
      return boolean
    }


  return (
    <div className='book-container' key={book.id}>
    <img className='book-image' src={book.image_url} alt={book.title}/>
    <div className='book-container-text'>
        <div>
          <div className='rating'><Rating/></div>
        </div>
        <br/><br/>
        <p className='book-title'><b>{book.title}</b></p>
        <p className='book-authors'>by {book.authors}</p>
        <p className='book-descr'>{book.description}</p>
        <br/><br/>
        
        {favoritesChecker(book.id) ? (
          <button className='add' onClick={() => removeFromFavorites(book.id)}>Remove From Favorites</button>
        ) : (
          <button className='add' onClick={() => addToFavorites(book)}>Add to Favorites</button>
        )}
      </div>
    </div>
  )
}

Book.propTypes = {
    book: propTypes.any,
    id: propTypes.any
}
