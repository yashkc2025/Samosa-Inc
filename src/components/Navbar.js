import '../styles/navbar.scss';


export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-logo">
            <h2>Samosa <span>Inc.</span></h2>
        </div>
        <div className="navbar-links">
            <a href=''>Home</a>
            <a href=''>Samosa</a>
            <a href=''>Jalebi</a>
            <div className='price'><a href=''>Price</a></div>

        </div>
    </div>
  )
}