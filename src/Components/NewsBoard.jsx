import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {

    const [artikel, setartikel] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setartikel(data.articles));

    },[category])

    return(
        <div>
            <h2 className="text-center" style={{marginTop:"30px", fontSize:"40px"}}>Latest <span className="badge bg-danger">News</span></h2>
            {artikel.map((news,index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    )
}

export default NewsBoard 