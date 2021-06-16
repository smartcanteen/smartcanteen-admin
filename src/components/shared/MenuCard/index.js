import React from "react";
import PropTypes from 'prop-types'
import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { Typography } from '@material-ui/core'

import SellerAvatar from "assets/images/SellerAvatar.svg";
import { Link } from "react-router-dom";

const cardWidth = "100%";
// const cardWidth = "250px";
const cardHeight = "300px";
const cardBorderRad = 12
const MenuCard = props => {
  const { id_makanan, nama, harga, kategori, sold } = props
  const link = "/tenant/makanan/" + id_makanan
  return (
    <Box
      minH={cardHeight}
      maxH={cardHeight}
      borderRadius={cardBorderRad}
      minW={cardWidth}
      maxW={cardWidth}
      pb={0}
      pt={5}
      shadow="md"
      bgColor="white"
      d="inline-flex"
    >
      <Box
        d="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"

      >
        <Image src={SellerAvatar} boxSize="30%" mt={3} mb={4} />
        <Box textAlign="center" px={4}>
          <Box paddingX={1} width='100%'>
            <Typography variant="subtitle1">
                {nama}
            </Typography>
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="8vh">
                <Typography variant="body2">
                    {harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},-
                </Typography>
                {sold && (<Typography variant="caption">
                    {"Terjual: "+sold}
                </Typography>)}
                <Typography variant="caption" gutterBottom>
                    { kategori }
                    {/* Food ID: 11cc180d-6358-4cd3-af5a-937f01f891de */}
                    {/* {foodCategory.map((category,index)=>
                        category + ', '
                    )} */}
                </Typography>
            </Box>
          </Box>
        </Box>
        {/* <Box minW="100%">
          <Link to={link}>
            <Button
              borderRadius="0"
              bgColor="primary.500"
              color="white"
              isFullWidth
              minH="55px"
              borderBottomRadius={cardBorderRad}
            >
              Details
            </Button>
          </Link>
        </Box> */}
      </Box>
    </Box>
  );
};

MenuCard.propTypes = {
  nama: PropTypes.string,
  kategori: PropTypes.string,
}
export default MenuCard;
