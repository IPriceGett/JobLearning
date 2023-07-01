import React from "react";
import Header from "components/shared/header";
import Section from "components/pages/index/section";
import { NextPage } from "next";

const detalleCurso: NextPage = () => {
    return (
        <>
            <Header></Header>
            <div className="container mx-auto px-4 md:px-10">
                <div className="titulo">
                    <h1>titulo</h1>
                </div>
                <div className="video">video</div>
                <div className="capitulos">capitulos</div>
            </div>
        </>
    );
}

export default detalleCurso;
