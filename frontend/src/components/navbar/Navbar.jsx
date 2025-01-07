import react from 'react'
import './navbar.css'
function Navbar(){
    return (
        <>
        <div className='navbar'>
            <div className="navLeft">
                <h2 className='navHead'>नाम </h2>
            </div>
            <div className="navRight">
                <button className="register">register</button>
            </div>
        </div>
        </>
    )
}

export default Navbar;