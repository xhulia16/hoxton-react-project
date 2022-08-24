import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Article } from "../types";

export function Header(){
  const[query, setQuery]=useState('')
  const [searchedArticle, setSearchedArticle]=useState<Article[]| null>(null)
  let navigate=useNavigate()

  function searchForArticle(){
    fetch('http://localhost:4000/articles')
    .then(resp=>resp.json())
    .then(data=> data.filter(item=> item.title.toLowerCase().includes(query.toLowerCase())) )
    .then(articles=> setSearchedArticle(articles))
  }
  

    return(
        <header className="header">
          <div className="header-left">
            <Link to={'/home'}>
          <h2 className="title">NasaH</h2>
          </Link>
          </div>
        <div className="header-right">
          <input onChange={(event)=>{
            setQuery(event.target.value)
            searchForArticle()
          }}
          placeholder="Search here"></input>
          <button>Login</button>
          <select onChange={
            (event)=>{
              let selected=event.target.value
              if(selected==="Bookmarks"){
                navigate('/bookmarks')
              }
            }
          }>
          <option></option>
          <option value="Profile">Profile</option>
          <option 
          value="Bookmarks">Bookmarks</option>
          </select>
          </div>
      </header>
    )
}