import '../styles/hero.scss'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Enjoy the day with Samosa</h1>
                <h3>Delivered directly to you.</h3>
                <div className='hero-button'><a href=''>Order Now!</a></div>
            </div>
            <div className="hero-image">
                <img src={require('../data/samosa.png')}></img>
            </div>
        </div>
    )
}