export function Header(){
    return(
        <header className="header">
          <div className="header-left">
          <h2 className="title">NasaH</h2>
          <figure className="star-figure"></figure>
          </div>
        <div className="header-right">
          <input placeholder="Search here"></input>
          <button>Login</button>
          <select>
          <option></option>
          <option value="Profile">Profile</option>
          <option value="Bookmarks">Bookmarks</option>
          </select>
          </div>
      </header>
    )
}