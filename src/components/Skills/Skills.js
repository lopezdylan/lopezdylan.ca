// import uniqid from 'uniqid'
// import { skills } from '../../portfolio'
import './Skills.css'
import {  DiNodejsSmall } from 'react-icons/di';
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiMysql, 
  SiGit,
  SiUbuntu,
  SiVisualstudio,
  SiDotnet,
  SiPhp,
  SiGraphql,
  SiCplusplus,
  SiDjango,
  SiLaravel,
  SiRubyonrails,
  SiJupyter,
  SiGnubash,
} from 'react-icons/si';

const Skills = () => {

  // const { description } = skills

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <div className='skills__box'>
        <div className='skills_tech'>
          <h3>Languages</h3>
          <h4 className='skills__sub__header'>Proficient</h4>
          <i className='python__icon'><SiPython fontSize='large'/></i>
          <i className='javascript__icon'><SiJavascript fontSize='large' /></i>
          <i className='mysql__icon'><SiMysql fontSize='large' /></i>           
          <i className='html__icon'><SiHtml5 fontSize='large' /></i>
          <i className='css__icon'><SiCss3 fontSize='large' /></i>
          <i className='bash__icon'><SiGnubash fontSize='large' /></i>
          <p>My preferred languages that I frequently use and am proficient in. The majority of my time off work is practicing and utilizng these technologies. </p>
        </div>
        <div className='skills_tech'>
          <h3>Languages</h3>
          <h4 className='skills__sub__header'>Familiar</h4>
          <i className='dotnet__icon'><SiDotnet fontSize='large' /></i>
          <i className='php__icon'><SiPhp fontSize='large' /></i>
          <i className='graphql__icon'><SiGraphql fontSize='large' /></i>
          <i className='cplusplus__icon'><SiCplusplus fontSize='large' /></i>
          <p>Languages that I have exposure to through coursework or through projects with other developers. </p>          
        </div>
        <div className='skills_tech'>
          <h3>Libraries &amp; Frameworks</h3>
          <i className='django__icon'><SiDjango fontSize='large' /></i>
          <i className='laravel__icon'><SiLaravel fontSize='large' /></i>
          <i className='react__icon'><SiReact fontSize='large' /></i>
          <i className='nodejs__icon'><DiNodejsSmall fontSize='large' /></i>
          <i className='bootstrap__icon'><SiBootstrap fontSize='large' /></i>
          <i className='rails__icon'><SiRubyonrails fontSize='large' /></i>
          <p>Libraries and frameworks that I've utilized frequently and am growing to become more comfortable with.</p>
          {/* <p>Currently have the most utilization with Laravel from work experience and personal project. Currently have dedicated a significant amount of time to learning and becoming proficient in Django and React.</p> */}
        </div>
        <div className='skills_tech'>
          <h3 className='skills__header__margins'>Tools</h3>
          <i className='git__icon'><SiGit fontSize='large' /></i>
          <i className='ubuntu__icon'><SiUbuntu fontSize='large' /></i>
          <i className='vscode__icon'><SiVisualstudio fontSize='large' /></i>
          <i className='jupyter__icon'><SiJupyter fontSize='large' /></i>
          <p>My favorite operating system and tools that I use daily and feel comfortable using.</p>                      
        </div>
      </div>

    </section>
  )
}

export default Skills
