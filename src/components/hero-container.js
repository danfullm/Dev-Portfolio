import React from 'react'
import github from '../content/github-ico.svg'
import linkedin from '../content/linkedin-ico.svg'
import down from '../content/down.svg'

export default function HeroContainer() {
    return (
        <div>
             <div className="Hero-container">
          <div className="Hero-left">
            <h1><b>Daniel Fullman</b></h1>
            <h2>Front End, UI/UX Developer.</h2>
            <div className="underline-box"></div>
            <div className="cta-1"><a href="#">View My Work</a></div>
            <div className="social-container">
              <a href="https://github.com/danfullm">
                <img className="social-item" src={github} />
              </a>
              <a href="https://www.linkedin.com/in/daniel-fullman-a322a791/">
                <img className="social-item" src={linkedin} />
              </a>
            </div>
          </div>
          <div className="Hero-right">
          <div className="half-flexylcard"><br/>
            <div className="Hero-decoration"></div>
            <div className="Hero-decoration-2"></div>
          </div>
          </div>
          <div className="scroll-down"><img src={down} />Scroll Down</div>
        </div>
        </div>
    )
}
