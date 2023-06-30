import React from "react";
import Header from "components/shared/header";
import Card from "components/pages/index/card";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";
import Button from "../components/generic/button";

function detalleCurso() {
    return (
        <>
            <Header></Header>
            <div className="container mx-auto px-4 py-8 md:py-14 md:px-28">
                <div className="grid items-center text-white">
                    <div className="flex flex-col items-center">
                        <div className="bg-black border-[#707070] border-2 my-4 h-48 md:h-96 aspect-video flex items-center justify-center">
                            <p className="text-2xl font-bold">
                                Video resumen del curso
                            </p>
                        </div>
                    </div>

                    <div className="text-2xl font-bold mb-2">
                        Titulo del curso
                    </div>
                    <div className="font-medium text-xl mb-1">Autor Curso</div>
                    <div className="font-normal">
                        Descripcion del curso . Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Fuga, et nisi? Quasi
                        veniam eum voluptatum libero, harum error officia rerum!
                    </div>
                    <div className="flex flex-col items-center my-4">
                        <div className="mb-2">
                            <Button size="medium" appearance="green">
                                Comprar por $XX.XXX CLP
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
