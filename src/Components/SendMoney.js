import React from "react";
import {
  Text,
  Box,
  Flex,
  Image,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import cancel from "../Assets/SVG/cancelIcon.svg";
import banksInAmerica from "../Utilities/BankNames";

const SendMoney = () => {
  const { onClose } = useDisclosure();

  return (
    <Box paddingY="5%" paddingX="5%">
      <Flex alignItems="center">
        <Text flex="1" fontWeight="bold">
          Send Money
        </Text>
        <Flex flex="1" justifyContent="flex-end">
          <Image width="15%" src={cancel} />
        </Flex>
      </Flex>
      <Box marginTop="5%">
        <Text>Choose Account</Text>
        <Select size="lg" fontSize="14px" marginTop="3%">
          <option value="option1">Domestic Account - $34,560.01</option>
          <option value="option2">Euro Account - $14,234.00</option>
        </Select>
      </Box>
      <Box marginTop="5%">
        <Text>Select Bank</Text>
        <Select size="lg" fontSize="14px" marginTop="3%">
          {banksInAmerica.map((bank, index) => (
            <option>{bank}</option>
          ))}
        </Select>
      </Box>
      <Box marginTop="5%">
        <Text>Beneficiary Account Number</Text>
        <Input padding='8% 0' marginTop="3%" />
      </Box>
      <Box marginTop="5%">
        <Text>Amount</Text>
        <Input padding='8% 0' marginTop="3%" />
      </Box>
      <Box marginTop="5%">
        <Text>Narration</Text>
        <Input padding='8% 0' height="150px" marginTop="3%" />
      </Box>
      <Button
        marginTop="5%"
        backgroundColor="#558800"
        color="white"
        width="100%"
        padding="8% 0"
      >
        Send
      </Button>
    </Box>
  );
};

export default SendMoney;
