import React from "react";
import Header from "components/shared/header";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { loginValidation } from "Schemas/IndexLogin";
import Section from "components/pages/index/section";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const { push } = useRouter();
  const initialValues = {
    email: "",
    password: ""
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Response JSON:", data);
        localStorage.setItem("token", data.token);
        push("/");
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <Section>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/3"
              style={{ backgroundColor: "#333333" }}
            >
              <h1 className="text-2xl font-bold mb-4">¡Inicia sesión!</h1>
              <div className="mb-4">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese correo electrónico"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                    touched.email && errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
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

              <div className="flex justify-center space-x-4 mt-2">
                <button
                  type="submit"
                  className="text-white bg-green-500 hover:bg-green-500/80 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text- px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2 w-full sm:w-auto flex-grow"
                >
                  Iniciar sesión
                </button>
              </div>

              <div className="text-md justify-center text-center">O</div>

              <div className="flex justify-center space-x-4 mt-2">
                <button
                  type="button"
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2 w-full sm:w-auto flex-grow"
                >
                  <svg
                    className="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                    ></path>
                  </svg>
                  Iniciar sesión con Facebook
                </button>
                </div>



                <div className="flex justify-center ">
                <button
                  type="button"
                  className="text-white bg-[#DB4437] hover:bg-[#dd392b]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mb-2 w-full sm:w-auto flex-grow"
                >
                  <svg
                    className="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Iniciar sesión con Google
                </button>
              </div>


                  <div className="flex justify-center ">
                <button
                  className="text-white bg-[#FF8900] hover:bg-[#e17c07]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2 w-full sm:w-auto flex-grow"
                >
                  ¿No tienes una cuenta? ¡Registrate!
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