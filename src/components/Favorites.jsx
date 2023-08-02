import { BookList } from "./BookList";
import { useAppContext } from "./context/appContext";

const Favorites = () => {

  const { favorites } = useAppContext();

  return <div>
    <BookList reference={favorites} msg="You don't have any favorite book yet!"/>
  </div>
}

export default Favorites