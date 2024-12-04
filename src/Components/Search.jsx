import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

function Search() {
  const[input, setInput] = useState('')
  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  return (
    <>
      <div className="search-icon">
        <span><GoSearch/></span>
        <input className="border-none w-[95%] p-1.5 rounded-md outline-none" value = {input} type="text" placeholder="search item" onChange={handleInput}>
        </input>
      </div>
    </>
  );
}
console.log(Search.input)
export default Search;