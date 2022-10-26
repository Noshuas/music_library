import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NavButtons } from './NavButtons'

export function ArtistView() {
  const { id } = useParams()
  const [artistData, setArtistData] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:4000/album/${id}`)
        .then(response => response.json())
        .then(({ results }) => {
          results.shift()
          setArtistData(results);
        })
    }
    fetchData()
  }, [id])

  return (
    <div>
      {artistData ? artistData[0].artistName : "Loading..."}
      <NavButtons />
      {artistData.map((album) => (
        <div key={album.collectionId}>
          <Link to={`/album/${album.collectionId}`} >
            <p>{album.collectionName}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
