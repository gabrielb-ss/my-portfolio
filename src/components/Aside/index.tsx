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

function Item(type: string, features: string[], tools: string[]) {
  if (type === "features") {
    return features.map((feat, index) => <li key={index}>{feat}</li>)

  } else if (type === "tools") {
    return tools.map((toolIcon, index) => 
      <li key={index}>
        <img src={`/icons/${toolIcon}.svg`} alt="" />
      </li>
    )
  }
}

export function Aside ({type, features:{tools, description, feats}}: AsideProps) {
  return (
    <Content>
      <div className="aside-icon">
        <img src={type === "features" ? featuresImg : toolsImg } alt="aside-icon" />
      </div>
    
      <div className={"aside-content " + type}>
        <p>{type === "features" ? description : ''}</p>
        <ul>
           {Item(type, feats, tools)}
        </ul>
      </div> 
    </Content>
  )
}