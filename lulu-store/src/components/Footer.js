"use client";
import { Box, Flex, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="pastelGreen.100" py={4}>
      <Flex maxW="container.xl" mx="auto" justify="center" align="center">
        <Link href="https://www.instagram.com/lulupanzera" isExternal mx={2}>
          <Icon as={FaInstagram} w={6} h={6} color="pink.500" />
        </Link>
        <Link href="https://www.facebook.com/lucia.panzera.3517" isExternal mx={2}>
          <Icon as={FaFacebook} w={6} h={6} color="blue.500" />
        </Link>
        <Link href="https://wa.me/+5491158559526" isExternal mx={2}>
          <Icon as={FaWhatsapp} w={6} h={6} color="green.500" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;