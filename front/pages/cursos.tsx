import React from "react";
import Header from "components/shared/header";
import Card from "components/pages/index/card";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";

function Cursos() {
    return (
        <>
            <Header></Header>
            <Section color="#222222" altura="24">
                <div className="">
                    <span className="text-3xl font-bold text-white">
                        ¡Mira los cursos más populares!
                    </span>
                </div>
            </Section>
            <Section>prueba</Section>
        </>
    );
}

export default Cursos;
