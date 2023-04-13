import { Box, Heading, Text, Button, useColorMode, Card, CardBody, Icon} from '@chakra-ui/react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Nav from '../components/NavBar';

const ThankYou = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'purple.50' : 'gray.800';
  
  return (
    <Box bg={bgColor} minHeight="100vh" display="flex" flexDirection="column">
      <meta name="description" content="Feedback page for NeuroNote" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Nav />
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Card w="50%" textAlign="center" p={10}  boxShadow="md" borderRadius="md">
        <CardBody>
          <Heading as="h1" fontSize="6xl" mb={10} pr='30px'>Success  <Icon as={AiOutlineCheckCircle} w={16} h={16} color='green' position='absolute' top='65px'/></Heading>
          <Text fontSize="2xl" mb={10} >The form was submitted successfully. Thank you for your feedback</Text>
          <Link to="/">
            <Button size='lg'  mb={10} colorScheme="blue">Return to Home</Button>
          </Link>
        </CardBody>
        </Card>
      </Box>
    </Box>
  );
}

export default ThankYou;