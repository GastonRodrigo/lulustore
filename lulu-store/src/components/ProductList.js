// src/components/ProductList.js
"use client";

import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;