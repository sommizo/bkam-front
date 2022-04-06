import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const NaturePrestation = Loadable(lazy(() => import("./naturePrestation/AppNaturePrestation")));

const referentielRoutes = [
    {
        path: '/referentiel/naturePrestation/ajouterNaturePrestation',
        element: <NaturePrestation/>
    }
]

export default referentielRoutes
