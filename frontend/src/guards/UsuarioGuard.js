//External Components
import { Navigate, Outlet } from 'react-router-dom';

//Redux
import { useSelector } from 'react-redux';

const UsuarioGuard = () => {
  const autenticado = useSelector((state) => state?.usuarioLogin?.autenticado);

  return autenticado ? (
    <Outlet />
  ) : (
    <Navigate
      replace
      to={'/'}
    />
  );
};

export default UsuarioGuard;
