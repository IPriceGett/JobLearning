import React from "react";
import Header from "components/shared/header";
import Card from "components/pages/index/card";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";

function Cursos() {
    return (
        <>
            <Header></Header>
            {/* <Section color="[#222222]" altura="56">
                <span className="text-3xl font-bold text-white">
                    ¡Mira los cursos más populares!
                </span>
            </Section>
            <Section color="black" altura="64">
                <span className="text-white">Cursos mas visitados</span>
            </Section>
            <Section color="[#50d71e]" altura="2">
                <span>hola</span>
            </Section> */}

            <div className="container mx-auto px-4 md:px-10">
                <div className="container mx-auto flex items-center justify-start h-36">
                    <span className="text-3xl font-bold text-white">
                        ¡Mira los cursos más populares!
                    </span>
                </div>
                <div className="container mx-auto bg-black flex items-center justify-center h-64 text-white">
                    <span className="text-3xl font-bold text-white">
                        slide cursos
                    </span>
                </div>
                <div className="container mx-auto flex items-center justify-start h-36">
                    <span className="text-3xl font-bold text-white">
                        Tus cursos
                    </span>
                </div>
                <div className="container mx-auto bg-black flex items-center justify-center h-64">
                    <span className="text-3xl font-bold text-white">
                        tus cursos
                    </span>
                </div>
            </div>
        </>
    );
}

export default Cursos;
