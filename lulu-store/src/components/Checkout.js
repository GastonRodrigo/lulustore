// src/components/Checkout.js
"use client";

import { Button, useToast } from "@chakra-ui/react";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();
  const toast = useToast();

  const handleCheckout = () => {
    const phoneNumber = "+5491156436110";
    const message = encodeURIComponent(
      `New order:\n\n${cartItems
        .map((item) => `${item.name} - $${item.price} x ${item.quantity}`)
        .join("\n")}\n\nTotal: $${cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ).toFixed(2)}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

    toast({
      title: "Order sent",
      description: "Your order has been sent via WhatsApp.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Button bg="pastelGreen.400" _hover={{ bg: "pastelGreen.500" }} color="white" onClick={handleCheckout}>
      Checkout via WhatsApp
    </Button>
  );
};

export default Checkout;