export default function PaginaNoEncontrada() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded p-6 text-center max-w-lg">
        <h3 className="text-2xl text-red-600 font-bold mb-3">Error 404</h3>
        <p className="text-gray-700 text-lg">
          <strong>Página no encontrada.</strong>
        </p>
      </div>
    </div>
  );
}
