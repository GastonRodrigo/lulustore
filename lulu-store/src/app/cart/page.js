// src/app/cart/page.js
"use client";

import { Box, Heading, VStack, Text, Button, HStack, Input } from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";
import Checkout from "@/components/Checkout";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <Box maxW="container.xl" mx="auto" py={8}>
      <Heading mb={6} color="pastelGreen.700">Your Cart</Heading>
      <VStack spacing={4} align="stretch">
        {cartItems.map((item) => (
          <Box key={item.id} p={4} borderWidth="1px" borderRadius="md" bg="white" boxShadow="sm">
            <HStack justify="space-between">
              <Text color="neutral.800">{item.name} - ${item.price}</Text>
              <HStack>
                <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                <Input 
                  size="sm" 
                  width="50px" 
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                  textAlign="center"
                />
                <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                <Button size="sm" colorScheme="red" onClick={() => removeFromCart(item.id)}>Borrar</Button>
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
      <Text mt={4} fontWeight="bold" color="pastelGreen.600">
        Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
      </Text>
      <Box mt={6}>
        <Checkout />
      </Box>
    </Box>
  );
}