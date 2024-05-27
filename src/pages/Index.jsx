import { Box, Container, VStack, Text, Image, Grid, GridItem, Link, Flex, Heading, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading size="xl" mb={4}>Featured Product</Heading>
        <Image src="/images/featured-product.jpg" alt="Featured Product" boxSize="300px" mx="auto" mb={4} />
        <Text fontSize="lg" mb={4}>Discover the latest in electronics with our featured product of the month!</Text>
        <Button colorScheme="blue">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6}>Our Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
          <GridItem>
            <Image src="/images/product1.jpg" alt="Product 1" boxSize="200px" mx="auto" mb={4} />
            <Text textAlign="center">Product 1</Text>
          </GridItem>
          <GridItem>
            <Image src="/images/product2.jpg" alt="Product 2" boxSize="200px" mx="auto" mb={4} />
            <Text textAlign="center">Product 2</Text>
          </GridItem>
          <GridItem>
            <Image src="/images/product3.jpg" alt="Product 3" boxSize="200px" mx="auto" mb={4} />
            <Text textAlign="center">Product 3</Text>
          </GridItem>
          <GridItem>
            <Image src="/images/product4.jpg" alt="Product 4" boxSize="200px" mx="auto" mb={4} />
            <Text textAlign="center">Product 4</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={4} textAlign="center">
        <Flex justifyContent="center" mb={4}>
          <Link href="#" mx={2}><FaFacebook /></Link>
          <Link href="#" mx={2}><FaTwitter /></Link>
          <Link href="#" mx={2}><FaInstagram /></Link>
        </Flex>
        <Text mb={2}>Contact Us: info@electroshop.com</Text>
        <Text mb={2}>Terms of Service</Text>
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;