import { Link } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const StyledButton = withStyles({
  root: {
    color: "#454545",
    fontFamily: "Roboto",
    textTransform: 'none',
  }
})(Button);

function SocialsBar() {
  return (
    <Grid container justifyContent="center" style={{marginBottom: '5%'}}>
      <Grid item xs={6} align="center">
        <StyledButton
          href="https://www.linkedin.com/in/walshdan9163/"
          component={Link}
          size="large"
          to="/url"> 
          LinkedIn
        </StyledButton>
        <StyledButton
          href="https://www.github.com/walshdan9163"
          component={Link}
          size="large"
          to="/url"> 
          Github
        </StyledButton>
      </Grid>
    </Grid>
  );
}

export default SocialsBar;
