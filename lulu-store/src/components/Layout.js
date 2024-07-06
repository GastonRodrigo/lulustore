// src/components/Layout.js
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flex="1" maxW="container.xl" mx="auto" py={8}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;