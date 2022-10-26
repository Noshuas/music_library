import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavButtons } from './NavButtons'

export function AlbumView() {
  const { id } = useParams()
  const [albumData, setAlbumData] = useState([])

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:4000/song/${id}`)
        .then(response => response.json())
        .then(({ results }) => {
          results.shift()
          setAlbumData(results);
        })
    }
    fetchData()
  }, [id])


  return (
    <div>
      {albumData.length ? albumData[0].collectionName : "Loading..."}
      <NavButtons />
      {
        albumData.map((track) => (
          <div key={track.trackId} >
            <p>{track.trackName}</p>
          </div>
        ))
      }
    </div>
  )
}

