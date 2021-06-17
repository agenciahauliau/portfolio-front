import React from 'react'
import { useQuery } from "@apollo/client";
import { QIPesquisa } from "../../Dados/DadosImoveis";

import FGR from "../../../assets/Imagens/820_FAS-V1_12-Foto_red24.02.jpg";

export default function SectionOne() {

    const { loading, error, data } = useQuery(QIPesquisa, {
        returnPartialData: true,
    });

    if (loading) return <p>Loading Masterpieces...</p>;
    if (error) return <p>Mas Bah</p>;

    return (
        <div className="topoHome">
            <div className="textoTopoHome">
                <h1>
                    Sua casa Jardins do jeito que sempre quis
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut laoreet tellus. Cras iaculis vehicula tortor, cursus placerat lacus dignissim in.</p>
            </div>
            <div className="imagemTopoHome">
                <img src={FGR} />
            </div>
        </div>
    )
}




