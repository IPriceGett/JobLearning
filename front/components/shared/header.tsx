import { useEffect, useState } from "react";
import getUser from "utils/session";
import { useRouter } from "next/router";

const header = (): JSX.Element => {
  const { push } = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    push("/");
  };

  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    let user = getUser();
    if (user) setUsuario(user != null ? user : "");
  }, []);
  return (
    <header className="flex flex-row items-center w-full h-[60px] bg-[#333333] px-4 text-white font-normal">
      <div className="left flex items-center basis-7/12">
        <div
          className="logo flex cursor-pointer basis-4/12"
          onClick={() => {
            push("/");
          }}
        >
          <div className="flex items-center mx-4">logo</div>
          <span className="hidden md:block">eJob Learning</span>
        </div>
        <div className="busqueda basis-8/12">
          <div className="flex items-center bg-[#8E8E8E] rounded-full text-md font-bold px-4 text-[#464646]">
            ¿Que buscas?
          </div>
        </div>
      </div>

      <div className="right flex-row basis-5/12 justify-end lg:space-x-4 xl:space-x-8 hidden lg:flex">
        {usuario != "" ? (
          <>
            <a
              className="cursor-pointer"
              onClick={() => {
                push("/cursos");
              }}
            >
              Cursos
            </a>
            <a
              className="cursor-pointer"
              onClick={() => {
                push("/misCursos");
              }}
            >
              Mis cursos
            </a>
            <a
              className="cursor-pointer"
              onClick={() => {
                push("/nuevoOficio");
              }}
            >
              Crear oficio
            </a>
            <a
              className="cursor-pointer"
              onClick={() => {
                push("/contacto");
              }}
            >
              Contacto
            </a>
            <a
              className="cursor-pointer"
              onClick={() => {
                cerrarSesion();
              }}
            >
              Cerrar sesion
            </a>
          </>
        ) : (
          <>
            <a
              className="cursor-pointer"
              onClick={() => {
                push("/contacto");
              }}
            >
              Contacto
            </a>
            <a
              className="cursor-pointer"
              onClick={() => {
                push("/login");
              }}
            >
              Iniciar sesión
            </a>
            <a
              className="cursor-pointer"
              onClick={() => {
                push("/register");
              }}
            >
              Regístrate
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default header;
