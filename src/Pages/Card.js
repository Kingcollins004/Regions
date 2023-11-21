import React from 'react';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';

const Card = () => {
  return (
    <Flex>
      <CardDebit />
      <CardCredit />

      <CardMaintenance />
    </Flex>
  );
};

const CardDebit = () => {
  const debitCardData = {
    accountName: 'John Doe',
    accountNumber: '1234567890',
    expiryDate: '01/25',
  };

  return (
    <Box bg='gray.300' rounded='lg' shadow='lg' p={8}>
      <Heading as='h3' mt={4}>Debit Card</Heading>
      <Flex flexDirection='column' mt={4}>
        <Text fontSize='16px' fontWeight='bold'>Account Name</Text>
        <Text>{debitCardData.accountName}</Text>

        <Text fontSize='16px' fontWeight='bold'>Account Number</Text>
        <Text>{debitCardData.accountNumber}</Text>

        <Text fontSize='16px' fontWeight='bold'>Expiry Date</Text>
        <Text>{debitCardData.expiryDate}</Text>
      </Flex>
    </Box>
  );
};

const CardCredit = () => {
  const creditCardData = {
    accountName: 'Jane Doe',
    accountNumber: '9876543210',
    expiryDate: '12/24',
  };

  return (
    <Box bg='gray.400' rounded='lg' shadow='lg' p={8} ml={8}>
      <Heading as='h3' mt={4}>Credit Card</Heading>
      <Flex flexDirection='column' mt={4}>
        <Text fontSize='16px' fontWeight='bold'>Account Name</Text>
        <Text>{creditCardData.accountName}</Text>

        <Text fontSize='16px' fontWeight='bold'>Account Number</Text>
        <Text>{creditCardData.accountNumber}</Text>

        <Text fontSize='16px' fontWeight='bold'>Expiry Date</Text>
        <Text>{creditCardData.expiryDate}</Text>
      </Flex>
    </Box>
  );
};

const CardMaintenance = () => {
  return (
    <Box py={8}>
      <Heading as='h4' mb={4}>Card Maintenance</Heading>
      <Text>Manage your debit and credit cards here in one place.</Text>
      <Text>Access card statements, block cards, and more.</Text>
      <Text>Enjoy enhanced security and peace of mind.</Text>
    </Box>
  );
};

export default Card;
