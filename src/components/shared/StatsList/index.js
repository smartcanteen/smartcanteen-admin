import React from 'react'
import { SimpleGrid, } from '@chakra-ui/react'
import { StatsCard } from 'components/shared'
const StatsList = ({children}) => {
    return (
        <React.Fragment>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={5}>
                {children}
            </SimpleGrid>
        </React.Fragment>
    )
}

export default StatsList
