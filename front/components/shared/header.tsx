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
        localStorage.removeItem("user");
        push("/");
    };

    const [usuario, setUsuario] = useState({
        name: "",
        phone: "",
        email: "",
        pass: "",
        org: "",
        ocu: "",
        img: "",
    });

    useEffect(() => {
        let user = getUser();
        if (user) setUsuario(user);
    }, []);
    if (usuario.name !== "") {
        return (
            <header className="flex items-center justify-between w-full h-[100px] border-2 border-b-gray-300">
                <div className="flex cursor-pointer">
                    <div
                        className="w-[120px] flex items-center justify-center hover:scale-110"
                        onClick={() => {
                            push("/");
                        }}
                    >
                        logo
                    </div>
                    <span
                        className="hidden md:block hover:scale-110"
                        onClick={() => {
                            push("/offers/new");
                        }}
                    >
                        publica tu oferta
                    </span>
                    <span
                        className="ml-[15px] hidden md:block hover:scale-110"
                        onClick={() => {
                            push("/offers/offers");
                        }}
                    >
                        ver ofertas
                    </span>
                </div>
                <div className="flex items-center justify-center">
                    <a
                        className="cursor-pointer hover:scale-110"
                        onClick={() => {
                            push("/profile");
                        }}
                    >
                        {usuario.name}
                    </a>
                    <div
                        className="w-[80px] h-[80px] rounded-full bg-[#D9D9D9] mr-[15px] cursor-pointer hover:scale-110"
                        onClick={toggleMenu}
                    >
                        <img
                            src={usuario.img !== "" ? usuario.img : ""}
                            className="object-contain w-full h-full rounded-full"
                        ></img>
                        <ul
                            className={`menu__items w-[200px] flex flex-col items-center justify-center bg-white rounded-[5px] absolute right-0 border-2 border-gray-200 cursor-pointer ${
                                isOpen ? "" : "hidden"
                            }`}
                        >
                            <li
                                className="menu__item hover:scale-110 md:hidden"
                                onClick={() => {
                                    push("/offers/offers");
                                }}
                            >
                                Ver ofertas
                            </li>
                            <li
                                className="menu__item hover:scale-110 md:hidden"
                                onClick={() => {
                                    push("/offers/new");
                                }}
                            >
                                Publicar ofertas
                            </li>
                            <li
                                className="menu__item hover:scale-110"
                                onClick={() => {
                                    push("/postulations");
                                }}
                            >
                                Ver postulaciones
                            </li>
                            <li
                                className="menu__item hover:scale-110"
                                onClick={() => {
                                    push("/profile");
                                }}
                            >
                                Ver perfil
                            </li>
                            <li
                                className="menu__item hover:scale-110"
                                onClick={() => {
                                    cerrarSesion();
                                }}
                            >
                                Cerrar sesion
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
    return (
        <header className="flex flex-row items-center w-full h-[60px] bg-[#333333] px-4 text-white font-bold">
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
            </div>
        </header>
    );
};

export default header;
