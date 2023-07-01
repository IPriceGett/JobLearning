import React, { useEffect } from "react";
import Header from "components/shared/header";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";
import Slides from "components/pages/index/slides";
import { NextPage } from "next";

const Cursos: NextPage = () => {
    return (
        <>
            <Header></Header>
            <div className="container mx-auto my-4 px-4 md:px-10">
                <div className="container mx-auto flex items-center justify-start h-36">
                    <span className="text-3xl font-bold text-white">
                        Cursos mas populares
                    </span>
                </div>
                <div className="container mx-auto  flex items-center justify-center h-64">
                    <Slides></Slides>
                </div>
                <div className="container mx-auto flex items-center justify-start h-36">
                    <span className="text-3xl font-bold text-white">
                        Cursos en tendencia
                    </span>
                </div>
                <div className="container mx-auto  flex items-center justify-center h-64">
                    <Slides></Slides>
                </div>
            </div>
        </>
    );
}

export default Cursos;
