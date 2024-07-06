"use client";
import { useState, useMemo } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  useToast,
  Flex,
  IconButton,
  Input,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const toast = useToast();
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const images = useMemo(() => {
    return Array.isArray(product.images) ? product.images : [product.image || ''];
  }, [product]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = () => {
    if (!size) {
      toast({
        title: "Error",
        description: "Por favor ingresa un talle",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    addToCart({ ...product, size });
    toast({
      title: "Producto agregado",
      description: `${product.name} (Talle: ${size}) fue añadido a tu carrito.`,
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
    <>
      <Box 
        borderWidth="1px" 
        borderRadius="lg" 
        overflow="hidden" 
        bg="white" 
        boxShadow="md"
        display="flex"
        flexDirection="column"
        height="400px"
      >
        <Box position="relative" flex="1" minHeight="0" onClick={onOpen} cursor="pointer">
          {images.length > 0 ? (
            <Image 
              src={images[currentImageIndex]} 
              alt={product.name} 
              objectFit="cover"
              width="100%"
              height="100%"
            />
          ) : (
            <Flex height="100%" bg="gray.200" alignItems="center" justifyContent="center">
              <Text>No image available</Text>
            </Flex>
          )}
          {images.length > 1 && (
            <Flex position="absolute" top="50%" left={0} right={0} justifyContent="space-between">
              <IconButton
                icon={<ChevronLeftIcon />}
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                aria-label="Previous image"
                size="sm"
                isRound
                opacity={0.7}
              />
              <IconButton
                icon={<ChevronRightIcon />}
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                aria-label="Next image"
                size="sm"
                isRound
                opacity={0.7}
              />
            </Flex>
          )}
        </Box>
        <VStack spacing={2} p={4} align="stretch" bg="gray.50">
          <Text fontWeight="bold" color="neutral.800" noOfLines={1}>{product.name}</Text>
          <Text color="pastelGreen.600">${product.price}</Text>
          <Input
            placeholder="Ingresa el talle"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            size="sm"
          />
          <Button 
            bg="pastelGreen.300" 
            _hover={{ bg: "pastelGreen.400" }} 
            onClick={handleAddToCart} 
            size="sm"
          >
            Agregar al carrito
          </Button>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={0}>
            <Image
              src={images[currentImageIndex]}
              alt={product.name}
              width="100%"
              height="auto"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;