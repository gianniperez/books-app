/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import '../stylesheets/Rating.css'

export const Rating = () => {

  const [rating, setRating] = useState('Rate this book');
  const [hover, setHover] = useState(null);
  const [msg, setMsg] = useState(null);

  return (
    <div className='container'>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return(
          <label key={index}>
            <input
              type="radio" 
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar className='star-icon'
              color={currentRating <= (hover || rating) ? "#731816" : "#ddcec6"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(rating)}
              onClick={() => setMsg('Rated: ')}
              />
          </label>
        );
      })}
      <div>{msg}{rating}</div>
    </div>
  )
}