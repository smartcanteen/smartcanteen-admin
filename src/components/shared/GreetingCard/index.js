import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import { useRecoilValue } from 'recoil'

import MorningImage from "assets/images/morning-bg.svg";
import NightImage from "assets/images/night-bg.svg";

const GreetingCard = () => {
    const currentDate = new Date()
    const currentStatus = (currentDate) => {
        if(currentDate < 12) return 'morning'
        else if(currentDate < 18) return 'afternoon'
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
  }, [currentDate])

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
      <Box>
        <Heading fontSize="100px" textColor={currentStatus(currentDate) === 'night' ? '#F39C12' : '#182C61'}>{(currentTime.hours<10?'0':'') + currentTime.hours}:{(currentTime.minutes<10?'0':'') + currentTime.minutes}</Heading>
      </Box>
      <Box textAlign="center">
          <Text mb={2} fontSize="25px" fontWeight="bold" textColor={captionColor} textTransform="capitalize">Good {currentStatus(currentDate)}, Athalla</Text>
          <Text fontSize="18px" textColor={captionColor} textTransform="capitalize">{greetingText}</Text>
      </Box>
    </Box>
  );
};

export default GreetingCard;
