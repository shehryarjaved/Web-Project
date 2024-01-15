import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/shehryar-javed-107a80174/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/shehryarjaved" target="_blank" rel='noreferrer'><BsGithub/></a>
        
    </div>
  )
}

export default HeaderSocials