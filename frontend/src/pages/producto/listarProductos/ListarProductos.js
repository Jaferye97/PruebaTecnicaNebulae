import { useState } from 'react';
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

const productosEjemplo = [
  { id: 1, nombre: 'Camisa Azul', categoria: 'Ropa', precio: 30000 },
  { id: 2, nombre: 'Zapatos Negros', categoria: 'Calzado', precio: 80000 },
  { id: 3, nombre: 'Gorra', categoria: 'Accesorios', activo: true, precio: 15000 },
];

export default function ListarProducto() {
  const navigate = useNavigate();

  const [filtro, setFiltro] = useState('nombre');
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productosEjemplo.filter((p) => {
    const valor = filtro === 'nombre' ? p.nombre : p.categoria;
    return valor.toLowerCase().includes(busqueda.toLowerCase());
  });

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

      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        <FormControl>
          <FormLabel className="text-sm">Buscar por:</FormLabel>
          <RadioGroup
            row
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
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

        <TextField
          label="Buscar"
          variant="outlined"
          className="flex-1"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

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
            {productosFiltrados.map((prod, i) => (
              <TableRow key={i}>
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
            {productosFiltrados.length === 0 && (
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
                value={10}
                label="Cantidad"
              >
                <MenuItem value={10}>Mostrar 10</MenuItem>
                <MenuItem value={20}>Mostrar 20</MenuItem>
                <MenuItem value={50}>Mostrar 50</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">
              Página {1} de {1}
            </span>
            <IconButton
            //   onClick={() => handleChangeData({ pagina: 1 })}
            //   disabled={esPrimeraPagina}
            >
              <FirstPage />
            </IconButton>
            <IconButton
            //   onClick={() => handleChangeData({ pagina: pagina - 1 })}
            //   disabled={esPrimeraPagina}
            >
              <NavigateBefore />
            </IconButton>
            <IconButton
            //   onClick={() => handleChangeData({ pagina: pagina + 1 })}
            //   disabled={esUltimaPagina}
            >
              <NavigateNext />
            </IconButton>
            <IconButton
            //   onClick={() => handleChangeData({ pagina: totalPaginas })}
            //   disabled={esUltimaPagina}
            >
              <LastPage />
            </IconButton>
          </div>
        </div>

        <div className="flex justify-end mt-2 px-2 text-sm text-gray-600">
          Cantidad de registros: {232}
        </div>
      </div>
    </div>
  );
}
