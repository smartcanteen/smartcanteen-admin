import React from 'react'
import { Box } from '@chakra-ui/react'
import { DashboardDrawer, DashboardContent, DashboardBreadcrumb, SettingsButton } from 'components/shared'

const breadCrumbItem = [
    {label:'home', uri:'/'},
]

const Dashboard = () => {
    return (
        <Box bgColor="white">
            <DashboardDrawer/>

            <Box bgColor="bgcolor.500">
                <DashboardContent>
                    <Box d="flex" alignItems="center" justifyContent="space-between">
                        <DashboardBreadcrumb breadcrumbData={breadCrumbItem}/>
                        <SettingsButton/>
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
