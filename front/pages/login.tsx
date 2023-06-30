import React from "react";
import Header from "components/shared/header";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { loginValidation } from "Schemas/IndexLogin";
import Section from "components/pages/index/section";

function Login() {
  const initialValues = {
    email: "",
    password: ""
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Header />
      <Section color="#222222">
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              style={{ backgroundColor: "#333333" }}>
                <h1 className="text-2xl font-bold mb-4">¡Inicia sesión!</h1><div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Correo electrónico:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese correo electrónico"
                  style={{ backgroundColor: "#8E8E8E", color:"#484B6E" }}
                  className={`w-full px-3 py-2 border rounded ${
                    touched.email && errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
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

              <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                style={{ backgroundColor: "#FF8900" }}
              >
                Iniciar sesión
              </button>
              </div>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
}

export default Login;