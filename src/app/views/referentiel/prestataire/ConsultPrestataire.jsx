import React from 'react'
import NaturePrestationTable from './PrestataireTable'
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

const ConsultNaturePrestation = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'referentiel', path: '/referentiel/naturePrestation/consultNaturePrestation' },
                        { name: 'Prestataires' },
                    ]}
                />
            </div>
            <SimpleCard title="Natures de Prestation">
                <NaturePrestationTable />
            </SimpleCard>
            {/* <Box py="12px" />
            <SimpleCard title="Pagination Table">
                <PaginationTable />
            </SimpleCard> */}
        </Container>
    )
}

export default ConsultNaturePrestation
