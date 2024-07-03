// src/components/ProductCard.js
"use client";

import { Box, Image, Text, Button, useToast } from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const toast = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Producto agregado",
      description: `${product.name} fue añadido a tu carrito.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="white" boxShadow="md">
      <Image src={product.image} alt={product.name} />
      <Box mt={2}>
        <Text fontWeight="bold" color="neutral.800">{product.name}</Text>
        <Text color="pastelGreen.600">${product.price}</Text>
      </Box>
      <Button mt={2} bg="pastelGreen.300" _hover={{ bg: "pastelGreen.400" }} onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;