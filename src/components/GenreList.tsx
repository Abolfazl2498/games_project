import useGenre from "../hooks/useGenres"

const GenreList = () => {
const {genre}=useGenre()
  return (
   <ul>
    {genre.map(genre=><li key={genre.id}>{genre.name}</li>)}
   </ul>
  )
}

export default GenreList