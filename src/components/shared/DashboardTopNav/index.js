import React from 'react'
import { Box } from '@chakra-ui/react'
import { SettingsButton, DashboardContent } from 'components/shared'

const DashboardTopNav = ({children}) => {
    return (
        <Box className="top-navigation-wrapper" bgColor="white" shadow="sm">
            <DashboardContent>
                <Box d="flex" alignItems="center" justifyContent="space-between">
                    {children}
                    <SettingsButton/>
                </Box>
            </DashboardContent>
        </Box>
    )
}

export default DashboardTopNav
