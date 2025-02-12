// src/data/products.js

function getRandomImages(count = 3) {
  const width = 150;
  const height = 150;
  return Array(count).fill().map(() => 
    `https://source.unsplash.com/random/${width}x${height}?product&${Math.random()}`
  );
}

export const products = [
  // Ropa Adultos
  { 
    id: 1, 
    name: "T-shirt", 
    price: 19.99, 
    category: "Ropa Adultos", 
    images: [
      "https://acdn.mitiendanube.com/stores/001/843/621/products/remera-mars-7c26d2c9fee69ac0e117038892666423-1024-1024.png",
      ...getRandomImages(2)
    ]
  },
  { 
    id: 2, 
    name: "Jeans", 
    price: 49.99, 
    category: "Ropa Adultos", 
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_626262-MLA54057589249_022023-O.webp", "https://acdn.mitiendanube.com/stores/001/053/132/products/_mg_8055-11-787856a06a41dae4a716569590968338-1024-1024.jpg"
    ]
  },
  { 
    id: 3, 
    name: "Sweater", 
    price: 39.99, 
    category: "Ropa Adultos", 
    images: [
      "https://acdn.mitiendanube.com/stores/001/053/132/products/_mg_8055-11-787856a06a41dae4a716569590968338-1024-1024.jpg",
      ...getRandomImages(2)
    ]
  },
  { id: 4, name: "Dress", price: 59.99, category: "Ropa Adultos", images: [
    "https://http2.mlstatic.com/D_NQ_NP_626262-MLA54057589249_022023-O.webp", "https://acdn.mitiendanube.com/stores/001/053/132/products/_mg_8055-11-787856a06a41dae4a716569590968338-1024-1024.jpg"
  ] },
  { id: 5, name: "Jacket", price: 79.99, category: "Ropa Adultos", images: [
    "https://http2.mlstatic.com/D_NQ_NP_626262-MLA54057589249_022023-O.webp", "https://acdn.mitiendanube.com/stores/001/053/132/products/_mg_8055-11-787856a06a41dae4a716569590968338-1024-1024.jpg"
  ] },

  // Ropa de cama
  { id: 6, name: "Bed Sheet Set", price: 89.99, category: "Ropa de cama", images: [
    "https://http2.mlstatic.com/D_NQ_NP_626262-MLA54057589249_022023-O.webp", "https://acdn.mitiendanube.com/stores/001/053/132/products/_mg_8055-11-787856a06a41dae4a716569590968338-1024-1024.jpg"
  ] },
  { id: 7, name: "Duvet Cover", price: 69.99, category: "Ropa de cama", images: [
    "https://http2.mlstatic.com/D_NQ_NP_626262-MLA54057589249_022023-O.webp", "https://acdn.mitiendanube.com/stores/001/053/132/products/_mg_8055-11-787856a06a41dae4a716569590968338-1024-1024.jpg"
  ] },
  { id: 8, name: "Pillowcases", price: 24.99, category: "Ropa de cama", images: [
    "https://http2.mlstatic.com/D_NQ_NP_626262-MLA54057589249_022023-O.webp", "https://acdn.mitiendanube.com/stores/001/053/132/products/_mg_8055-11-787856a06a41dae4a716569590968338-1024-1024.jpg"
  ] },
  { id: 9, name: "Comforter", price: 99.99, category: "Ropa de cama", images: [
    "https://http2.mlstatic.com/D_NQ_NP_626262-MLA54057589249_022023-O.webp", "https://acdn.mitiendanube.com/stores/001/053/132/products/_mg_8055-11-787856a06a41dae4a716569590968338-1024-1024.jpg"
  ] },
  { id: 10, name: "Throw Blanket", price: 34.99, category: "Ropa de cama", images: [
    "https://http2.mlstatic.com/D_NQ_NP_626262-MLA54057589249_022023-O.webp", "https://acdn.mitiendanube.com/stores/001/053/132/products/_mg_8055-11-787856a06a41dae4a716569590968338-1024-1024.jpg"
  ] },

  // Baño
  { id: 11, name: "Towel Set", price: 39.99, category: "Baño", images: getRandomImages() },
  { id: 12, name: "Shower Curtain", price: 29.99, category: "Baño", images: getRandomImages() },
  { id: 13, name: "Bath Mat", price: 19.99, category: "Baño", images: getRandomImages() },
  { id: 14, name: "Bathrobe", price: 49.99, category: "Baño", images: getRandomImages() },
  { id: 15, name: "Soap Dispenser", price: 14.99, category: "Baño", images: getRandomImages() },

  // Ropa Niños
  { id: 16, name: "Kids T-shirt", price: 14.99, category: "Ropa Niños", images: getRandomImages() },
  { id: 17, name: "Kids Jeans", price: 29.99, category: "Ropa Niños", images: getRandomImages() },
  { id: 18, name: "Kids Pajamas", price: 24.99, category: "Ropa Niños", images: getRandomImages() },
  { id: 19, name: "Kids Dress", price: 34.99, category: "Ropa Niños", images: getRandomImages() },
  { id: 20, name: "Kids Jacket", price: 44.99, category: "Ropa Niños", images: getRandomImages() },
];