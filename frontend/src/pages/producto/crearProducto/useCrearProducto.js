//React Components
import { useState } from 'react';

//External Components
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

//Internal Services
import { requestData } from '../../../services/apiService';

export const useCrearProducto = () => {
  const [loadingCreacion, setLoadingCreacion] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      stock: '',
      categoria: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Nombre es requerido'),
      precio: Yup.number()
        .typeError('Debe ser un número')
        .positive('Debe ser mayor a cero')
        .required('Precio es requerido'),
      stock: Yup.number()
        .typeError('Debe ser un número')
        .min(0, 'Debe ser 0 o más')
        .required('Stock es requerido'),
      categoria: Yup.string().required('Categoría es requerida'),
    }),
    onSubmit: async (values) => {
      setLoadingCreacion(true);

      const response = await requestData('POST', '/Producto', { ...values, activo: true });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Producto registrado correctamente.',
          position: 'center',
          showConfirmButton: false,
          timer: 1500,
        });
      }

      formik.handleReset();

      setLoadingCreacion(false);
    },
  });

  const stateUpdaters = {};

  const state = { formik, loadingCreacion };

  return { state, stateUpdaters };
};
