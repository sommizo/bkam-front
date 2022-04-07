import React from 'react'
import NaturePrestationTableAdd from './NaturePrestationTableAdd'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AjoutNaturePrestation = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Referentiel', path: '/ajoutNaturePrestation' },
                        { name: 'Nature de Prestation' },
                    ]}
                />
            </div>
            <SimpleCard title="Nature de Prestation">
                <NaturePrestationTableAdd />
            </SimpleCard>
        </Container>
    )
}

export default AjoutNaturePrestation
