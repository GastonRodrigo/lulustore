import { Box, VStack, Text, Button } from "@chakra-ui/react";

const Cart = ({ items }) => {
  return (
    <Box>
      <VStack spacing={4} align="stretch">
        {items.map((item) => (
          <Box key={item.id} p={4} borderWidth="1px" borderRadius="md">
            <Text>{item.name} - ${item.price}</Text>
          </Box>
        ))}
      </VStack>
      <Button mt={4} colorScheme="green">
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;