import { Routes, Route } from "react-router-dom";
import Login from "@pages/Login/Login";
import Index from "@pages/Index/Index";
import PostView from "@pages/PostView/PostView";
import ProyectView from "@pages/ProyectView/ProyectView";
import ProyectViewRecent from "@pages/ProyectView/ProyectViewRecent";
function App() {

  return (
    <Routes>
      <Route path="/login" element={ <Login/>}/>
      <Route  path="/" element={ <Index/>}/>
      <Route  path="/post/:id/" element={ <PostView />}/>
      <Route  path="/:type/:id/" element={ <ProyectView/>}/>
      <Route  path="/:type/:id/recent" element={ <ProyectViewRecent/>}/>
    </Routes>
  )
}

export default App
