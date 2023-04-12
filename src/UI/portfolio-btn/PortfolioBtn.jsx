import './portfolio-btn.css';

const PortfolioBtn = ({ text, active, handleClick }) => {
    return (
        <>
            <button className={`${active} port-btn`} onClick={(e) => handleClick(e)}>{text}</button>
        </>
    )
}

export default PortfolioBtn;