import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const AjoutNaturePrestation = Loadable(lazy(() => import("./naturePrestation/AjoutNaturePrestation")));
const ConsultNaturePrestation = Loadable(lazy(() => import("./naturePrestation/ConsultNaturePrestation")));

const AjoutPrestataire = Loadable(lazy(() => import("./prestataire/AjoutPrestataire")));
const ConsultPrestataire = Loadable(lazy(() => import("./prestataire/ConsultPrestataire")));

const referentielRoutes = [
    {   
        path: '/referentiel/naturePrestation/ajoutNaturePrestation',
        element: <AjoutNaturePrestation />,
    },
    {
        path: '/referentiel/naturePrestation/consultNaturePrestation',
        element: <ConsultNaturePrestation />,
    },
    {
        path: '/referentiel/prestataire/ajoutPrestataire',
        element: <AjoutPrestataire />,
    },
    {
        path: '/referentiel/prestataire/consultPrestataire',
        element: <ConsultPrestataire />,
    }
]

export default referentielRoutes
