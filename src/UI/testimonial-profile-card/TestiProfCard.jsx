import './testi-prof-card.css';


const TestiProfCard = ({ image, text, writer }) => {
    return (
        <div className="testi-profile">
            <div className="prof-img"><img src={image} alt="hello" /></div>
            <div className="comment-box">
                <p>{text}</p>
                <p>{writer}</p>
            </div>
        </div>
    )
}

export default TestiProfCard;