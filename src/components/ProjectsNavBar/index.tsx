import { Project } from '../Projects'
import { Content } from './styles'
import navIconImg from '../../assets/navIcon.svg'

type ProjectsNavBarProps = {
  projects: Project[],
  currProject: number,
  setCurrProject: (index: number) => void
}

export function ProjectsNavBar ({projects, currProject, setCurrProject}: ProjectsNavBarProps) {

  function handleSelectProject(index: number){
    setCurrProject(index)
  }

  function generateItem () {
    return projects.map((project, index) => {
       return (
         <li key={index} className={index === currProject ? "active" : ""}>
          <a onClick={() =>handleSelectProject(index)}>{project.title}</a>
         </li>
        )
      }
    )
  }

  return (
    <Content>
      <div id="menuIcon">
        <img  src={navIconImg} alt="Menu icon" />
      </div>

      <ul>
        {generateItem()}
      </ul>
    </Content>
  )
}