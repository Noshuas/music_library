import { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";

export function SearchBar() {
  let { ref, handleSubmit } = useContext(SearchContext)


  return (
    <form >
      <input
        type='text'
        placeholder="Enter a search term here"
        ref={ref}
      />
      <button onClick={(e) => handleSubmit(e, ref.current.value)} >Submit</button>
    </form>
  )
}


