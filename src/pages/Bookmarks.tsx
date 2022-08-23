import { useEffect, useState } from "react";
import { Bookmark } from "../types";

export function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

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
            <h2>{item.article.title}</h2>
            <p>{item.article.description}</p>
            </div>
            <button>Remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
}
