import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Skills } from './Skills'


import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDocker,
  faStripe,
  faGitAlt,
  faAws,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons'



const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Full-Stack Web developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a 
            tech-obsessed, a sports fanatic and Loyal !!!
          </p>
          <Link to="/contact" className="flat-button">
            Resume...
            <FontAwesomeIcon icon={faDownload} color="##ffd700" />
          </Link>

        </div>
        <div className="stage-cube-cont">
           <Skills/>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
