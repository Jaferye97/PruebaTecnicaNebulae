// React Components
import { useState } from 'react';

//External Components
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//INTERNAL SERVICES
import { requestData } from '../../services/apiService';

//REDUX
import { useDispatch } from 'react-redux';
import { asignarUsuario } from '../../stores/usuarioSlice';

export const usePaginaWelcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loadingLogin, setLoadingLogin] = useState(false);

  const formik = useFormik({
    initialValues: {
      numInterno: '254152',
      email: 'yeimer@mail.com',
    },
    validationSchema: Yup.object({
      numInterno: Yup.number()
        .typeError('Debe ser un número')
        .required('Este campo es obligatorio'),
      email: Yup.string().email('Correo inválido').required('Este campo es obligatorio'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    setLoadingLogin(true);
    const response = await requestData('post', '/login', values);

    if (response.ok) {
      dispatch(asignarUsuario(response.datos));
      navigate('/Producto');
    }

    setLoadingLogin(false);
  };

  const stateUpdaters = {};

  const state = {
    formik,
    loadingLogin,
  };

  return { state, stateUpdaters };
};
