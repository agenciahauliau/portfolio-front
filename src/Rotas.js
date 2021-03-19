import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Pesquisa />} />
        </Routes>
    )
}
