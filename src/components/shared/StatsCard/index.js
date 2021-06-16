import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Text, Spinner  } from '@chakra-ui/react'
const StatsCard = props => {
    const { background, description, value, loading } = props
    /*
        Total Transaksi
        Total Pendapatan
        
    */
    return (
        <Box {...props} className="stats-card" minW="20%" minH="120px" display="flex" flexDir="column" alignItems="center" justifyContent="center" p={4} borderRadius={8} color="white">
            {(!loading) && <Heading mb="2" size="2xl">{value}</Heading>}
            {loading && <Spinner/>}
            <Text textTransform="capitalize">{description}</Text>
        </Box>
    )
}

StatsCard.propTypes = {
    background:PropTypes.string,
    description:PropTypes.string,
    value:PropTypes.number
}
export default StatsCard
