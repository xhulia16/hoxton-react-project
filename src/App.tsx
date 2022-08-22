import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Article } from "./types";

function App() {
  const [article, setArticle] = useState<null | Article[]>(null);
  const[index, setIndex]=useState(0)

  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((resp) => resp.json())
      .then((articlesFromServer) => setArticle(articlesFromServer));
  }, []);

   if(article===null)
   return <h1>Loading...</h1>

   function previous(){
    if(index===0){
      let newIndex=article.length-1
      setIndex(newIndex)
    }
    else 
    setIndex(index-1)
   }

   function next(){
    if(index===article.length-1){
      let newIndex=0
      setIndex(newIndex)
    }
    else 
    setIndex(index+1)
   }

window.article=article
  return (
    <div className="App">
      <Header></Header>
      <main>
        <span onClick={next}
        className="material-symbols-outlined">
          keyboard_double_arrow_left
        </span>
        <div className="article-container">
            <article>
              <img src={article[0 + index].image}></img>
              <h3>{article[0 +index].title}</h3>
            </article>
        </div>
        <span onClick={previous}
        className="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
