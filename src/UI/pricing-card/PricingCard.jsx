import './pricing-card.css';


const PricingCard = ({ type, price, feature1, feature2, feature3, feature4 }) => {
    return (
        <div className="pricing-card">
            <div className="price-num">
                <h3>{type}</h3>
                <p>{price}</p>
            </div>
            <div className="pricing-features">
                <p>{feature1}</p>
                <p>{feature2}</p>
                <p>{feature3}</p>
                <p>{feature4}</p>
            </div>
            <button>Buy now</button>
        </div>
    )
}

export default PricingCard;