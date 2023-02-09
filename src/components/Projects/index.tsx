import { Container } from './styles';
import { Aside } from '../Aside';
import { useState } from 'react';

export type Project = { 
  title: string,
  features: {
    description: string,
    feats: string[],
    tools: string[]
  }
}


export function Projects () {
  const [curr_project, setCurr_project] = useState(0);
  

  const projects: Project[] = [{ 
    title: "Dt-money",
    features: {
      description: "Aplicação de gerenciamento de finanças",
      feats: ["feat1", "feat2", "feat3"],
      tools: ["tool1", "tool2", "tool3"]
    }
  }, { 
    title: "JD15",
    features: {
      description: "Jogo dos 15",
      feats: ["feat1", "feat2", "feat3"],
      tools: ["tool1", "tool2", "tool3"]
    }
  }];


  return (
    <Container>
      <Aside 
        description={projects[curr_project].features.description} 
        features={projects[curr_project].features.feats}
        type={"features"}
      />

      <Aside 
        description={projects[curr_project].features.description} 
        features={projects[curr_project].features.feats}
        type={"tools"}
      />

    </Container>
  );
}