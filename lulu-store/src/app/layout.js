"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider, useCart } from "@/context/CartContext";
import theme from "@/theme/theme";
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <CartProvider>
            <Box display="flex" flexDirection="column" minHeight="100vh">
              <Header
                cartItemsCount={0} // We'll update this later
                onCategorySelect={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
              <Box flex="1">
                <main>{children}</main>
              </Box>
              <Footer />
            </Box>
          </CartProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}