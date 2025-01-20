import { useParams } from 'react-router-dom'
import PlayVideo from '../../Components/Play Video/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import './Video.css'
function Video(){
    const {id,videoId} = useParams()
    return(
        <div className="play-container">
            <PlayVideo videoId={videoId} id={id} />
            <Recommended categoryId ={videoId} />
        </div>
    )
}
export default Video