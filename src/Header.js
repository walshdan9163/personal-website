import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const HeaderGrid = withStyles({
  root: {
    padding: '5%',
    marginTop: '5%',
    borderBottom: 1,
    borderColor: 'black'
  },
})(Grid);

function Header() {
  return (
      <HeaderGrid container alignContent="space-between" alignItems="baseline">
        <Grid item container xs={12} sm={6} justifyContent="flex-start">
          <Typography variant="h1" component="h1">
            Daniel Walsh
          </Typography>
        </Grid>
        <Grid item container xs={12} sm={6} justifyContent="flex-end">
          <Typography variant="h3" component="h3">
            Software Engineer
          </Typography>
        </Grid>
      </HeaderGrid>
  );
}

export default Header;
