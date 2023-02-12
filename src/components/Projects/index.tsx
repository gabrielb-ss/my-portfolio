import { Container } from './styles';
import { Aside } from '../Aside';
import { useState } from 'react';
import { SlideShow } from '../SlideShow';

export type Project = { 
  title: string,
  features: {
    tools: string[],
    description: string,
    feats: string[]
  },
}


export function Projects () {
  const [curr_project, setCurr_project] = useState(0);
  

  const projects: Project[] = [{ 
    title: "dtmoney",
    features: {
      tools: ["reactjs", "typescript", "styledComponents", "vscode", "github"],
      description: "Aplicação de gerenciamento de finanças",
      feats: ["feat1", "feat2", "feat3"]
    }
    
  }, { 
    title: "jd15",
    features: {
      tools: ["styledComponents", "vscode", "github", "reactjs", "typescript"],
      description: "Jogo dos 15",
      feats: ["features one", "feateature two", "feature three"]
    }
  }];


  return (
    <Container>
      <Aside 
        features={projects[curr_project].features}
        type={"features"}
      />

      <SlideShow projectName={projects[curr_project].title}/>
      <Aside 
        features={projects[curr_project].features}
        type={"tools"}
      />

    </Container>
  );
}