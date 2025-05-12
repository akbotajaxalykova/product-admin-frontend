import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { RootState } from '../../../store';
import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';

const MainLink = styled(RouterLink)(() => ({
  'color': 'inherit',
  'textDecoration': 'none',
  '$:hover': {
    color: 'inherit',
  },
}));

const StaticToolbar = styled(Toolbar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const AppToolbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.users.user);

  // const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  // const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h6' component='div'>
            <MainLink to='/'>SHOP</MainLink>
          </Typography>
          {user ? <UserMenu username={user.username} _id={user._id} /> : <AnonymousMenu />}
        </Toolbar>
      </AppBar>
      <StaticToolbar />
    </>
  );
};

export default AppToolbar;