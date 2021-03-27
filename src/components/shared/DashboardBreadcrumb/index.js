import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Breadcrumb, BreadcrumbItem, Text } from '@chakra-ui/react'
const DashboardBreadcrumb = props => {
    const { breadcrumbData } = props
    return (
        <Breadcrumb>
            {breadcrumbData?.map( (item, index) =>
                <BreadcrumbItem key={index}>
                    <Link to={item.uri}>
                        <Text textTransform="capitalize" fontWeight={index === breadcrumbData.length-1 ? 'bold' : 'normal'}>
                            {item.label}
                        </Text>
                    </Link>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    )
}

export default DashboardBreadcrumb

DashboardBreadcrumb.propTypes = {
    breadcrumbData: PropTypes.arrayOf(Object)
}