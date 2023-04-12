import './header-page-text.css';


const HeaderPageText = ({ header, text }) => {

    return (
        <div className="header-text-parent">
            <h1>{header}</h1>
            <p>{text}</p>
        </div>
    )
}


export default HeaderPageText;