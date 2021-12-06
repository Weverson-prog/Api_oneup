import React from 'react'
import Revisao from './pages/Revisao'
import Acabamento from './pages/Acabamento'
import Bordado from './pages/Bordado'
import Conserto from './pages/Conserto'
import Corte from './pages/Corte'
import Costura from './pages/Costura'
import Distribuicao from './pages/Distribuicao'
import Expedicao from './pages/Expedicao'
import Material from './pages/Material'
import MaterialC from './pages/MaterialCostura'
import Pcp from './pages/Pcp'
import RevisaoA from './pages/RevisaoAcabamento'
import RevisaoB from './pages/RevisaoBordado'
import Separacao from './pages/Separacao'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/REVISAO" element={<Revisao />} />
                    <Route path="/ACABAMENTO" element={<Acabamento />} />
                    <Route path="/BORDADO" element={<Bordado />} />
                    <Route path="/CONSERTO" element={<Conserto />} />
                    <Route path="/CORTE" element={<Corte />} />
                    <Route path="/COSTURA" element={<Costura />} />
                    <Route path="/DISTRIBUICAO" element={<Distribuicao />} />
                    <Route path="/EXPEDICAO" element={<Expedicao />} />
                    <Route path="/MATERIAL" element={<Material />} />
                    <Route path="/MATERIALCOSTURA" element={<MaterialC />} />
                    <Route path="/PCP" element={<Pcp />} />
                    <Route path="/REVISAOACABAMENTO" element={<RevisaoA />} />
                    <Route path="/REVISAOBORDADO" element={<RevisaoB />} />
                    <Route path="/SEPARACAO" element={<Separacao />} />
                </Routes>
            </div>
        </Router>
    );
}
// 05143763177
export default App;


