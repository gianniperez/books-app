import { BookList } from "./BookList";
import propTypes from 'prop-types';
import { useAppContext } from "./context/appContext";

export const Results = () => {

  const { results } = useAppContext();

  return (
  <div>
    <h1>Search your book by title</h1>
    <BookList reference={results}/>
  </div>
  )
}

Results.propTypes = {
  result: propTypes.any
}
