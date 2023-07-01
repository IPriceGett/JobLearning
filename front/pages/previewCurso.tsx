import React from "react";
import Header from "components/shared/header";
import Card from "components/pages/index/card";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";
import Button from "../components/generic/button";
import { useRouter } from "next/router";

function detalleCurso() {
    const { push } = useRouter();
    const handleClick = () => {
        push("/detalleCurso");
    };

    return (
        <>
            <Header></Header>
            <div className="container mx-auto px-4 py-8 md:py-14 md:px-28">
                <div className="grid items-center text-white max-w-fit mx-auto">
                    <div className="flex flex-col items-center mx-auto">
                        <div className="bg-black border-[#707070] border-2 my-4 h-48 md:h-96 aspect-video flex items-center justify-center">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/7DO4tsuQEQk?controls=0"
                                title="Como aprender carpintería desde cero"
                                allow="autoplay; clipboard-write; encrypted-media; gyroscope;"
                                allowFullScreen
                                rel="1"
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-2xl font-bold mb-2">
                            Titulo del curso
                        </div>
                        <div className="font-medium text-xl mb-1">
                            Autor Curso
                        </div>
                        <div className="font-normal">Descripcion del curso</div>
                    </div>

                    <div className="flex flex-col items-center my-4">
                        <div className="mb-2">
                            <Button
                                size="medium"
                                appearance="green"
                                onClick={handleClick}
                            >
                                <p>Comprar por</p>
                                <p>$XX.XXX CLP</p>
                            </Button>
                        </div>
                        <div className="">
                            <Button size="small" appearance="amber">
                                Volver
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default detalleCurso;
