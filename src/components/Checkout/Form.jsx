const Form = ({ datosForm, saveDataInput, enviarOrden, isFormValid }) => {
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
        <div className="flex flex-col">
          <label htmlFor="confirmarCorreo" className="text-gray-700 font-semibold mb-2">Confirmar Correo</label>
          <input
            id="confirmarCorreo"
            type="text"
            name="confirmarCorreo"
            value={datosForm.confirmarCorreo}
            onChange={saveDataInput}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Confirma tu correo electrónico"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 font-regular rounded-lg transition-colors ${
            isFormValid ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-200 text-gray-700 cursor-not-allowed'
          }`}
          disabled={!isFormValid}
        >
          Enviar orden
        </button>
      </form>
    </div>
  );
};

export default Form;