import '../styles/intro.scss'


export default function Intro() {
    return(
        <div className="intro">
            <div className="intro-image">
                <img src={require('../data/samosa-basket.png')}></img>
            </div>
            <div className="intro-text">
                <h1>The legendary Samosa</h1>
                <h3>
                    
                A samosa or singara is a fried South Asian pastry with a savoury filling, 
                including ingredients such as spiced potatoes, onions, and peas. 
                It may take different forms, including triangular, cone, or half-moon shapes, 
                depending on the region

                </h3>
            </div>
        </div>

    )
}