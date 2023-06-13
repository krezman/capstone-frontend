import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return(
        <div>
            <section className="footer">
            <p className='rights'>&copy; 2023 Your Day.&nbsp;&nbsp;&nbsp; All rights reserved.</p>
            <img className='footerLogo' src="https://i.imgur.com/NRq6NCU.png"></img>
              <div>
                    <ul className='firstUl'>
                        <li>Home</li><br></br>
                        <li>Wedding Planners</li><br></br>
                        <li>Day-of-Coordinators</li><br></br>
                        <li>Food Catering</li><br></br>
                        <li>DJ/Entertainment</li><br></br>
                        
                    </ul>
                    <ul className='secondUl'>
                        <li>Photographers</li><br></br>
                        <li>Floral Designers</li><br></br>
                        <li>Officiants</li><br></br>
                        <Link to="/about" className='moreInfo'><li>About</li><br></br></Link>
                        <li>Contact</li><br></br>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Footer;