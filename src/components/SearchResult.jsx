import '../stylesheets/SearchResult.css';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useAppContext } from './context/appContext';
export const SearchResult = ({ result }) => {

  const { setBook } = useAppContext();
  

  const handleChange = (value) => {
    console.log(value);
    setBook(value);
  };

  return (
  <div className='search-result'>
    <NavLink to="/Result" onClick={() => handleChange(result)}>
      {result.title}
    </NavLink>
  </div>
  )
}

SearchResult.propTypes = {
    result: propTypes.any,
    results: propTypes.array
}