import { TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CrearProducto() {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    stock: '',
    categoria: '',
    activo: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Producto:', producto);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <Button
        variant="contained"
        color="error"
        onClick={() => navigate('/Producto')}
        className="mb-4 bg-red-700"
      >
        Atrás
      </Button>

      <h2 className="text-xl font-bold text-gray-700 mb-4">Ingresar Nuevo Producto</h2>

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

        <div className="flex justify-end gap-2">
          <Button variant="outlined">Cancelar</Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
}
