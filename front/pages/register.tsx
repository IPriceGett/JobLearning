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


  const handleSubmit = (values) => {
    console.log(values);
  };


  return (
    <>
      <Header />
      <Section>
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
                <Field
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Ingrese su nombre"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E]  ${
                    touched.name && errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
              </div>
              <div className="mb-4">
                <Field
                  type="lastname"
                  id="lastname"
                  name="lastname"
                  placeholder="Ingrese su apellido"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
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
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese su correo electronico"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
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
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingrese contraseña"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
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
               
                <Field
                  type="Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Ingrese contraseña"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                    touched.confirmPassword && errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

                <div className="flex justify-center space-x-4 mt-2">
                    ¿Ya tienes una cuenta?¡Inicia sesión!
                </div>

                <div className="flex justify-center ">
                <button
                  type="submit"
                  className="text-white bg-[#FF8900] hover:bg-[#e17c07]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2 mt-2 w-full sm:w-auto flex-grow"
                >
                  Regístrate
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
