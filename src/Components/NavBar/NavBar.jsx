import './NavBar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/jack.png'
import more_icon from '../../assets/more.png'
import { Link } from 'react-router-dom'
function NavBar(props) {
    const setSidebar = props.setSidebar
    return(
        <nav className='flex-div'>
            <div className="nav-left flex-div" >
                <img onClick={()=>setSidebar(prev => prev === false ? true : false)} className='menu-icon' src={menu_icon} alt="" />
                <Link to='/'><img className='logo' src={logo} alt="" /></Link>
            </div>
            <div className="nav-middle flex-div search-box">
                <input type="text" placeholder='search' />
                <img src={search} alt="" />
            </div>
            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification} alt="" />
                <img className='user-icon' src={profile} alt="" />
            </div>
        </nav>
    )
}
export default NavBar