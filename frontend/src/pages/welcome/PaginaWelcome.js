//Internal Hook
import { usePaginaWelcome } from './usePaginaWelcome';

//Internal Components
import LoadingSpinner from '../../components/spinners/LoadingSpinner';

const PaginaWelcome = () => {
  const { state } = usePaginaWelcome();

  const { formik, loadingLogin } = state;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {loadingLogin ? (
        <LoadingSpinner />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Iniciar Sesión</h2>

          <div className="mb-4">
            <label
              className="block text-sm text-gray-600 mb-1"
              htmlFor="numInterno"
            >
              Número Interno
            </label>
            <input
              type="text"
              id="numInterno"
              {...formik.getFieldProps('numInterno')}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu Número Interno"
            />
            {formik.touched.numInterno && formik.errors.numInterno && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.numInterno}</div>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-sm text-gray-600 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu Email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Ingresar
          </button>
        </form>
      )}
    </div>
  );
};

export default PaginaWelcome;
