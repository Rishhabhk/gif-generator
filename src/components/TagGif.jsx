import React from 'react'
import useGif from '../hooks/useGif';
import { useState } from 'react';

const TagGif = () => {
  const [tag, setTag] = useState("");
  
  function changeHandler(e){
    setTag(e.target.value);
  }
  
  const {gif,fetchData,loading} = useGif();

  return (
    <div>
         {loading ? <div>loading</div> : <img src={gif} width="200" height="100" />}
        <input type="text" placeholder='search gif' onChange={changeHandler} value={tag}/>
        <button type='button' onClick={()=>fetchData(tag)}>Generate</button>
    </div>
  )
}

export default TagGif