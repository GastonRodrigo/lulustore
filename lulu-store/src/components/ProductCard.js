// src/components/ProductCard.js
"use client";
import { useState, useMemo } from "react";
import { Box, Image, Text, Button, useToast, Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const toast = useToast();
  
  const images = useMemo(() => {
    return Array.isArray(product.images) ? product.images : [product.image || ''];
  }, [product]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="white" boxShadow="md">
      <Box position="relative">
        {images.length > 0 ? (
          <Image src={images[currentImageIndex]} alt={product.name} />
        ) : (
          <Box height="200px" bg="gray.200" display="flex" alignItems="center" justifyContent="center">
            <Text>No image available</Text>
          </Box>
        )}
        {images.length > 1 && (
          <Flex position="absolute" top="50%" left={0} right={0} justifyContent="space-between">
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={prevImage}
              aria-label="Previous image"
              size="sm"
              isRound
              opacity={0.7}
            />
            <IconButton
              icon={<ChevronRightIcon />}
              onClick={nextImage}
              aria-label="Next image"
              size="sm"
              isRound
              opacity={0.7}
            />
          </Flex>
        )}
      </Box>
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