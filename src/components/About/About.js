import { SiGithub, SiLinkedin } from 'react-icons/si';
import { about } from '../../portfolio'
import './About.css'


const About = () => {
  const { name, role, description, closingDescription, resume, social } = about

  return (
    
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}</span> 
        </h1>
      )}
      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      <p className='about__desc'>{closingDescription && closingDescription}</p>
        <div className='about__contact center'>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}
        </div>
        <div className='about__link__margins'>
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <SiGithub />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <SiLinkedin />
                </a>
              )}
            </>
          )}
        </div>
    </div>
  )
}

export default About
