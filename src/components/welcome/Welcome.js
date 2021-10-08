import React from 'react'
import SearchInput from './SearchInput'
import Footer from './Footer'
import HeaderIcon from './HeaderIcon'
import useAuthModal from '../../helpers/useAuthModal'

import SignupIcon from '../../assets/signup.png'
import LoginIcon from '../../assets/login.png'
import AboutIcon from '../../assets/about.png'
import Logo from '../../assets/logo.png'

import './Welcome.css'



const WelcomePage = (props) => {
  const [openSignup, openLogin, AuthModal] = useAuthModal(props.page)

  const headerIcons = [
    {
      icon: SignupIcon,
      title: 'Signup',
      link: openSignup,
    },
    {
      icon: LoginIcon,
      title: 'Login',
      link: openLogin
    },
    {
      icon: AboutIcon,
      title: 'About us',
    },
  ]
  return (
    <>
      <AuthModal />

      <div className="homepage-wrapper">
        <div className="header">
          <div className="header-wrapper">
            <div><img src={Logo} alt='logo' height='50' width='50'/></div>
            <div className="links-wrapper">
              {headerIcons.map((value, idx) => {
                return (
                  <div key={idx} className="link">
                    <HeaderIcon
                      icon={value.icon}
                      title={value.title}
                      link={value.link}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="body">
          <div className="welcome-title">
            Welcome to Umuhuza online web platform.
          </div>
          <div>
            <SearchInput />
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default WelcomePage
