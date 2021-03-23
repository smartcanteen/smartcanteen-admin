import React from 'react'
import { Box } from '@chakra-ui/react'
import { DashboardDrawer, DashboardContent, DashboardBreadcrumb } from 'components/shared'

const breadCrumbItem = [
    {label:'home', uri:'/'},
]

const Dashboard = () => {
    return (
        <Box bgColor="white">
            <DashboardDrawer/>

            <Box bgColor="bgcolor.500">
                <DashboardContent>
                    <Box>
                        <DashboardBreadcrumb breadcrumbData={breadCrumbItem}/>
                    </Box>
                </DashboardContent>

            </Box>
            
                <DashboardContent>
                    sadasd
                </DashboardContent>
        </Box>
    )
}

export default Dashboard
