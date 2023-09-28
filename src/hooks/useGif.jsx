import { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = () => {
    const [loading, setLoading] = useState(false);
    const [gif, setGif] = useState("")
    const randomUrl =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function fetchData(tag){
        setLoading(true);
        const {data} = await axios.get(tag ?  `${randomUrl}&tag=${tag}` : randomUrl)
        const imageSource =  data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {fetchData, gif,loading}
    

}

export default useGif