import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Bookmarks } from "./pages/Bookmarks";
import { Home } from "./pages/Home";
import { NewsDetails } from "./pages/NewsDetails";
import { PageNotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { User } from "./types";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  function logIn(user: User) {
    localStorage.id = user.id;
    setUser(user);
    navigate("/home");
  }

  function logOut(user: User) {
    localStorage.removeItem("id");
    setUser(null);
  }

  useEffect(() => {
    const userId = localStorage.id;
    if (userId) {
      fetch(`http://localhost:4000/users/${userId}`)
        .then((resp) => resp.json())
        .then((user) => setUser(user))
    }
  }, [localStorage.id]);

  return (
    <div className="App">
      <Header logOut={logOut}></Header>
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:itemId" element={<NewsDetails />} />
          <Route path="/bookmarks" element={<Bookmarks user={user} />} />
          <Route path="/signIn" element={<SignIn logIn={logIn} />} />
          <Route path="/profile" element={<Profile user={user}/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
