// src/app/layout.js
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
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
            <Header 
              cartItemsCount={0} // We'll update this later
              onCategorySelect={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <main>{children}</main>
          </CartProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}