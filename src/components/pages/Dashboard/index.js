import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { DashboardDrawer, DashboardContent, DashboardBreadcrumb, GreetingCard, DashboardTopNav, StatisticCard, StatsCard } from 'components/shared'

const breadCrumbItem = [
    { label: 'home', uri: '/' },
]

const Dashboard = () => {
    return (
        <Box minH="100vh">
            <DashboardDrawer />

            <DashboardTopNav>
                <DashboardBreadcrumb breadcrumbData={breadCrumbItem} />
            </DashboardTopNav>

            <DashboardContent>
                <Box mb={5}>
                    <GreetingCard />
                </Box>
                <Box className="stats-wrapper" d="flex" w="100%" mb={5} justifyContent="space-between">
                    <StatsCard bgColor="primary.500" value="100" description="Penjualan" />
                    <StatsCard bgColor="primary.500" value="500.000" description="Keuntungan" />
                    <StatsCard bgColor="primary.500" value="80" description="Transaksi" />
                    <StatsCard bgColor="primary.500" value="30" description="Pembelian" />
                </Box>
                <Box>
                    <StatisticCard />
                </Box>
            </DashboardContent>
        </Box>
    )
}

export default Dashboard