import '../../styles/pricing.css';
import HeaderPageText from '../../UI/header-page-text/HeaderPageText';
import PricingCard from '../../UI/pricing-card/PricingCard';


const Pricing = () => {
    return (
        <div className="pricing-parent" id='pricing'>
            <HeaderPageText header='Pricing' text='Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt. '/>
            <div className="pricing-cards-container">
                <PricingCard
                    type='Basic'
                    price='19'
                    feature1='Feature No 1'
                    feature2='Extra Feature'
                    feature3='Extra Feature No 2'
                    feature4='Feature' />
                <PricingCard
                    type='Premium'
                    price='29'
                    feature1='Feature No 1'
                    feature2='Extra Feature'
                    feature3='Extra Feature No 2'
                    feature4='Feature' />
                <PricingCard
                    type='pro'
                    price='39'
                    feature1='Feature No 1'
                    feature2='Extra Feature'
                    feature3='Extra Feature No 2'
                    feature4='Feature' />
                <PricingCard
                    type='platinum'
                    price='49'
                    feature1='Feature No 1'
                    feature2='Extra Feature'
                    feature3='Extra Feature No 2'
                    feature4='Feature' />
            </div>
        </div>
    )
}

export default Pricing