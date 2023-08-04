import { useState, useEffect } from "react"
import axios from "axios";
import { BookList } from "./BookList";

export const Library = () => {

  const [books, setBooks] = useState([]);
  const Api = 'https://example-data.draftbit.com/books?_limit=50';
  const msg = "Welcome to BookWorm's Library";

  useEffect(() => {
    axios.get(Api).then((res) => {
      console.log(res.data);
      setBooks(res.data);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{msg}</h1>
      <BookList reference={books}/>
    </div>
  )
}
