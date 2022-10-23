import './App.css';
import { SearchBar } from './components/SearchBar';
import { Gallery } from './components/Gallery';
import { useEffect, useState } from 'react';
import { DataContext } from './contexts/DataContext';


function App() {
  let [query, setQuery] = useState('');
  let [data, setData] = useState([]);
  let [message, setMesssage] = useState('Search for Music!');

  useEffect(() => {
    const fetchData = () => {
      document.title = `${query} Music`
      fetch(`https://itunes.apple.com/search?term=${query}`)
        .then(response => response.json())
        .then(result => {
          setData(result.results)
        })
    }

    fetchData()
  }, [query])


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
    setQuery(term);
  }

  return (
    <>
      <DataContext.Provider value={data} >
        <SearchBar handleSubmit={handleSubmit} />
        {message}
        <Gallery />
      </DataContext.Provider>
    </>
  );
}

export default App;





