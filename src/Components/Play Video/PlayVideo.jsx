import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import user from '../../assets/user_profile.jpg'
import { API_KEY, valueCount } from '../../data'
import { useState, useEffect } from 'react'
import moment from 'moment'

function PlayVideo({ id }) {
    const [data, setData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${API_KEY}`
                );
                if (!response.ok) throw new Error("Failed to fetch video data");
                const result = await response.json();
                setData(result.items[0]);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchdata();
    }, [id]);

    useEffect(() => {
        if (data?.snippet?.channelId) {
            const fetchChannelData = async () => {
                try {
                    const response = await fetch(
                        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${data.snippet.channelId}&key=${API_KEY}`
                    );
                    if (!response.ok) throw new Error("Failed to fetch channel data");
                    const result = await response.json();
                    setChannelData(result.items[0]);
                } catch (err) {
                    setError(err.message);
                }
            };
            fetchChannelData();
        }
    }, [data]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${id}&key=${API_KEY}`
                );
                if (!response.ok) throw new Error("Failed to fetch comments");
                const result = await response.json();
                setComments(result.items || []);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchComments();
    }, [id]);

    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>Loading...</div>;


    
    return (
        <div className="play-video">
            <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&controls=1&autohide=1`}
                allowFullScreen
            ></iframe>
            <h3>{data.snippet.title || "Title Here"}</h3>
            <div className="play-video-info">
                <div className="publisher">
                    <img src={channelData && channelData.snippet.thumbnails.default.url } alt="" />
                    <div>
                        <p>{data.snippet.channelTitle}</p>
                        <span>
                            {channelData?.statistics?.subscriberCount
                                ? valueCount(channelData.statistics.subscriberCount)
                                : "N/A"}{" "}
                            Subscribers
                        </span>
                    </div>
                        <button>Join</button>
                        <button>Subscribe</button>
                </div>
                <div className="shareInfo">
                    <span>
                        <img src={like} alt="" />
                        {data.statistics.likeCount
                            ? valueCount(data.statistics.likeCount)
                            : ""}
                    </span>
                    <span style={{ marginLeft: "5px", marginRight: "10px" }}>
                        <img src={dislike} alt="" />
                    </span>
                    <span>
                        <img src={share} alt="" />
                        Share
                    </span>
                    <span>
                        <img src={save} alt="" />
                        Save
                    </span>
                </div>
            </div>
            <div className="vid-description">
                <p>
                    {data.statistics.viewCount
                        ? valueCount(data.statistics.viewCount)
                        : "16K"}{" "}
                    Views • {moment(data.snippet.publishedAt).fromNow()}
                </p>
                <p style={{ marginTop: "5px" }}>
                    {data.snippet.description.slice(0, 250)}
                </p>
                <p className="second">
                    {channelData && channelData.snippet.description.slice(0,250)}
                </p>
            </div>
            <h4 className="comment-h">
                {data.statistics.commentCount
                    ? valueCount(data.statistics.commentCount)
                    : "0"}{" "}
                Comments
            </h4>

            {comments.map((item, index) => {
            const topLevelComment = item.snippet.topLevelComment.snippet;
            return (
                <div key={index} className="comments">
                    <img
                        src={item && topLevelComment.authorProfileImageUrl || user}
                        alt="Author"
                    />
                    <div>
                        <h3>
                            {item && topLevelComment.authorDisplayName}
                            <span>{item && moment(topLevelComment.publishedAt).fromNow() || "Some time ago"}</span>
                        </h3>
                        <p>
                            {item && topLevelComment.textDisplay}
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>{valueCount(item && topLevelComment.likeCount)}</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            );
        })}

            
        </div>
    );
}
export default PlayVideo;
