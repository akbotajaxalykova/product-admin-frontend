import { Button, Grid } from '@mui/material';

const AnonymousMenu = () => {
  return (
    <Grid>
      <Button href='/register' color='inherit'>
        Sign up
      </Button>
      <Button href='/login' color='inherit'>
        Sign in
      </Button>
    </Grid>
  );
};

export default AnonymousMenu;