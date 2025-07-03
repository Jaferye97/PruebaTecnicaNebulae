// React Components
import { useState } from 'react';

//External Components
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const usePaginaWelcome = () => {
  const [loadingLogin, setLoadingLogin] = useState(false);

  const formik = useFormik({
    initialValues: {
      numInterno: '',
      email: '',
    },
    validationSchema: Yup.object({
      numInterno: Yup.number()
        .typeError('Debe ser un número')
        .required('Este campo es obligatorio'),
      email: Yup.string().email('Correo inválido').required('Este campo es obligatorio'),
    }),
    onSubmit: (values) => {
      console.log('Login con:', values);
      handleSubmit();
    },
  });

  const handleSubmit = () => {
    setLoadingLogin(true);
    setTimeout(() => {
      setLoadingLogin(false);
    }, 1500);
  };

  const stateUpdaters = {};

  const state = {
    formik,
    loadingLogin,
  };

  return { state, stateUpdaters };
};
