import React from 'react'
// Routes
import { Route, Routes } from 'react-router'


// Layouts
import Publiclayout, { Privatelayout, PubliclayoutM } from '../layouts/mainlayouts'

// Pages
import Home from '../Pages/HomeP'
import Login from '../Pages/LoginP'
import CompanyAll from '../Pages/CompanyP'
// Error Page
import NotFound from '../_partials/NotFound'
import PlanesPrices from '../Pages/Prices'
import GlobalData from '../Pages/globaldata'
import RegisterUser from '../Pages/Register'
import DashboardPrivate from '../Pages/Dashboards'
import SettingsPage from '../Pages/SettingsPage'


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
                    <Route path="/prices" element={<PlanesPrices />} />
                    <Route path='/global' element={<GlobalData />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/register' element={<RegisterUser />} />
                </Route>
                {/* Private layout | missing Protected Route*/}
                <Route element={<Privatelayout />}>
                    <Route path='/dashboard' element={<DashboardPrivate />} />
                    <Route path='/settings' element={<SettingsPage />} />
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