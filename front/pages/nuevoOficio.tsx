import React from "react";
import Header from "components/shared/header";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { oficioValidation } from "Schemas/indexOficio";
import Section from "components/pages/index/section";

function nuevoOficio() {
  const initialValues = {
    name: "",
    description: "",
    price:"",
    category: "",
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
          validationSchema={oficioValidation}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              style={{ backgroundColor: "#333333" }}
            >
              <h1 className="text-2xl font-bold mb-4">¡Crea un oficio!</h1>
              <div className="mb-4">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingrese el nombre del oficio"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                    touched.name && errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
              </div>


              <div className="mb-4">
                <Field
                  type="description"
                  as="textarea"
                  id="description"
                  name="description"
                  placeholder="Ingrese una descripcion"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] resize-y overflow-auto ${
                    touched.description && errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="price"
                  id="price"
                  name="price"
                  placeholder="Ingrese el precio del oficio"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                    touched.price && errors.price ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="mb-4">
                <Field
                  type="category"
                  as="select"
                  id="category"
                  name="category"
                  placeholder="Ingrese una categoria"
                  className={`w-full px-3 py-2 border rounded placeholder-gray-600 bg-[#8E8E8E] text-[#484B6E] ${
                    touched.category && errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                >
                    <option value="" disabled selected>-Seleccione una categoría-</option>
                    <option value="carpinteria">Carpinteria</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

                <div className="flex justify-center ">
                <button
                  type="submit"
                  className="text-white bg-[#FF8900] hover:bg-[#e17c07]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2 w-full sm:w-auto flex-grow"
                >
                  ¡Crear!
                </button>
              </div>


            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
}

export default nuevoOficio;