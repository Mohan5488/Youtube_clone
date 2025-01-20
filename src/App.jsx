import NavBar from "./Components/NavBar/NavBar"
import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Video from "./Pages/Video/Video.jsx"
import { useState } from "react"
function App(){
    const [sidebar, setSidebar] = useState(true)
    return(
        <div>
            <NavBar setSidebar = {setSidebar}/>
            <Routes>
                <Route path='/' element = {<Home sidebar={sidebar} />} />
                <Route path='/video/:videoId/:id' element = {<Video />} />
            </Routes>
        </div>
    )
}
export default App