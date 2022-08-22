import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <span className="material-symbols-outlined">
          keyboard_double_arrow_left
        </span>
        <article>
          <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/51956990663_a7a5cad860_k_0.jpg"></img>
          <h3>NASA Sets Launch Coverage for Artemis Mega Moon Rocket, Spacecraft</h3>
        </article>
        <span className="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
