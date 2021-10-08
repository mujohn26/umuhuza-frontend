import React from 'react'

const HeaderIcon = (props) => {
  return (
    <div className="header-icon-container" onClick={() => props.link()}>
      <div>
        <img src={props.icon} alt="signup icon" height="30" width="30" />
      </div>
      <div className="icon-text">{props.title}</div>
    </div>
  )
}

export default HeaderIcon;