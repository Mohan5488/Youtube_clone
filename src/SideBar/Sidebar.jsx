import "./Sidebar.css";
import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

function Sidebar(props) {
  const setCategory = props.setCategory;
  const shortcutLinks = [
    { icon: home, label: "Home", category: () => setCategory(0)},
    { icon: game_icon, label: "Games", category: () => setCategory(20) },
    { icon: automobiles, label: "Autos & Vehicles", category: () => setCategory(2) },
    { icon: sports, label: "Sports", category: () => setCategory(17) },
    { icon: entertainment, label: "Entertainment", category: () => setCategory(24) },
    { icon: tech, label: "Trailers", category: () => setCategory(44) },
    { icon: music, label: "Music", category: () => setCategory(10) },
    { icon: blogs, label: "Education", category: () => setCategory(27) },
    { icon: news, label: "News", category: () => setCategory(25) },
  ];
  
  const subscribed = [
    { icon: jack, label: "Jack's Channel" },
    { icon: simon, label: "Simon's Channel" },
    { icon: tom, label: "Tom's Tech" },
    { icon: megan, label: "Megan's Music" },
    { icon: cameron, label: "Cameron's Vlogs" },
  ];

  return (
    <div className={`sidebar ${ props.sidebar ? "" : "small-side-bar" }`} >
      <div className="shortcut-links">
        {shortcutLinks.map((link, index) => (
          <div className="side-link " onClick={link.category} key={index}>
            <img src={link.icon} alt={`${link.label} icon`} />
            <p>{link.label}</p>
          </div>
        ))}
      </div>
      <hr />

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        {subscribed.map((channel, index) => (
          <div className="side-link" key={index}>
            <img src={channel.icon} alt={`${channel.label} icon`} />
            <p>{channel.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
