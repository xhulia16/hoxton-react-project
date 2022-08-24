import { useEffect, useState } from "react";
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
          }),
        }).then((data) => navigate("/bookmarks"));
      }
    }
    else {
        alert("This is already on your bookmarks!")
    }
  }

  function addComment(value){
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

  return (
    <div className="details-container">
      <img src={singleArticle?.image}></img>
      <div className="details">
        <h2>{singleArticle?.title}</h2>
        <p>{singleArticle?.description}</p>
        <button
          onClick={() => {
            let newBookmark = {
              articleId: singleArticle?.id,
            };
            setBookmarks([...bookmarks, newBookmark]);
            addBookmark();
          }}
        >
          Bookmark
        </button>
        <form onSubmit={(event)=>{
          event.preventDefault()
         addComment(event.target.input.value)
         event.target.reset()
        }}>
        <input name="input" placeholder="Leave a comment..."></input>
        <button>Submit</button>
        </form>
        <ul>
          {singleArticle?.comments.map(item=>(
            <li>{item.content}</li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}
