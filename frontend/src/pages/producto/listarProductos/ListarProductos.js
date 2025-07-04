//External Components
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Button,
  InputLabel,
  IconButton,
} from '@mui/material';
import { FirstPage, LastPage, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

//Internal Components
import LoadingSpinner from '../../../components/spinners/LoadingSpinner';

//Internal Hook
import { useListarProductos } from './useListarProductos';

export default function ListarProducto() {
  const navigate = useNavigate();

  const { state, stateUpdaters } = useListarProductos();

  const {
    handleAtrasPagina,
    handlePrimeraPagina,
    handleProximaPagina,
    handleUltimaPagina,
    handleSelectCantidadRegistro,
  } = stateUpdaters;
  const { formikBusqueda, loadingTable, productos, inputsTable, cantidadRegistro } = state;
  const { pagina, totalPaginas, esUltimaPagina, esPrimeraPagina, totalRegistros } = inputsTable;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Listado de Productos</h2>

        <button
          onClick={() => navigate('/Producto/Crear')}
          className="hidden sm:block bg-green-700 hover:bg-green-800 text-white  py-2 px-4 rounded shadow"
        >
          Crear Producto
        </button>
      </div>

      <div className="sm:hidden mb-4">
        <button
          onClick={() => navigate('/Producto/Crear')}
          className="w-full bg-green-700 hover:bg-green-800 text-white  py-2 px-4 rounded shadow"
        >
          Crear Producto
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          formikBusqueda.handleSubmit(e);
        }}
        className="mb-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <FormControl>
            <FormLabel className="text-sm">Buscar por:</FormLabel>
            <RadioGroup
              row
              name="filtro"
              value={formikBusqueda.values.filtro}
              onChange={formikBusqueda.handleChange}
            >
              <FormControlLabel
                value="nombre"
                control={<Radio />}
                label="Nombre Producto"
              />
              <FormControlLabel
                value="categoria"
                control={<Radio />}
                label="Categoría"
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-2 md:mt-0"
          >
            Buscar
          </Button>
        </div>

        <TextField
          fullWidth
          name="busqueda"
          label="Buscar"
          variant="outlined"
          value={formikBusqueda.values.busqueda}
          onChange={formikBusqueda.handleChange}
          onBlur={formikBusqueda.handleBlur}
          error={formikBusqueda.touched.busqueda && Boolean(formikBusqueda.errors.busqueda)}
          helperText={formikBusqueda.touched.busqueda && formikBusqueda.errors.busqueda}
          className="mb-3"
        />
      </form>

      {loadingTable ? (
        <LoadingSpinner />
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <Table>
            <TableHead>
              <TableRow className="bg-blue-50">
                <TableCell>
                  <strong>Nombre</strong>
                </TableCell>
                <TableCell>
                  <strong>Categoría</strong>
                </TableCell>
                <TableCell>
                  <strong>Precio</strong>
                </TableCell>
                <TableCell>
                  <strong>Estado</strong>
                </TableCell>
                <TableCell>
                  <strong>Opciones</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((prod) => (
                <TableRow key={prod._id}>
                  <TableCell>{prod.nombre}</TableCell>
                  <TableCell>{prod.categoria}</TableCell>
                  <TableCell>${prod.precio.toLocaleString()}</TableCell>
                  <TableCell>
                    {prod.activo ? (
                      <span className="text-green-600 font-medium">Activo</span>
                    ) : (
                      <span className="text-red-500 font-medium">Inactivo</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => navigate(`/Producto/${prod.id}`)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outlined"
                        color={prod.activo ? 'error' : 'success'}
                        size="small"
                        //   onClick={() => handleToggleEstado(prod._id)}
                      >
                        {prod.activo ? 'Desactivar' : 'Activar'}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {productos.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center text-gray-500 py-4"
                  >
                    No se encontraron productos con ese filtro
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4 px-2">
            <div>
              <FormControl size="small">
                <InputLabel>Cantidad</InputLabel>
                <Select
                  name="cantidadRegistro"
                  value={cantidadRegistro}
                  label="Cantidad"
                  onChange={(e) => handleSelectCantidadRegistro(e.target.value)}
                >
                  <MenuItem value={10}>Mostrar 10</MenuItem>
                  <MenuItem value={20}>Mostrar 20</MenuItem>
                  <MenuItem value={50}>Mostrar 50</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">
                Página {pagina} de {totalPaginas}
              </span>
              <IconButton
                onClick={handlePrimeraPagina}
                disabled={esPrimeraPagina}
              >
                <FirstPage />
              </IconButton>
              <IconButton
                onClick={handleAtrasPagina}
                disabled={esPrimeraPagina}
              >
                <NavigateBefore />
              </IconButton>
              <IconButton
                onClick={handleProximaPagina}
                disabled={esUltimaPagina}
              >
                <NavigateNext />
              </IconButton>
              <IconButton
                onClick={handleUltimaPagina}
                disabled={esUltimaPagina}
              >
                <LastPage />
              </IconButton>
            </div>
          </div>

          <div className="flex justify-end mt-2 px-2 text-sm text-gray-600">
            Cantidad de registros: {totalRegistros}
          </div>
        </div>
      )}
    </div>
  );
}
