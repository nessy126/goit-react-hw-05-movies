import { useLocation, useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const MovieList = ({ movieList }) => {
  const location = useLocation()

  return (
    <ul>
      {movieList.map((movie) => {
        return (
          <li key={movie.id}>
            <Link
              className="link"
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <h2>{movie.title}</h2>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
 
export default MovieList;