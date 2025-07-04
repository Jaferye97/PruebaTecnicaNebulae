// React Components
import { useCallback, useEffect, useState } from 'react';

//External Components
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

//Internal Services
import { requestData } from '../../../services/apiService';

export const useListarProductos = () => {
  const [loadingTable, setLoadingTable] = useState(false);
  const [productos, setProductos] = useState([]);
  const [inputsTable, setInputsTable] = useState({
    totalRegistros: 0,
    esPrimeraPagina: false,
    esUltimaPagina: false,
    totalPaginas: 0,
    pagina: 0,
  });

  const [inputsBusqueda, setInputsBusqueda] = useState({
    cantidadRegistro: 10,
    pagina: 1,
    filtroNombre: '',
    filtroCategoria: '',
  });

  const { pagina, cantidadRegistro } = inputsBusqueda;

  const formikBusqueda = useFormik({
    initialValues: {
      filtro: 'nombre',
      busqueda: '',
    },
    validationSchema: Yup.object({
      filtro: Yup.string().required('Campo obligatorio'),
      busqueda: Yup.string().required('Campo obligatorio'),
    }),
    onSubmit: (values) => {
      const { filtro, busqueda } = values;

      if (filtro === 'nombre') {
        setInputsBusqueda((old) => ({
          ...old,
          filtroNombre: busqueda,
          filtroCategoria: '',
          pagina: 1,
        }));
      } else if (filtro === 'categoria') {
        console.log('object');
        setInputsBusqueda((old) => ({
          ...old,
          filtroCategoria: busqueda,
          filtroNombre: '',
          pagina: 1,
        }));
      }
    },
  });

  const getData = useCallback(async (filter) => {
    const _pFiltroNombre = filter.filtroNombre || '';
    const _pfiltroCategoria = filter.filtroCategoria || '';

    setLoadingTable(true);
    const url = `/producto/obtenerTodosPaginacion?nombre=${_pFiltroNombre}&categoria=${_pfiltroCategoria}&pagina=${filter.pagina}&cantidadRegistros=${filter.cantidadRegistro}`;

    const response = await requestData('GET', url);
    if (response.ok) {
      setProductos(response.datos);

      if (response.datos.length === 0) {
        setInputsTable({
          totalRegistros: 0,
          esPrimeraPagina: false,
          esUltimaPagina: false,
          totalPaginas: 0,
          pagina: 0,
        });
      } else {
        setInputsTable({
          totalRegistros: response.total,
          esPrimeraPagina: parseInt(response.pagina) === 1,
          esUltimaPagina: parseInt(response.pagina) === parseInt(response.totalPaginas),
          totalPaginas: response.totalPaginas,
          pagina: response.pagina,
        });
      }
    }
    setLoadingTable(false);
  }, []);

  useEffect(() => {
    getData(inputsBusqueda);
  }, [inputsBusqueda, getData]);

  const handleProximaPagina = () => {
    setInputsBusqueda((old) => ({ ...old, pagina: pagina + 1 }));
  };

  const handleAtrasPagina = () => {
    setInputsBusqueda((old) => ({ ...old, pagina: pagina - 1 }));
  };

  const handlePrimeraPagina = () => {
    setInputsBusqueda((old) => ({ ...old, pagina: 1 }));
  };

  const handleUltimaPagina = () => {
    setInputsBusqueda((old) => ({ ...old, pagina: inputsTable.totalPaginas }));
  };

  const handleSelectCantidadRegistro = (cantidad) => {
    setInputsBusqueda((old) => ({ ...old, cantidadRegistro: cantidad }));
  };

  const handleCambiarEstadoProducto = async (id) => {
    const response = await requestData('PATCH', `/producto/${id}/cambiarEstado`);

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Estado actualizado correctamente.',
        position: 'center',
        showConfirmButton: false,
        timer: 1500,
      });
    }

    getData(inputsBusqueda);
  };

  const stateUpdaters = {
    handleAtrasPagina,
    handlePrimeraPagina,
    handleProximaPagina,
    handleUltimaPagina,
    handleSelectCantidadRegistro,
    handleCambiarEstadoProducto,
  };

  const state = {
    formikBusqueda,
    loadingTable,
    productos,
    inputsTable,
    cantidadRegistro,
  };

  return { state, stateUpdaters };
};
