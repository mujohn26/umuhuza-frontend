import React from 'react'
import TwitterIcon from '../../assets/twitter.png'
import FacebookIcon from '../../assets/facebook-logo.png'
import InstagramIcon from '../../assets/instagram.png'

import './Welcome.css'

const iconStyles = { marginLeft: '10%', cursor: 'pointer' }
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-upper-section">
        <div style={{ width: '40%' }}/>
        <div style={{ width: '20%' }}>
          <img src={TwitterIcon} alt="twitter" width="35" height="35" style={iconStyles}/>
          <img src={FacebookIcon} alt="facebook" width="35" height="35" style={iconStyles}/>
          <img src={InstagramIcon} alt="instagram" width="35" height="35" style={iconStyles}/>
        </div>
        <div style={{ width: '40%' }}/>
      </div>
      <div className="footer-down-section">
        <p style={{ marginTop: '4%', marginRight:'5%'}}>

        © 2021 UMUHUZA. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
