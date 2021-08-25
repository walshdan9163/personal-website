import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';

const SkillsContainer = withStyles({
    root: {
      marginBottom: '10%'
    },
  })(Container);

const DividerWithMargin = withStyles({
root: {
    marginBottom: '5%'
},
})(Divider);


function Skills() {
    return (
        <>
        <DividerWithMargin />
        <SkillsContainer>
                <Grid container spacing={6} justifyContent="center">
                    <Grid item xs={12} align="center">
                        <Typography variant="h2" component="h2">
                            Skills
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} alignItems="baseline" justifyContent="center">
                        <Typography variant="h4" component="h4" align="center">
                            Languages:
                        </Typography>
                        <Typography variant="h5" component="h5">
                            Python, JavaScript, SQL, C#, PowerShell, Apex, SOQL
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} alignItems="baseline" justifyContent="center">
                        <Typography variant="h4" component="h4" align="center">
                        Software:
                        </Typography>
                        <Typography variant="h5" component="h5">
                        Visual Studio, Git, Github, Visual Studio Code, Microsoft Azure, Salesforce
                        </Typography>
                    </Grid>
                </Grid>
        </SkillsContainer>
        <DividerWithMargin />
        </>
    );
  }
  
  export default Skills;
  