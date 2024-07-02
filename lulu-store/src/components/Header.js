// src/components/Header.js
"use client";

import { Box, Flex, Heading, Spacer, Button, Menu, MenuButton, MenuList, MenuItem, Badge } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Header = ({ cartItemsCount, onCategorySelect, selectedCategory }) => {
  const categories = ["All", "Ropa Adultos", "Ropa de cama", "Baño", "Ropa Niños"];
  const router = useRouter();

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
    router.push(`/?category=${encodeURIComponent(category)}`);
  };

  return (
    <Box bg="pastelGreen.100" py={4} boxShadow="md">
      <Flex maxW="container.xl" mx="auto" align="center">
        <Link href="/" passHref>
          <Heading as="h1" size="lg" cursor="pointer" color="pastelGreen.700">Lulu Store</Heading>
        </Link>
        <Spacer />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="pastelGreen.200" _hover={{ bg: "pastelGreen.300" }}>
            {selectedCategory}
          </MenuButton>
          <MenuList bg="pastelGreen.50">
            {categories.map((category) => (
              <MenuItem 
                key={category} 
                onClick={() => handleCategorySelect(category)} 
                _hover={{ bg: "pastelGreen.100" }}
                bg={category === selectedCategory ? "pastelGreen.200" : ""}
              >
                {category}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Spacer />
        <Link href="/cart" passHref>
          <Button bg="pastelGreen.300" _hover={{ bg: "pastelGreen.400" }}>
            Cart
            {cartItemsCount > 0 && (
              <Badge ml={2} colorScheme="red" borderRadius="full" px={2}>
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;