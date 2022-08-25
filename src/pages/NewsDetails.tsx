import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Article} from "../types";

export function NewsDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [singleArticle, setSingleArticle] = useState<Article | null>();
  const [bookmarks, setBookmarks] = useState<Number[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/articles/${params.itemId}?_embed=comments`)
      .then((resp) => resp.json())
      .then((articleFromServer) => setSingleArticle(articleFromServer));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/bookmarks`)
      .then((resp) => resp.json())
      .then((bookmarks) =>
        setBookmarks(bookmarks.map((item) => item.articleId))
      );
  }, []);

  function addBookmark() {
    if (
      bookmarks.every((id) => {
        return id !== singleArticle?.id;
      })
    ) {
      {
        fetch("http://localhost:4000/bookmarks", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            articleId: singleArticle?.id,
            userId: localStorage.id
          }),
        }).then((data) => navigate("/bookmarks"));
      }
    }
    else {
        alert("This is already on your bookmarks!")
    }
  }

  function addComment(value: string){
    fetch("http://localhost:4000/comments",{
      method: "POST", 
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        content: value,
        articleId: singleArticle?.id
      })
        
    })
  }
window.singleArticle=singleArticle

  function showNewComment(value:string){
    let copyArticle=structuredClone(singleArticle)
    let comment={
      articleId: singleArticle.id,
      content: value
    }
    copyArticle.comments.push(comment)
    setSingleArticle(copyArticle)
  }

  return (
    <div className="details-container">
      <img src={singleArticle?.image}></img>
      <div className="details">
        <h2>{singleArticle?.title}</h2>
        <p>{singleArticle?.description}</p>
        <button
          onClick={() => {
            if(localStorage.id){
              let newBookmark = {
                articleId: singleArticle?.id,
              };
              setBookmarks([...bookmarks, newBookmark]);
              addBookmark();
            }
            else navigate('/signIn')
          }}
          >
          
          Bookmark
        </button>
        <form onSubmit={(event)=>{
          event.preventDefault()
          let comment=event.target.input.value
         addComment(comment)
         showNewComment(comment)
         event.target.reset()
        }}>
        <input name="input" placeholder="Leave a comment..."></input>
        <button>Submit</button>
        </form>
        <ul>
          {singleArticle?.comments.map(item=>(
            <li key={item.id}>➺ {item.content}</li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}
