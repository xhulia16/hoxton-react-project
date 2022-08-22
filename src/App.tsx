import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
    <header className="header">
      <h2 className="title">NasaH</h2>
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
    <main>

    </main>
    <div className="footer">
      footer goes here
    </div>
    </div>
  )
}

export default App
