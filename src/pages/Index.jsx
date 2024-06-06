import { Container, Text, VStack, Heading, Button, HStack } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <HStack width="100%" justifyContent="space-between">
          <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
          {session && (
            <Button onClick={logout} colorScheme="red" size="sm">
              Logout
            </Button>
          )}
        </HStack>
        <Text fontSize="xl">This is your starting point. Begin building something amazing!</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;