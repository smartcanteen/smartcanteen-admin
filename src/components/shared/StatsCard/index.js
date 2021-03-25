import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Text } from '@chakra-ui/react'
const StatsCard = props => {
    const { background, title, value } = props
    /*
        Total Transaksi
        Total Pendapatan
        
    */
    return (
        <Box {...props} className="stats-card" minW="20%" minH="120px" display="flex" flexDir="column" alignItems="center" justifyContent="center" p={4} borderRadius={8} color="white">
            <Heading mb="2" size="2xl">300000</Heading>
            <Text textTransform="capitalize">Total Transaksi</Text>
        </Box>
    )
}

StatsCard.propTypes = {
    background:PropTypes.string,
    title:PropTypes.string,
    value:PropTypes.number
}
export default StatsCard
