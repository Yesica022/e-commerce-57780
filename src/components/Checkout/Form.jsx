const Form = ({ datosForm, saveDataInput, enviarOrden }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg text-left">
      <form onSubmit={enviarOrden} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="nombre" className="text-gray-700 font-semibold mb-2">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={datosForm.nombre}
            onChange={saveDataInput}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telefono" className="text-gray-700 font-semibold mb-2">Telefono</label>
          <input
            id="telefono"
            type="text"
            name="telefono"
            value={datosForm.telefono}
            onChange={saveDataInput}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Ingresa tu teléfono"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="correo" className="text-gray-700 font-semibold mb-2">Correo</label>
          <input
            id="correo"
            type="text"
            name="correo"
            value={datosForm.correo}
            onChange={saveDataInput}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          Enviar orden
        </button>
      </form>
    </div>
  );
};

export default Form;
