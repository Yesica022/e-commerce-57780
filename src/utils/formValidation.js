import { string, object, mixed } from "yup";

let userSchema = object({
    nombre: string().required("El nombre es requerido"),
    telefono: mixed().required("El teléfono es requerido"),
    correo: string().email("Ingresa un correo válido").required("El correo es requerido")
});

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm);
        return { status: "success" };
    } catch (error) {
        // Convertir el array de errores a una cadena
        return { status: "error", message: error.errors.join(', ') };
    }
};

export default validateForm;
