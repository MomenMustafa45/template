import './prog-bar.css';

const ProgBar = ({ progTag, progNum }) => {

    return (
        <div className="prog-bar-container">
            <p>{progTag}</p>
            <div className="prog-bar">
                <span data-text={`${progNum}%`} style={{ width: `${progNum}%` }} ></span>
            </div>
        </div>
    )

}

export default ProgBar;
