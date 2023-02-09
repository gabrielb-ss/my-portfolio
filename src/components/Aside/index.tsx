import { Content } from './styles';
import featuresImg from '../../assets/features.svg';
import toolsImg from '../../assets/tools.svg';

type AsideProps = {
  description: string, 
  features: string[], 
  type: string
}

export function Aside ({description, features, type}: AsideProps) {
  return (
   
    <Content>
      <div className="aside-icon">
        <img src={type === "features" ? featuresImg : toolsImg } alt="" />
      </div>
    
      <div className="aside-content">
        <p>{description}</p>
        <ul>
            {features.map((feat, index) => <li key={index}>{feat}</li>)}
        </ul>
      </div> 
    </Content>
  )
}