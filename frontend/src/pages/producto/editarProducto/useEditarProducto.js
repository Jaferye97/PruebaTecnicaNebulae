//React Components
import { useEffect, useState } from 'react';

//External Components
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

//Internal Services
import { requestData } from '../../../services/apiService';

export const useEditarProducto = () => {
  const { id } = useParams();

  const [loadingEdicion, setLoadingEdicion] = useState(false);
  const [loadingPagina, setLoadingPagina] = useState(false);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getData(id);
  }, [id]);

  const getData = async (id) => {
    setLoadingPagina(true);

    const response = await requestData('GET', `/Producto/${id}`);

    if (response.ok) {
      setProducto(response.datos);
    }

    setLoadingPagina(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nombre: producto?.nombre || '',
      precio: producto?.precio || '',
      stock: producto?.stock || '',
      categoria: producto?.categoria || '',
      activo: producto?.activo || false,
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Nombre es requerido'),
      precio: Yup.number().typeError('Número').required('Precio requerido'),
      stock: Yup.number().typeError('Número').required('Stock requerido'),
      categoria: Yup.string().required('Categoría requerida'),
    }),
    onSubmit: async (values) => {
      setLoadingEdicion(true);

      const response = await requestData('PUT', `/Producto/${id}`, { ...values, activo: true });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Producto actualizado correctamente.',
          position: 'center',
          showConfirmButton: false,
          timer: 1500,
        });
      }

      setLoadingEdicion(false);
    },
  });

  const stateUpdaters = {};

  const state = { formik, loadingEdicion, loadingPagina };

  return { state, stateUpdaters };
};
