import { Routes, Route } from "react-router-dom";
import Login from "@pages/Login/Login";
import Index from "@pages/Index/Index";
import PostView from "@pages/PostView/PostView";
function App() {

  return (
    <Routes>
      <Route path="/login" element={ <Login/>}/>
      <Route  path="/" element={ <Index/>}/>
      <Route  path="/post/:id/" element={ <PostView />}/>
    </Routes>
  )
}

export default App
