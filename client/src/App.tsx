import { Routes, Route } from "react-router-dom";
import Login from "@pages/Login/Login";
import Register  from "@pages/Register/Register";
import Index from "@pages/Index/Index";
import PostView from "@pages/PostView/PostView";
import ProyectView from "@pages/ProyectView/ProyectView";
import ProyectViewRecent from "@pages/ProyectView/ProyectViewRecent";
import NotFound from "@pages/404/NotFound";
import ProjectFinder from "@pages/ProjectsList/ProjectFinder";
function App() {

  return (
    <Routes>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/register" element={ <Register/>}/>
      <Route  path="/" element={ <Index/>}/>
      <Route  path="/post/:id/" element={ <PostView />}/>
      <Route  path="/:type/:id/" element={ <ProyectView/>}/>
      <Route  path="/:type/:id/recent" element={ <ProyectViewRecent/>}/>
      <Route  path="/projects" element={ <ProjectFinder/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
