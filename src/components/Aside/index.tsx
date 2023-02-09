import { Project } from '../Projects';
import { Content } from './styles';

type AsideProps = {
  project: Project
}

export function Aside ({project:{features}}: AsideProps) {
  return (
    <Content>
      <div className="aside-icon">
        <img src="" alt="" />
      </div>
    
      <div className="aside-content">
        <p>{features.description}</p>
        <ul>
            {features.feats.map(feat => <li>{feat}</li>)}
        </ul>
      </div> 
    </Content>
  )
}