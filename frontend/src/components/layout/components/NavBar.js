import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../stores/usuarioSlice';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usuario = useSelector((state) => state?.usuarioLogin?.usuario);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <AppBar
      position="static"
      className="bg-blue-600"
    >
      <Toolbar className="flex justify-between">
        <Typography
          variant="h6"
          component="div"
        >
          Nebulae
        </Typography>

        {usuario && (
          <Box className="flex items-center space-x-4">
            <Typography
              variant="body1"
              className="text-white"
            >
              {usuario.nombre} - {usuario.rol}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
