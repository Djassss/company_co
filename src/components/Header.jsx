import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const social = [
  {
    id: 1,
    to: 'https://github.com/Djassss?tab=repositories',
    icon: faGithub
  },
  {
    id: 2,
    to: 'https://www.linkedin.com/in/jasur-umarov-a05398164/',
    icon: faLinkedin
  }
]



const Header = () => {
  return(
    <>
    <header>
      <h1>Company&Co.</h1>
      <div>
        {social.map(({id, to, icon}) => (
          <li key={id}>
            <a href={to}>
              <FontAwesomeIcon icon={icon}/>
            </a>
          </li>
        ))}
      </div>
    </header>
    </>
  )
}

export default Header