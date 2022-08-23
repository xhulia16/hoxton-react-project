import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "../types";

export function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  function deleteBookmark(item: Number){
fetch(`http://localhost:4000/bookmarks/${item}`,{
  method: "DELETE"})
  .then(resp=>resp.json())
  }

  useEffect(() => {
    fetch(`http://localhost:4000/bookmarks/?_expand=article`)
      .then((resp) => resp.json())
      .then((bookmarks) => setBookmarks(bookmarks));
  }, []);
  return (
    <div className="bookmarks-container">
      <h1>Your Bookmarks</h1>
      <ul>
        {bookmarks.map((item) => (
          <li className="bookmark-detail">
            
            <img src={item.article.image}></img>
            <div>
            <Link to={`/home/${item.articleId}`}>
            <h2>{item.article.title}</h2>
            <p>{item.article.description}</p>
            </Link>
            </div>
            
            <button onClick={()=>{
              deleteBookmark(item.id)
            let newBookmarks= bookmarks.filter(bookmark=> bookmark.id !==item.id)
            setBookmarks(newBookmarks)
            }}
            >Remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
}
