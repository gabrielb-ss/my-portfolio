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

  const projects: Project =  { 
    title: "title",
    features: {
      description: "Aplicação de gerenciamento de finanças",
      feats: ["feat1", "feat2", "feat3"],
      tools: ["tool1", "tool2", "tool3"]
    }
  }


  return (
    <Container>
      <Aside 
        description={projects.features.description} 
        features={projects.features.feats}
        type={"features"}
      />

    </Container>
  );
}