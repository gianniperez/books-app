import { Book } from "./Book";
import propTypes from 'prop-types';

export const BookList = ({ reference, msg }) => {

  return (
    <div>
      {reference.length > 0 ? reference.map((book) => (
        <div key={book.id}><Book book={book}></Book></div>
      )): <h1>{msg}</h1>}
    </div>
  )
}

BookList.propTypes = {
  reference: propTypes.array,
  msg: propTypes.any
}