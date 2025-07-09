import facebookIcon from '../assets/facebookIcon.png'

export default function Footer(){

    return(
        <footer>
            <img className='facebook' src={facebookIcon} alt="facebook" />

            <h3 className='company'>R. Cortez Realty</h3>

            <p className='address'>Unit G, Zoneth Commercial Building, Purok 9, San Agustin, Trece Martires, Cavite 4109</p>
            <p className='PRC_License'>PRC LICENSE <span>0031429</span></p>

            <p className='copyright'>Copyright © 2025 R. Cortez Realty - All Rights Reserved.</p>
        </footer>
    )
}