import * as yup from "yup";

export const oficioValidation = yup.object().shape({
    name : yup.string().required("Debe ingresar un oficio"),
    description: yup.string().min(100, "La descripcion debe tener 100 caracteres o más").required("Descripcion requerida"),
    price: yup.number().positive().integer().typeError('Solo se permiten números').test('is-number', 'Solo se permiten números', value => !isNaN(value)).required('Un número requerido'),
    category:yup.string().required("La categoria es requerida"),
});