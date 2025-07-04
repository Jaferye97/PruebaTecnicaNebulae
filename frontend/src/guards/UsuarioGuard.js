import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const UsuarioGuard = ({ children }) => {
  const autenticado = useSelector((state) => state?.usuarioLogin?.autenticado);

  return autenticado ? (
    children
  ) : (
    <Navigate
      replace
      to={'/'}
    />
  );
};

export default UsuarioGuard;
