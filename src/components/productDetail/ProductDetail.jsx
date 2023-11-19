import './ProductDetail.css';
import {Card, CardBody,Stack,Heading,Text,Divider,CardFooter,Image,ButtonGroup,Button,useToast, Center} from '@chakra-ui/react'
/* eslint-disable */
const ProductDetail = ({ product }) => {
    const toast = useToast()
    return (
  <Card maxW='sm' boxShadow='md' borderRadius='md'>
      <CardBody>
      <Center>
        <Image
          src={product.image}
          alt='Green double couch with wooden legs'
          borderRadius='md'
        />
        </Center>
        <Stack mt='6' spacing='3'>
          <Heading size='md' fontWeight='bold'>
            {product.name}
          </Heading>
          <Text color='gray.600'>{product.description}</Text>
          <Text color='blue.600' fontSize='lg' fontWeight='bold'>
            Price: {product.price}
          </Text>
          <Text color='gray.700'>SKU: {product.sku}</Text>
          <Text color='gray.700'>Available Quantity: {product.quantity}</Text>
        </Stack>
      </CardBody>
      <Divider borderColor='gray.300' />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue' onClick={() =>
          toast({
            title: `You have bought 1 ${product.name}`,
            description: `For ${product.price}`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'  onClick={() =>
          toast({
            title: ` 1 ${product.name} added to cart`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>

    );
};

export default ProductDetail;
