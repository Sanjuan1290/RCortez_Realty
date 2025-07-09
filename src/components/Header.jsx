import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <img src="/logo.png" alt="R.Cortez Realty" />

            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/listings'}>Listings</NavLink>
                <NavLink to={'/properties'}>Properties</NavLink>
                <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
            </nav>

            <NavLink to={'/login'}>Login</NavLink>
        </header>
    )
}