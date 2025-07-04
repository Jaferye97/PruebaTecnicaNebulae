//External Components
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
import { useNavigate } from 'react-router-dom';

//Internal Hook
import { useEditarProducto } from './useEditarProducto';

//Internal Components
import LoadingSpinner from '../../../components/spinners/LoadingSpinner';

export default function EditarProducto() {
  const navigate = useNavigate();

  const { state } = useEditarProducto();
  const { formik, loadingEdicion, loadingPagina } = state;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Editar Producto</h2>

      {loadingPagina ? (
        LoadingSpinner
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          className="space-y-5"
        >
          <TextField
            fullWidth
            label="Nombre"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
            helperText={formik.touched.nombre && formik.errors.nombre}
          />

          <div className="flex flex-col md:flex-row gap-4">
            <TextField
              fullWidth
              label="Precio"
              name="precio"
              type="number"
              value={formik.values.precio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.precio && Boolean(formik.errors.precio)}
              helperText={formik.touched.precio && formik.errors.precio}
            />

            <TextField
              fullWidth
              label="Stock"
              name="stock"
              type="number"
              value={formik.values.stock}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.stock && Boolean(formik.errors.stock)}
              helperText={formik.touched.stock && formik.errors.stock}
            />
          </div>

          <FormControl
            fullWidth
            error={formik.touched.categoria && Boolean(formik.errors.categoria)}
          >
            <InputLabel>Categoría</InputLabel>
            <Select
              name="categoria"
              value={formik.values.categoria}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Categoría"
            >
              <MenuItem value="Electrodomésticos">Electrodomésticos</MenuItem>
              <MenuItem value="Tecnología">Tecnología</MenuItem>
              <MenuItem value="Hogar">Hogar</MenuItem>
              <MenuItem value="Ropa">Ropa</MenuItem>
              <MenuItem value="Otros">Otros</MenuItem>
            </Select>
            {formik.touched.categoria && formik.errors.categoria && (
              <div className="text-sm text-red-600 mt-1">{formik.errors.categoria}</div>
            )}
          </FormControl>

          <FormControlLabel
            control={
              <Switch
                checked={formik.values.activo}
                onChange={(e) => formik.setFieldValue('activo', e.target.checked)}
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
              loading={loadingEdicion}
              type="submit"
              variant="contained"
              color="primary"
            >
              Actualizar
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
