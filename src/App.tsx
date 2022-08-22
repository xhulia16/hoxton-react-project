import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Article } from "./types";

function App() {
  const [article, setArticle] = useState<null | Article[]>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((resp) => resp.json())
      .then((articlesFromServer) => setArticle(articlesFromServer));
  }, []);

  if (article === null) return <h1>Loading...</h1>;

  function previous() {
    if (index === 0) {
      let newIndex = article.length - 1;
      setIndex(newIndex);
    } else setIndex(index - 1);
  }

  function next() {
    if (index === article.length - 1) {
      let newIndex = 0;
      setIndex(newIndex);
    } else setIndex(index + 1);
  }

  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="main-text">
          <h2>EXPLORE </h2>
          <h1>LATEST NEWS</h1>
        </div>
        <div>
          <figure className="star-figure"></figure>
          </div>
        <div className="article-container">
          <span onClick={next} className="material-symbols-outlined">
            keyboard_double_arrow_left
          </span>
          <article>
            <img src={article[0 + index].image}></img>
            <h3>{article[0 + index].title}</h3>
          </article>
          <span onClick={previous} className="material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
