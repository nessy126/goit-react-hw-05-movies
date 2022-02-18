import { useEffect, useState } from "react"
import { getCastsByIdAPI } from "../../servises/api"

const Cast = ({ id }) => {
  const [casts, setCasts] = useState([])
    const imgUrl = "https://image.tmdb.org/t/p/w400"

useEffect(() => {
  getCastsByIdAPI(id)
    .then((data) => {
      setCasts(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <ul>
        {casts?.map(author => {
          return (
            <li key={author.id}>
              <img src={ author.profile_path && imgUrl + author.profile_path} alt="" width="150px"/>
              <p>{author.original_name}</p>
              <p>Character: {author.character}</p>
            </li>
          )
        })}
    </ul>
    </>
  )
}
 
export default Cast;