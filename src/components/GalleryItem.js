import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

export function GalleryItem({ track }) {
  let [isExpanded, setIsExpanded] = useState(false)

  const clickHandler = () => {
    setIsExpanded(!isExpanded)
  }
  // styles --------------------------------------------

  const simpleStyle = {
    'width': '25vw',
    'height': '20vh',
    'border': '1px solid black',
    'margin': '2px'
  }

  const detailStyle = {
    'width': '80vw',
    'height': '20vh',
    'border': '1px solid black',
    'margin': '2px',
    'backgroundImage': `url(${track.artworkUrl100})`,
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'color': 'yellow'
  }

  // views ---------------------------------------------

  const simpleView = (
    <div style={simpleStyle}>
      <h3>{track.trackName}</h3>
      <h4>{track.collectionName}</h4>
      <img src={track.artworkUrl100} alt="album art" />
    </div>
  )

  const detailedView = (
    <div style={detailStyle} >
      <h2>{track.trackName}</h2>
      <h3>{track.collectionName}</h3>
      <h4>{track.primaryGenreName}</h4>
      <h4>{track.releaseDate}</h4>
    </div>
  )



  return (
    <div onClick={clickHandler} style={{ 'display': 'inline-block' }}>
      {
        isExpanded
          ? detailedView
          : simpleView
      }
    </div>
  );
}


