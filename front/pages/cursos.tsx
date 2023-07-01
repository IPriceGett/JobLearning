import React, { useEffect, useState } from "react";
import Header from "components/shared/header";
import Circle from "components/pages/index/circle";
import Section from "components/pages/index/section";
import Slides from "components/pages/index/slides";
import { NextPage } from "next";

const Cursos: NextPage = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:5000/job/list", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: localStorage.getItem("token"),
                },
            });
            const jsonResult = await result.json();

            setCursos(jsonResult.sort((a, b) => b.id - a.id));
            // console.log(jsonResult);
            // console.log(cursos);
        };

        fetchData();
    }, []);

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
                    <Slides cursos={cursos}></Slides>
                </div>
                <div className="container mx-auto flex items-center justify-start h-36">
                    <span className="text-3xl font-bold text-white">
                        Cursos en tendencia
                    </span>
                </div>
                <div className="container mx-auto  flex items-center justify-center h-64">
                    <Slides cursos={cursos}></Slides>
                </div>
            </div>
        </>
    );
};

export default Cursos;
