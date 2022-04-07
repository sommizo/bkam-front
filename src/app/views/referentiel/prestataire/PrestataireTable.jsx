import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
} from '@mui/material'
import { Box, styled } from '@mui/system'

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const prestataireTable = [
    {
        name: 'AAAA',
        statut: 'actif',
        prestation: 'Multitechnique'
    },
    {
        name: 'BBBBB',
        statut: 'actif',
        prestation: 'Nettoyage et 3D'
    },
    {
        name: 'CCCCCC',
        statut: 'actif',
        prestation: 'EV'
    },
    {
        name: 'DDDDDD',
        statut: 'actif',
        prestation: 'Ser'
    },
]

const PrestataireTable = () => {
    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Nom du Prestataire</TableCell>
                        <TableCell>Statut</TableCell>
                        {/* <TableCell>Action</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prestataireTable.map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {subscriber.name}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.prestation}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.statut}
                            </TableCell>
                            {/* <TableCell>
                                <IconButton>
                                    <Icon color="error">close</Icon>
                                </IconButton>
                            </TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default PrestataireTable
