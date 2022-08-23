import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Article } from "../types";

export function NewsDetails(){
    const params = useParams();
    const [singleArticle, setSingleArticle]=useState<Article | null>()

    useEffect(()=>{
        fetch(`http://localhost:4000/articles/${params.itemId}`)
        .then(resp=>resp.json())
        .then(articleFromServer=> setSingleArticle(articleFromServer))
    }, [])
 

    return(
<div className="details-container">
    <img src={singleArticle?.image}></img>
   <div className="details">
    <h2>{singleArticle?.title}</h2>
    <p>{singleArticle?.description}</p>
    <button>Bookmark</button>
    <input placeholder="Leave a comment..."></input>
    <ul>
        <li>List of comments here</li>
    </ul>
    </div> 
</div>
    )
}