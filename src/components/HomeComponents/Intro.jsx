import { NavLink } from "react-router-dom"

export default function Intro(){

    return(
        <section className="intro_section">
            <div>
                <h1>LIVE WHERE YOU BELONG</h1>
                <p>Looking to buy or invest in property?</p>
                <p>We list houses, condos, and land across the country.</p>
                <p>Browse verified listings, compare prices, and talk directly with trusted agents.</p>
                <NavLink to={'/listings'}>Browse Listings</NavLink>
            </div>

            <div>

                <img src="/realty.png" alt="realty image" />

            </div>
        </section>
    )
}