import React from 'react'
import NaturePrestationForm from './NaturePrestationForm'
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

const NaturePrestation = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Referentiel', path: '/naturePrestation' },
                        { name: 'Nature de Prestation' },
                    ]}
                />
            </div>
            <SimpleCard title="Nature de Prestation">
                <NaturePrestationForm />
            </SimpleCard>
        </Container>
    )
}

export default NaturePrestation
