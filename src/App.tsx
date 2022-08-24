import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Bookmarks } from "./pages/Bookmarks";
import { Home } from "./pages/Home";
import { NewsDetails } from "./pages/NewsDetails";
import { PageNotFound } from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
   <Routes>
   <Route index element={< Navigate to='/home' />} />
   <Route path= '/home' element={<Home/>}/>
   <Route path= '/home/:itemId' element={<NewsDetails/>}/>
   <Route path= '/bookmarks' element={<Bookmarks/>}/>
    <Route path= "*" element={<PageNotFound/>}/>
   </Routes>
   </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
