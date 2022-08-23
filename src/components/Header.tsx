import { Link, useNavigate } from "react-router-dom";

export function Header(){
  let navigate=useNavigate()
    return(
        <header className="header">
          <div className="header-left">
            <Link to={'/home'}>
          <h2 className="title">NasaH</h2>
          </Link>
          </div>
        <div className="header-right">
          <input placeholder="Search here"></input>
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