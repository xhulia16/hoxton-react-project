import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Article, Bookmark } from "../types";

export function NewsDetails(){
    const params = useParams();
    const navigate=useNavigate();
    const [singleArticle, setSingleArticle]=useState<Article | null>();


    useEffect(()=>{
        fetch(`http://localhost:4000/articles/${params.itemId}`)
        .then(resp=>resp.json())
        .then(articleFromServer=> setSingleArticle(articleFromServer))
    }, [])

    function addBookmark(){
        fetch("http://localhost:4000/bookmarks",{
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                articleId: singleArticle?.id
            })
            
        })
        .then(data=> navigate('/bookmarks'))
     }
    
 

    return(
<div className="details-container">
    <img src={singleArticle?.image}></img>
   <div className="details">
    <h2>{singleArticle?.title}</h2>
    <p>{singleArticle?.description}</p>
    <button onClick={addBookmark}
    >Bookmark</button>
    <input placeholder="Leave a comment..."></input>
    <ul>
        <li>List of comments here</li>
    </ul>
    </div> 
</div>
    )
}