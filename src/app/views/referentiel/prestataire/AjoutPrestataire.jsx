import React from 'react'
import PrestataireForm from './PrestataireForm'
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

const AjoutPrestataire = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Referentiel', path: '/ajoutPrestataire' },
                        { name: 'Ajout de Prestataire' },
                    ]}
                />
            </div>
            <SimpleCard title="Prestataire">
                <PrestataireForm />
            </SimpleCard>
        </Container>
    )
}

export default AjoutPrestataire
