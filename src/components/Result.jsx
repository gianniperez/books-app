import { Book } from './Book'
import propTypes from 'prop-types';
import { useAppContext } from './context/appContext';

export const Result = () => {

  const { book } = useAppContext();

  return (
    <div>
        <Book book={book} />
    </div>
  )
}

Result.propTypes = {
    book: propTypes.any
}