import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Products</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>About Us</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={8}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Heading size="lg" mb={6} textAlign="center">Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 1" />
              <Box p={4}>
                <Heading size="md">Product 1</Heading>
                <Text mt={2}>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 2" />
              <Box p={4}>
                <Heading size="md">Product 2</Heading>
                <Text mt={2}>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 3" />
              <Box p={4}>
                <Heading size="md">Product 3</Heading>
                <Text mt={2}>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 4" />
              <Box p={4}>
                <Heading size="md">Product 4</Heading>
                <Text mt={2}>$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} mt={10}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <Spacer />
            <HStack spacing={4}>
              <Link href="#" isExternal>
                <FaFacebook size="24px" />
              </Link>
              <Link href="#" isExternal>
                <FaTwitter size="24px" />
              </Link>
              <Link href="#" isExternal>
                <FaInstagram size="24px" />
              </Link>
            </HStack>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} align="center" mt={4}>
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
            <Spacer />
            <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Terms of Service</Link>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;