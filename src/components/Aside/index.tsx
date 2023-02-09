import { Content } from './styles';
import featuresImg from '../../assets/features.svg';
import toolsImg from '../../assets/tools.svg';

type AsideProps = {
  type: string,
  features: {
    tools: string[],
    description: string,
    feats: string[]
  }
}

export function Aside ({type, features:{tools, description, feats}}: AsideProps) {
  return (
   
    <Content>
      <div className="aside-icon">
        <img src={type === "features" ? featuresImg : toolsImg } alt="" />
      </div>
    
      <div className="aside-content">
        <p>{description}</p>
        <ul>
            {feats.map((feat, index) => <li key={index}>{feat}</li>)}
        </ul>
      </div> 
    </Content>
  )
}