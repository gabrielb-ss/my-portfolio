import { Project } from '../Projects'
import { Content } from './styles'
import navIconImg from '../../assets/navIcon.svg'

type ProjectsNavBarProps = {
  projects: Project[],
  setCurrProject: (index: number) => void
}

export function ProjectsNavBar ({projects, setCurrProject}: ProjectsNavBarProps) {

  function generateItem () {
    return projects.map((project, index) => {
       return (
         <li> 
           <a href="" onClick={() => setCurrProject(index)}>{project.title}</a>
         </li>
       )}
     )
   }

  return (
    <Content>
      <img id="menuIcon" src={navIconImg} alt="Menu icon" />
      <ul>
        {generateItem()}
      </ul>
    </Content>
  )
}