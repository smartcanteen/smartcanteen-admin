import React, { useEffect, useState } from 'react'
import { Box, Text, Image } from '@chakra-ui/react'
import ProfileAvatar from 'assets/images/ProfileAvatar.svg'
import { getProfile } from 'configs/api'
import { useRecoilValue } from 'recoil'
import { authState } from 'recoil/authentication'
const ProfileCard = () => {
    const[profileData, setProfileData] = useState({
        firstName:'',
        email:''
    })
    const {token} = useRecoilValue(authState)

    useEffect(() => {
        const getProfileData = async () => {
            const { data } = await getProfile(token)
            setProfileData({...profileData, firstName:data.data.first_name, email:data.data.email})
        }
        getProfileData()
    }, [])
    return (
        <Box p={4} bgColor="primary.500" borderRadius={8} d="inline-flex">
            <Image src={ProfileAvatar} boxSize="25%" mr={3}/>
            <Box py={1} color="white" >
                <Box d="inline-flex" alignItems="center">
                <Text mr={1}>Hi,</Text>
                <Text fontSize="xl" as="b" textTransform="capitalize">{profileData.firstName}</Text>

                </Box>
                <Text fontSize="sm">{profileData.email}</Text>
            </Box>
        </Box>
    )
}

export default ProfileCard
