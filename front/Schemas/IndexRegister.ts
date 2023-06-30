import * as yup from "yup";

const passwordRules= /^(?=.*\d)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const registerValidation = yup.object().shape({
    name: yup.string().min(4, "El nombre debe tener 4 caracteres o más").required("El nombre es requerido"),
    surname: yup.string().min(3, "El apellido debe tener 3 caracteres o más").required("El apellido es requerido"),
    email : yup.string().email("Debe ser un email valido").required("El email requerido"),
    phone: yup.number().positive().integer().typeError('Solo se permiten números').test('is-number', 'Solo se permiten números', value => !isNaN(value)).required('Número requerido'),
    password: yup.string().min(7, "La contraseña debe tener 8 caracteres o más").matches(passwordRules, {message: "Ingrese una contraseña valida (Mínimo: 8 caracteres mezclando mayus, minus y números)"}).required("Contrasela requerida"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Las contraseñas no coinciden"),
});

