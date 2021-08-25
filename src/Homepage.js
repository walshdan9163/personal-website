import SocialsBar from './SocialsBar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Container } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
      color: "#454545"
    },
  }
});

function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <SocialsBar />
        <Content />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Homepage;
