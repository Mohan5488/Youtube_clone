import './Home.css'
import Sidebar from '../../SideBar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import { useState } from 'react'
function Home(props){
    console.log(props.sidebar)
    const [category, setCategory] = useState(0)
    return(
        <div>
            <Sidebar category = {category} setCategory = {setCategory} sidebar ={props.sidebar} />
            <div className={`container ${props.sidebar ? '':'large-continer'}`}>
                <Feed category= {category} />
            </div>
        </div>
    )
}
export default Home