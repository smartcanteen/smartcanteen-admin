import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import { useRecoilValue } from 'recoil'
import { authProfileData } from 'recoil/authentication'
import MorningImage from "assets/images/morning-bg.svg";
import NightImage from "assets/images/night-bg.svg";

const GreetingCard = () => {
    const currentDate = new Date()
    const profileData = useRecoilValue(authProfileData)

    const currentStatus = (currentDate) => {
        if(currentDate.getHours() < 12) return 'morning'
        else if(currentDate.getHours() < 18) return 'afternoon'
        else return 'night'
    }
  const [currentTime, setCurrentTime] = useState({
      hours:currentDate.getHours(),
      minutes:currentDate.getMinutes(),
      seconds:currentDate.getSeconds(),
    })
    
    
    useEffect(() => {
        setInterval(()=> {
            const updateDate = new Date()
            setCurrentTime({
            ...currentTime,
            hours: updateDate.getHours(),
            minutes: updateDate.getMinutes(),
            seconds:updateDate.getSeconds()
        })
      },1000)
      console.log("kboom")
  }, [])

  let clockColor = ""
  let captionColor = ""
  let greetingText = ""
  let bgImage = null
  switch (currentStatus(currentDate)) {
    case "night":
      clockColor = "#F39C12"
      captionColor = "#FFF"
      greetingText = "Have a Nice Dream"
      bgImage = NightImage
      break;
    case "morning":
    case "afternoon":
        clockColor = "#182C61"
        captionColor = "#222445"
        greetingText = "Have a Nice Day"
        bgImage = MorningImage
      break;

    default:
        clockColor = "#000";
        captionColor = "#000"
  }
  if (profileData){
    return (
      <Box
        d="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p={4}
        borderRadius={8}
        bgImage={`url(${bgImage})`}
        bgSize="cover"
        minH="250px"
        bgPos="bottom"
        bgRepeat="no-repeat"
      >
        <Box mb="-3px">
          <Heading fontSize="100px" textColor={currentStatus(currentDate) === 'night' ? '#F39C12' : '#182C61'}>{(currentTime.hours<10?'0':'') + currentTime.hours}:{(currentTime.minutes<10?'0':'') + currentTime.minutes}</Heading>
        </Box>
        <Box textAlign="center">
            <Text fontSize="40px" fontWeight="bold" textColor={captionColor} textTransform="capitalize">Good {currentStatus(currentDate)}, {profileData?.first_name + ' ' + profileData?.last_name}</Text>
            <Text fontSize="20px" textColor={captionColor} textTransform="capitalize">{greetingText}</Text>
        </Box>
      </Box>
    );
  }
};

export default GreetingCard;
