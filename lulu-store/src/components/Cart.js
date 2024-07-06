"use client";
import { Box, VStack, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";
import Checkout from "./Checkout";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <VStack spacing={4} align="stretch">
        {cartItems.length === 0 ? (
          <Text>Tu carrito está vacío.</Text>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Flex>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text>Talle: {item.size}</Text>
                    <Text>Precio: ${item.price}</Text>
                    <Text>Cantidad: {item.quantity}</Text>
                  </VStack>
                  <Spacer />
                  <Button 
                    colorScheme="red" 
                    size="sm"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Eliminar
                  </Button>
                </Flex>
              </Box>
            ))}
            <Box borderTopWidth="1px" pt={4}>
              <Text fontWeight="bold" fontSize="lg">Total: ${totalPrice}</Text>
            </Box>
            <Checkout />
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Cart;