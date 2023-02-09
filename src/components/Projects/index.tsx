import { Container } from './styles';
import { Aside } from '../Aside';
import { useState } from 'react';

export type Project = { 
  title: string,
  features: {
    description: string,
    feats: string[]
  }
}

export function Projects () {
  const [curr_project, setCurr_project] = useState(0);

  const projects: Project =  { 
    title: "title",
    features: {
      description: "Aplicação de gerenciamento de finanças",
      feats: ["feat1", "feat2", "feat3"]
    }
  }


  return (
    <Container>
     <Aside project={projects}/>

    </Container>
  );
}