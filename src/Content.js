import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import { Container } from '@material-ui/core';

function Content() {
  return (
    <Container>
      <Experience />
      <Projects />
      <Skills />
    </Container>
  );
}

export default Content;
