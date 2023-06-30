import React from "react";
import Header from "components/shared/header";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { registerValidation } from "Schemas/IndexRegister";
import Section from "components/pages/index/section";
import { useRouter } from "next/router";


function Register() {
  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    
  };

  const { push } = useRouter();

  const handleSubmit = (values) => {
    console.log(values);
  };


  return (
    <>
      <Header />
      <Section color="#222222">
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidation}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            style={{ backgroundColor: "#333333" }}>
              <h1 className="text-2xl font-bold mb-4">¡Registrate!</h1>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre:
                </label>
                <Field
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Ingrese su nombre"
                  style={{ backgroundColor: "#8E8E8E", color:"#484B6E" }}
                  className={`w-full px-3 py-2 border rounded ${
                    touched.name && errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
              </div>
              <div className="mb-4">
                <label htmlFor="lastname" className="block text-gray-700 text-sm font-bold mb-2">
                  Apellido:
                </label>
                <Field
                  type="lastname"
                  id="lastname"
                  name="lastname"
                  placeholder="Ingrese su apellido"
                  style={{ backgroundColor: "#8E8E8E", color:"#484B6E" }}
                  className={`w-full px-3 py-2 border rounded ${
                    touched.lastname && errors.lastname ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Correo electronico:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese su correo electronico"
                  style={{ backgroundColor: "#8E8E8E", color:"#484B6E" }}
                  className={`w-full px-3 py-2 border rounded ${
                    touched.email && errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Contraseña:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingrese contraseña"
                  style={{ backgroundColor: "#8E8E8E", color:"#484B6E" }}
                  className={`w-full px-3 py-2 border rounded ${
                    touched.password && errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  Confirmar contraseña:
                </label>
                <Field
                  type="confirmPassword"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Ingrese contraseña"
                  style={{ backgroundColor: "#8E8E8E", color:"#484B6E" }}
                  className={`w-full px-3 py-2 border rounded ${
                    touched.confirmPassword && errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div>
                    ¿Ya tienes una cuenta?¡Inicia sesión!
                </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                   style={{ backgroundColor: "#FF8900" }}
                >
                  Registrar
                </button>
              </div>

              <div className="g-signin2" data-onsuccess="onSignIn">
              <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Iniciar sesión con Google
                </button>
              </div>

            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
}

export default Register;
