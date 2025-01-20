import "./Feed.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment"; 

import { API_KEY, valueCount } from "../../data";

function Feed(props) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null)

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=300&regionCode=in&videoCategoryId=${props.category}&key=${API_KEY}`)
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
  },[props.category])

  console.log(data)

  return (
    <div className="feed">
      {data && data.items.map(d => (
        <div className="card" key={d.id}>
          <Link to={`/video/${d.snippet.categoryId}/${d.id}`}>
            <img src={d.snippet.thumbnails.medium.url} alt='' />
          </Link>
          <h3>{d.snippet.title}</h3>
          <p>{d.snippet.channelTitle}</p>
          <p>{valueCount(d.statistics.viewCount)} views &bull; {moment(d.snippet.publishedAt).fromNow()}</p>
    </div>
))}

    </div>
  );
}

export default Feed;
