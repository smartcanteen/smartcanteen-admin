import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { DashboardDrawer, DashboardContent, DashboardBreadcrumb, GreetingCard, DashboardTopNav } from 'components/shared'

const breadCrumbItem = [
    {label:'home', uri:'/'},
]

const Dashboard = () => {
    return (
        <Box minH="100vh">
            <DashboardDrawer/>

            <DashboardTopNav>
                <DashboardBreadcrumb breadcrumbData={breadCrumbItem}/>
            </DashboardTopNav>
            
            <DashboardContent>
                <GreetingCard/>
                {/* <Box className="stats-wrapper" d="flex" w="100%" bgColor="pink" justifyContent="">
                    <StatsCard bgColor="primary.500"/>
                    <StatsCard bgColor="primary.500"/>
                    <StatsCard bgColor="primary.500"/>
                    <StatsCard bgColor="primary.500"/>
                </Box> */}
                {/* <Box>

                </Box> */}
            </DashboardContent>
        </Box>
    )
}

export default Dashboard
