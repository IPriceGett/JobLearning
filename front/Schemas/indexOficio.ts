import * as yup from 'yup';

export const oficioValidation = yup.object().shape({
    name: yup.string().required('Debe ingresar un oficio'),
    description: yup
        .string()
        .min(20, 'La descripción debe tener 20 caracteres o más')
        .required('Descripción requerida'),
    price: yup
        .number()
        .positive()
        .integer()
        .typeError('Solo se permiten números')
        .test('is-number', 'Solo se permiten números', (value) => !isNaN(value))
        .required('Un número requerido'),
    category: yup.string().required('La categoría es requerida'),
    preview: yup
        .string()
        .required('Debe ingresar un link de Youtube para la preview'),
    chapters: yup
        .array()
        .of(yup.string().required('Debe ingresar un capítulo'))
        .min(3, 'Debe tener al menos tres capítulos'),
});
