import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { verifyUser } from './services/users.js'
import Home from "./screens/Home/Home.jsx"
import SignUp from "./screens/AuthForms/SignUp.jsx"
import SignIn from "./screens/AuthForms/SignIn.jsx"
import SignOut from "./screens/AuthForms/SignOut.jsx"
import Games from "./screens/Games/Games.jsx"
import GameReviews from "./screens/GameReviews/GameReviews.jsx"
import MyFavs from "./screens/MyFavs/MyFavs.jsx"
import MyReviews from "./screens/MyReviews/MyReviews.jsx"
import AddReview from './modals/AddReviews/AddReview.jsx'
import EditReview from './modals/AddReviews/EditReview.jsx';
import About from './screens/About/About.jsx';

function App() {

  const [user, setUser] = useState(null)
  const [toggleUser, setToggleUser] = useState(false)

  useEffect(()=>{
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [toggleUser])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/sign-up" element={<SignUp setUser={setUser} user={user}/>}/>
        <Route path="/sign-in" element={<SignIn setUser={setUser} user={user}/>}/>
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        { user && <Route path="/reviews/games/:gameId" element={<GameReviews user={user}/>}/>}
        <Route path="/games" element={<Games user={user} setToggleUser={setToggleUser}/>}/>
        <Route path="/addreview" element={<AddReview user={user}/>}/>
        <Route path="reviews/:reviewId" element={<EditReview user={user}/>}/>
        { user && <Route path="/myfavs" element={<MyFavs user={user} setToggleUser={setToggleUser}/>}/>}
        { user && <Route path="/myreviews" element={<MyReviews user={user}/>}/>}
        <Route />
        <Route  path="/about" element={<About user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
