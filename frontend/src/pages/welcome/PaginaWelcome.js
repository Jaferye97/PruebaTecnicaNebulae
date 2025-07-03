const PaginaWelcome = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Iniciar Sesión</h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Usuario</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Contraseña</label>
          <input
            type="password"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default PaginaWelcome;
