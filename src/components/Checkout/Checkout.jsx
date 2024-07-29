// Importaciones de React y Hooks
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Importaciones de componentes y utilidades
import { FaHome } from 'react-icons/fa';
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import validateForm from "../../utils/formValidation.js";

// Importaciones de Firebase
import db from "../../db/db.js";
import { collection, addDoc } from "firebase/firestore";

// Importaciones de animaciones y notificaciones
import Lottie from 'react-lottie';
import successAnimation from '/src/img/animations/successOrder.json';
import { toast } from "react-toastify";

const Checkout = () => {
    // Contexto del carrito y funciones asociadas
    const { cart, totalPrice, emptyCart } = useContext(CartContext);

    // Estado para los datos del formulario y el ID de la orden
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        correo: "",
        confirmarCorreo: "",
    });
    const [orderId, setOrderId] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);

    // Hook para la navegación programática
    const navigate = useNavigate();

    // Función para actualizar los datos del formulario
    const saveDataInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    // Validar formulario cada vez que cambian los datos del formulario
    useEffect(() => {
        const validate = async () => {
            const response = await validateForm(datosForm);
            setIsFormValid(response.status === "success");
        };
        validate();
    }, [datosForm]);

    // Función para manejar el envío de la orden
    const enviarOrden = async (event) => {
        event.preventDefault();
        
        // Datos a enviar con la orden
        const datos = {
            comprador: { ...datosForm },
            productos: [...cart],
            total: totalPrice(),
        };

        // Validar formulario antes de enviar la orden
        const response = await validateForm(datosForm);
        if (response.status === "success") {
            subirOrden(datos);
        } else {
            // Mostrar advertencia si la validación falla
            toast.warn(response.message);
        }
    };

    // Función para subir la orden a Firestore
    const subirOrden = async (datos) => {
        const ordenesRef = collection(db, "ordenes");
        try {
            const response = await addDoc(ordenesRef, datos);
            setOrderId(response.id); // Guardar el ID de la orden en el estado
        } catch (error) {
            console.error("Error al subir la orden: ", error);
        } finally {
            // Vaciar el carrito después de subir la orden
            emptyCart();
        }
    };

    // Opciones para la animación de éxito
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: successAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="p-36 rounded-lg text-center">
            {orderId ? (
                // Mostrar el mensaje de éxito y el ID de la orden si existe un orderId
                <div className="bg-blue-50 p-4 rounded-lg mt-4 shadow-lg animate-fadeIn">
                    <Lottie options={defaultOptions} height={150} width={150} />
                    <h2 className="text-xl font-semibold mt-4">Orden generada con éxito</h2>
                    <p className="mt-2">ID de la orden: {orderId}</p>
                    <button 
                        onClick={() => navigate('/')}
                        className="inline-flex items-center px-6 py-2 border-2 border-teal-600 text-teal-600 font-medium text-sm leading-tight rounded-lg hover:bg-teal-600 hover:text-white focus:outline-none focus:ring-0 transition duration-300 ease-in-out mt-4"
                    >
                        <FaHome className="mr-2" />
                        Volver al Inicio
                    </button>
                </div>
            ) : (
                // Mostrar el formulario si no existe un orderId
                <Form
                    datosForm={datosForm}
                    saveDataInput={saveDataInput}
                    enviarOrden={enviarOrden}
                    isFormValid={isFormValid}
                />
            )}
        </div>
    );
};

export default Checkout;

