import { useState, useEffect } from 'react'
import '../../styles/portfolio.css';
import HeaderPageText from '../../UI/header-page-text/HeaderPageText';
import PortfolioBtn from '../../UI/portfolio-btn/PortfolioBtn';
import DUMMYDATA from '../../utilities/Data';



const Portfolio = () => {
    const [portImgs, setPortImgs] = useState([])
    const [newList, setNewList] = useState([])
    const [test, setTest] = useState('all')


    useEffect(() => {
        setPortImgs(DUMMYDATA)
    }, [])




    const handleClick = (e) => {
        let btnTxt = e.target.textContent
        setTest(btnTxt)
        setNewList(portImgs.filter((e) => e.type === btnTxt))


    }

    return (
        <div className='portfolio-parent' id='portfolio'>
            <HeaderPageText header='Portfolio' text='Curabitur arcu erat,
             accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
             eget tincidunt. ' />

            <div className="portfolio-container">
                <div className="btns-container">
                    <PortfolioBtn text='all' active={test === 'all' ? 'active' : ''} handleClick={handleClick} />
                    <PortfolioBtn text='app' active={test === 'app' ? 'active' : ''} handleClick={handleClick} />
                    <PortfolioBtn text='photo' active={test === 'photo' ? 'active' : ''} handleClick={handleClick} />
                    <PortfolioBtn text='web' active={test === 'web' ? 'active' : ''} handleClick={handleClick} />
                    <PortfolioBtn text='print' active={test === 'print' ? 'active' : ''} handleClick={handleClick} />
                </div>

                {/* Filtering and mapping the images */}
                {/* Filtering and mapping the images */}

                <div className="pics-container">
                    {newList.length === 0 ? portImgs.map((e) => {
                        return (
                            <div className="pic-box" key={Math.floor(Math.random() * 100)}>
                                <img src={e.img} alt="hello" />
                                <div className="caption">
                                    <h4>Awesome Image</h4>
                                    <p>Photography</p>
                                </div>
                            </div>
                        )

                    }) : newList.map((e) => {
                        return (
                            <div className="pic-box" key={Math.floor(Math.random() * 100)}>
                                <img src={e.img} alt="hello" />
                                <div className="caption">
                                    <h4>Awesome Image</h4>
                                    <p>Photography</p>
                                </div>
                            </div>
                        )

                    })}

                </div>
            </div>
        </div>
    )
}

export default Portfolio;