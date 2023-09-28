
import useGif from '../hooks/useGif'
import { useState } from 'react'

const RandomGif = () => {
    const {gif,fetchData,loading} = useGif();
  return (
    <div>
        {loading ? <div>loading</div> : <img src={gif} width="200" height="100" />}
        <button type='button' onClick={()=> fetchData()}>Generate</button>
    </div>
  )
}

export default RandomGif
