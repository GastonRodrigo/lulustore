"use client";
import React, { useState } from 'react';
import {
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text,
  Divider,
  useDisclosure,
  Box
} from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ).toFixed(2);

  const handleCheckout = () => {
    setIsLoading(true);
    const phoneNumber = "+5491156436110";
    const message = encodeURIComponent(
      `Nuevo pedido:\n\n${cartItems
        .map((item) => `${item.name} - $${item.price} - Talle: ${item.size} x ${item.quantity}`)
        .join("\n")}\n\nTotal: $${totalPrice}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setIsLoading(false);
    onClose();
    toast({
      title: "Pedido enviado",
      description: "Tu pedido ha sido enviado por WhatsApp.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button 
        bg="pastelGreen.400" 
        _hover={{ bg: "pastelGreen.500" }} 
        color="white" 
        onClick={onOpen}
      >
        Proceder al Checkout
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resumen de tu pedido</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              {cartItems.map((item, index) => (
                <Box key={index}>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text>Talle: {item.size}</Text>
                  <Text>Precio: ${item.price}</Text>
                  <Text>Cantidad: {item.quantity}</Text>
                  <Text>Subtotal: ${(item.price * item.quantity).toFixed(2)}</Text>
                </Box>
              ))}
              <Divider />
              <Text fontWeight="bold">Total: ${totalPrice}</Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button 
              bg="pastelGreen.400" 
              _hover={{ bg: "pastelGreen.500" }} 
              color="white"
              onClick={handleCheckout}
              isLoading={isLoading}
            >
              Confirmar y enviar por WhatsApp
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Checkout;