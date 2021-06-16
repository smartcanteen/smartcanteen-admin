import React, { useState, useEffect } from 'react'
import { Box, Heading, Spinner } from '@chakra-ui/react'
import { DashboardDrawer, DashboardContent, DashboardBreadcrumb, GreetingCard, DashboardTopNav, StatisticCard, StatsCard } from 'components/shared'
import { getStatistikAdmin } from "configs/api";

const breadCrumbItem = [
    { label: 'home', uri: '/' },
]

const Dashboard = () => {
    const [statData, setStatData] = useState();

    useEffect(() => {
        const getStatData = async () => {
            const response = await getStatistikAdmin();
            const { data } = response?.data
            console.log("Stat", response)
            if (response.data.success) {
                await setStatData(data);
                // getFood(data?.tenant.id_warung);
            }
        };

        getStatData();
    }, []);
    if (statData){
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
                        <StatsCard bgColor="primary.500" value={statData.penjualan} description="Penjualan" />
                        <StatsCard bgColor="primary.500" value={statData.keuntungan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} description="Keuntungan" />
                        <StatsCard bgColor="primary.500" value={statData.transaksi} description="Transaksi" />
                        <StatsCard bgColor="primary.500" value={statData.pembelian} description="Pembelian" />
                    </Box>
                    <Box>
                        <StatisticCard />
                    </Box>
                </DashboardContent>
            </Box>
        )
    }else{
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
                        <StatsCard bgColor="primary.500" loading={true} description="Penjualan" />
                        <StatsCard bgColor="primary.500" loading={true} description="Keuntungan" />
                        <StatsCard bgColor="primary.500" loading={true} description="Transaksi" />
                        <StatsCard bgColor="primary.500" loading={true} description="Pembelian" />
                    </Box>
                    <Box>
                        <StatisticCard />
                    </Box>
                </DashboardContent>
            </Box>)
    }
}

export default Dashboard