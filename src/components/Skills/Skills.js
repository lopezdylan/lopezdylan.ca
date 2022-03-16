import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'
import { DiPython, DiNodejsSmall } from 'react-icons/di';
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiMysql, 
  SiPostgresql, 
  SiExpress,
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
  SiGnubash
} from 'react-icons/si';
import { images } from '../../constants'; 

const Skills = () => {

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <div className='skills__box'>
        <div className='skills_tech'>
          <h3>Languages</h3>
          <h4>Proficient</h4>
          <i className='python__icon'><SiPython fontSize='large'/></i>
          <i className='javascript__icon'><SiJavascript fontSize='large' /></i>
          <i className='mysql__icon'><SiMysql fontSize='large' /></i>           
          <i className='html__icon'><SiHtml5 fontSize='large' /></i>
          <i className='css__icon'><SiCss3 fontSize='large' /></i>
          <i className='bash__icon'><SiGnubash fontSize='large' /></i>
          <p>My favorite languages for systems programming, software engineering, and data analysis.</p>
        </div>
        <div className='skills_tech'>
          <h3>Languages</h3>
          <h4>Familiar</h4>
          <i className='dotnet__icon'><SiDotnet fontSize='large' /></i>
          <i className='php__icon'><SiPhp fontSize='large' /></i>
          <i className='graphql__icon'><SiGraphql fontSize='large' /></i>
          <i className='cplusplus__icon'><SiCplusplus fontSize='large' /></i>
          <p>My preferred technologies for front-end web development and component design.</p>          
        </div>
        <div className='skills_tech'>
          <h3>Libraries &amp; Frameworks</h3>
          <i className='django__icon'><SiDjango fontSize='large' /></i>
          <i className='laravel__icon'><SiLaravel fontSize='large' /></i>
          <i className='react__icon'><SiReact fontSize='large' /></i>
          <i className='nodejs__icon'><DiNodejsSmall fontSize='large' /></i>
          <i className='bootstrap__icon'><SiBootstrap fontSize='large' /></i>
          <i className='rails__icon'><SiRubyonrails fontSize='large' /></i>
          <p>My preferred technologies for back-end web programming and database architecture.</p>
        </div>
        <div className='skills_tech'>
          <h3 className='skills__header__margins'>Tools</h3>
          <i className='git__icon'><SiGit fontSize='large' /></i>
          <i className='ubuntu__icon'><SiUbuntu fontSize='large' /></i>
          <i className='vscode__icon'><SiVisualstudio fontSize='large' /></i>
          <i className='jupyter__icon'><SiJupyter fontSize='large' /></i>
          <p>My favorite tools for version control, code editing, and container orchestration.</p>          
        </div>
      </div>

    </section>
  )
}

export default Skills
