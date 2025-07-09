import { NavLink } from "react-router-dom"
import menuBurger from '../assets/menu.png'
import { useEffect, useState } from "react"

export default function Header({ isMobile }){

    const [showMenu, setShowMenu] = useState(false)

    useEffect(()=>{

        if(showMenu && !isMobile) setShowMenu(false)

        
    }, [isMobile])

    const navigation = <>
            <nav className="nav-window">
                <NavLink className={({isActive}) => isActive ? 'navActive' : ''} to={'/'}>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'navActive' : ''} to={'/listings'}>Listings</NavLink>
                <NavLink className={({isActive}) => isActive ? 'navActive' : ''} to={'/properties'}>Properties</NavLink>
                <NavLink className={({isActive}) => isActive ? 'navActive' : ''} to={'/privacy-policy'}>Privacy Policy</NavLink>
            </nav>

            <div>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </>

    const mobileNavigation = <>
        <button onClick={()=>{setShowMenu(true)}} className="menuBtn"><img src={menuBurger} alt="menu" /></button>

        <div className={`nav-mobile-container ${showMenu ? 'show' : ''}`}>
            <nav className="nav-mobile">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/listings'}>Listings</NavLink>
                    <NavLink to={'/properties'}>Properties</NavLink>
                    <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>

                    <div>
                        <NavLink className={`contact contact-login`} to={'/contact'}>Contact</NavLink>
                        <NavLink className={`login contact-login`} to={'/login'}>Login</NavLink>
                    </div>
            </nav>

            <button onClick={() => {setShowMenu(false)}}>X</button>
        </div>

    </>


    return(
        <header>
            <NavLink to={'/'}><img src="/logo.png" alt="R.Cortez Realty" /></NavLink>

            {isMobile ? mobileNavigation : navigation}

        </header>
    )
}