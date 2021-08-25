import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';
import { Link } from '@material-ui/core';

const ProjectsContainer = withStyles({
    root: {
      marginBottom: '10%'
    },
  })(Container);

const DividerWithMargin = withStyles({
    root: {
        marginBottom: '5%'
    },
})(Divider);
    
function Projects() {
    return (
        <>
        <DividerWithMargin />
        <ProjectsContainer>
                <Grid container spacing={6} justifyContent="center">
                    <Grid item xs={12} align="center">
                        <Typography variant="h2" component="h2">
                            Projects
                        </Typography>
                    </Grid>
                    <Grid item xs={12} m={6}>
                        <Typography variant="h3" component="h3">
                        <Link href="https://nofreelunch.herokuapp.com/" variant="h3">
                            No Free Lunch
                        </Link>
                        </Typography>
                        <Typography variant="h5" component="h5">
                            Web App used to split tips, fees and tax after group order.
                        </Typography>
                        <Typography variant="h6" component="h6">
                            Built With: React.js, Node.js, Express and Bootstrap
                        </Typography>
                    </Grid>
                    <Grid item xs={12} m={6}>
                        <Typography variant="h3" component="h3">
                            <Link href="https://calculator-2f70d.firebaseapp.com/home" variant="h3">
                                Calculator--
                            </Link>
                        </Typography>
                        <Typography variant="h5" component="h5">
                            Progressive Web App calculator with a fun twist. Try it out!
                        </Typography>
                        <Typography variant="h6" component="h6">
                            Built With: Typscript, HTML, SCSS, Ionic
                        </Typography>
                    </Grid>
                </Grid>
        </ProjectsContainer>
        </>
    )
  }
  
  export default Projects;
  