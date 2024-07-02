// src/app/Home.js
"use client";

import { useEffect, useState } from 'react';
import { Box, Heading } from "@chakra-ui/react";
import ProductList from "@/components/ProductList";
import { products } from "@/data/products";

export default function Home({ selectedCategory }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const newFilteredProducts = selectedCategory === "All" 
      ? products 
      : products.filter(product => product.category === selectedCategory);
    setFilteredProducts(newFilteredProducts);
  }, [selectedCategory]);

  return (
    <Box maxW="container.xl" mx="auto" py={8}>
      <Heading mb={6}>Our Products - {selectedCategory}</Heading>
      <ProductList products={filteredProducts} />
    </Box>
  );
}