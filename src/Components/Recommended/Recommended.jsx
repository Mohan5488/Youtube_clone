import './Recommended.css'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_KEY, valueCount } from '../../data';
import moment from 'moment';
function Recommended({categoryId}){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const {videoId, id} = useParams()
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=in&videoCategoryId=${categoryId}&key=${API_KEY}`)
                if(!response.ok){
                throw new Error('failed to fetch data');
                }
                const result = await response.json();
                setData(result);
            }
            catch(err){
                setError(err)
            }
            }
        fetchData();
    },[categoryId,id])
    console.log(data)

    
    return (
        <div className="recommanded">
            {data && data.items.map(d => (
                <Link to={`/video/${d.snippet.categoryId}/${d.id}`} className="side-video-list" key={d.id}>
                    <img src={d.snippet.thumbnails.medium.url} alt='' />
                    <div className="video-info">
                        <h4>{d.snippet.title}</h4>
                        <p>{d.snippet.channelTitle}</p>
                        <p>{valueCount(d.statistics.viewCount)} views &bull; {moment(d.snippet.publishedAt).fromNow()}</p>
                    </div>
                </Link>
            ))}
        </div>
    );

}
export default Recommended