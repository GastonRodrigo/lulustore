import { Box } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box maxW="container.xl" mx="auto" py={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;