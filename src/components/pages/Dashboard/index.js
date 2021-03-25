import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { DashboardDrawer, DashboardContent, DashboardBreadcrumb, SettingsButton, StatsCard, GreetingCard } from 'components/shared'

const breadCrumbItem = [
    {label:'home', uri:'/'},
]

const Dashboard = () => {
    return (
        <Box bgColor="white">
            <DashboardDrawer/>

            <Box bgColor="white" shadow="sm">
                <DashboardContent>
                    <Box d="flex" alignItems="center" justifyContent="space-between">
                        <DashboardBreadcrumb breadcrumbData={breadCrumbItem}/>
                        <SettingsButton/>
                    </Box>
                </DashboardContent>

            </Box>
            
                <DashboardContent>
                    <GreetingCard/>
                    {/* <Box className="stats-wrapper" d="flex" w="100%" bgColor="pink" justifyContent="">
                        <StatsCard bgColor="primary.500"/>
                        <StatsCard bgColor="primary.500"/>
                        <StatsCard bgColor="primary.500"/>
                        <StatsCard bgColor="primary.500"/>
                    </Box> */}
                </DashboardContent>
        </Box>
    )
}

export default Dashboard
