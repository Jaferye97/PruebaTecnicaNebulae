import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Switch,
  Button,
} from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function EditarProducto() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    stock: '',
    categoria: '',
    activo: true,
  });

  useEffect(() => {
    const productoSimulado = {
      nombre: 'Escritorio Logitech',
      precio: 3965349,
      stock: 18,
      categoria: 'Electrodomésticos',
      activo: true,
    };
    setProducto(productoSimulado);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleToggleActivo = () => {
    setProducto({ ...producto, activo: !producto.activo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Producto actualizado:', producto);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <Button
        variant="outlined"
        color="error"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/Producto')}
        className="mb-4"
      >
        Atrás
      </Button>

      <h2 className="text-xl font-bold text-gray-700 mb-4">Editar Producto</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <TextField
          fullWidth
          label="Nombre"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
        />

        <div className="flex gap-4">
          <TextField
            fullWidth
            label="Precio"
            name="precio"
            type="number"
            value={producto.precio}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Stock"
            name="stock"
            type="number"
            value={producto.stock}
            onChange={handleChange}
          />
        </div>

        <FormControl fullWidth>
          <InputLabel>Categoría</InputLabel>
          <Select
            name="categoria"
            value={producto.categoria}
            onChange={handleChange}
            label="Categoría"
          >
            <MenuItem value="Electrodomésticos">Electrodomésticos</MenuItem>
            <MenuItem value="Tecnología">Tecnología</MenuItem>
            <MenuItem value="Hogar">Hogar</MenuItem>
            <MenuItem value="Ropa">Ropa</MenuItem>
            <MenuItem value="Otros">Otros</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Switch
              checked={producto.activo}
              onChange={handleToggleActivo}
              name="activo"
              color="primary"
            />
          }
          label="Activo"
        />

        <div className="flex justify-end gap-2">
          <Button
            variant="outlined"
            onClick={() => navigate('/Producto')}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Actualizar
          </Button>
        </div>
      </form>
    </div>
  );
}
