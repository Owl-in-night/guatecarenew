import React from 'react'
// Routes
import { Route, Routes } from 'react-router'


// Layouts
import Publiclayout, { Privatelayout, PubliclayoutM } from '../layouts/mainlayouts'

// Pages
import Home from '../Pages/HomeP'
import Login from '../Pages/LoginP'
import CompanyAll from '../Pages/Company'
// Error Page
import NotFound from '../_partials/NotFound'
import PlanesPrecies from '../Pages/Precies'


function NavigationRoutes() {
    return (
        <div>
            <Routes>
                {/* Rutas públicas */}
                <Route element={<Publiclayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route element={<PubliclayoutM />}>
                    <Route path="/company" element={<CompanyAll />} />
                    <Route path="/precies" element={<PlanesPrecies />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                {/* Private layout | missing Protected Route*/}
                <Route element={<Privatelayout />}>
                    {/* Aquí puedes agregar rutas privadas */}
                    {/* Ejemplo: <Route path="/dashboard" element={<Dashboard />} /> */}
                </Route>
                {/* Página de error */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default NavigationRoutes