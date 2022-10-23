import './App.css';
import { SearchBar } from './components/SearchBar';
import { Gallery } from './components/Gallery';
import { useEffect, useRef, useState } from 'react';
import { DataContext } from './contexts/DataContext';
import { SearchContext } from './contexts/SearchContext';


function App() {
  let [data, setData] = useState([]);
  let [message, setMesssage] = useState('Search for Music!');
  let searchInput = useRef('')




  /*
  useEffect always runs when the component initially mounts to the dom.

  A.) when there is no dependency list
  it will run the supplied function whenever there is a change to state or props.

  B.) when there is an empty dependency list
  it will not run again. Ever. For any reason.

  C.) when there is a dependency list with elements inside
  it will run when it detects a change to the tracked variables.
  */
  const handleSubmit = (e, term) => {
    e.preventDefault()
    const fetchData = () => {
      document.title = `${term} Music`
      fetch(`https://itunes.apple.com/search?term=${term}`)
        .then(response => response.json())
        .then(result => {
          setData(result.results)
        })
    }

    fetchData()
  }

  return (
    <>
      <SearchContext.Provider value={{ref: searchInput, handleSubmit}} >
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data} >
        <Gallery />
      </DataContext.Provider>
    </>
  );
}

export default App;





