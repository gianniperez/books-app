import '../stylesheets/SearchResultsList.css';
import propTypes from 'prop-types';
import { SearchResult } from './SearchResult';

export const SearchResultsList = ({ results }) => {

  return (
    <div className="results-list">
        {results.map((result) => (
          <SearchResult result={result} key={result.id}/>
        ))}
    </div>
  )
}

SearchResultsList.propTypes = {
    results: propTypes.array
}