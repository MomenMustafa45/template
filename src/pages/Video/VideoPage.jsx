import '../../styles/video-page.css'
import video from '../../assests/awesome-video.mp4'

const VideoPage = () => {
    return (
        <div className='video-parent'>
            <div className="video-container">
                <div className="text-box">
                    <h2>Super Awesome Video Here</h2>
                    <p>Its All You Need</p>
                    <button className='video-btn'>See More</button>
                </div>
                <div>
                    <video src={video} autoPlay loop></video>
                </div>
            </div>
        </div>
    )
}


export default VideoPage;