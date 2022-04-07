
import React from 'react'

import {
    Button,
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
} from '@mui/material'
import { Box, styled } from '@mui/system'
import { Span } from 'app/components/Typography'

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

const prestationList = [
    {
        name: 'Multitechnique',
        statut: 'actif',
    },
    {
        name: 'Nettoyage et 3D',
        statut: 'actif',
    },
    {
        name: 'EV',
        statut: 'actif',
    },
    {
        name: 'Ser',
        statut: 'actif',
    },
]

const NaturePrestationTableAdd = () => {
    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Nom de la Prestation</TableCell>
                        <TableCell>Statut</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prestationList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {subscriber.name}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.statut}
                            </TableCell>
                            <TableCell>
                                <IconButton>
                                    <Icon color="error">close</Icon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
                <Button color="primary" variant="contained" type="submit" paddingTop = "15px">
                    <Icon>save</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Ajouter une Prestation
                    </Span>
                </Button>
        </Box>
    )
}

export default NaturePrestationTableAdd
