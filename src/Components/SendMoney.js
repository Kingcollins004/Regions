import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  Image,
  Input,
  Select,
  Button,
  HStack,
  PinInput,
  PinInputField,
  Textarea,
} from "@chakra-ui/react";
import cancel from "../Assets/SVG/cancelIcon.svg";
import banksInAmerica from "../Utilities/BankNames";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Verification from "../Pages/Verification";

const SendMoney = ({ balance, euro, onCloseButtonClick, onClose }) => {
  const [isSending, setIsSending] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputContainerRef = useRef(null);
  const [enterPin, setEnterPin] = useState(true);
  const [transferAmount, setTransferAmount] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const [RoutingNum, setRoutingNum] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [description, setDescription] = useState("");

  const handleTransferAmountChange = (e) => {
    setTransferAmount(e.target.value);
  };
  const handleAccountNumChange = (e) => {
    setAccountNum(e.target.value);
  };

  const handleRoutingNumChange = (e) => {
    setRoutingNum(e.target.value);
  };

  const handleSwiftCodeChange = (e) => {
    setSwiftCode(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCodeChange = (e, index) => {
    const value = e.target.value;
    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });

    const inputFields = Array.from(inputContainerRef.current.children);
    if (value && index < inputFields.length - 1) {
      inputFields[index + 1].focus();
    }
  };

  const handleCodeKeyUp = (e) => {
    const keyCode = e.keyCode || e.which;
    const inputFields = Array.from(inputContainerRef.current.children);
    const currentIndex = inputFields.findIndex((input) => input === e.target);

    if (
      (keyCode >= 48 && keyCode <= 57) ||
      keyCode === 8 ||
      keyCode === 46 ||
      keyCode === 37
    ) {
      if (keyCode === 8 || keyCode === 46) {
        // Move to the previous input field when backspace or delete is pressed
        if (currentIndex > 0 && e.target.value === "") {
          inputFields[currentIndex - 1].focus();
        }
      } else if (keyCode === 37) {
        // Move to the previous input field when the left arrow key is pressed
        if (currentIndex > 0) {
          inputFields[currentIndex - 1].focus();
        }
      } else if (e.target.value !== "") {
        // Move to the next input field when the current field is filled
        if (currentIndex < inputFields.length - 1) {
          inputFields[currentIndex + 1].focus();
        }
      }
    } else {
      e.preventDefault();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!accountNum && !RoutingNum && !swiftCode) {
      toast.error("Please fill out every information");
    } else {
      setIsSending(true);
    }
    console.log(transferAmount);
  };

  const handlePin = (e) => {
    const enteredCode = verificationCode.join("");
    if (!enteredCode) {
      toast.error("Please enter your pin");
    } else if (enteredCode === "8914") {
      setEnterPin(false);
      setVerificationCode(["", "", "", ""]); // Clear the verification code after successful PIN entry
    } else {
      toast.error("Please enter a correct pin");
    }
  };

  const peopleNames = [
    "John Smith",
    "Emily Johnson",
    "Michael Davis",
    "Amanda Miller",
    "Christopher Wilson",
    "Olivia Taylor",
    "Daniel Brown",
    "Sophia Martinez",
    "Matthew Anderson",
    "Emma Garcia",
    "Andrew Jackson",
    "Grace Thomas",
    "Ryan White",
    "Chloe Davis",
    "David Lee",
    "Ava Moore",
    "Joseph Robinson",
    "Mia Harris",
    "William Taylor",
    "Sophie Clark",
    "Ethan Turner",
    "Isabella Walker",
    "Nicholas Harris",
    "Madison King",
    "Alexander Wright",
    "Abigail Hall",
    "Benjamin Martinez",
    "Lily Anderson",
    "Jacob Miller",
  ];

  const [result, setResult] = useState("");
  const lookupName = () => {
    // Clear previous result
    setResult("");

    // Check if the entered value is a 10-digit number
    const trimmedAccountNum = accountNum.trim();
    if (/^\d{9}$/.test(trimmedAccountNum)) {
      // Get a random name from the array
      const randomIndex = Math.floor(Math.random() * peopleNames.length);
      const randomName = peopleNames[randomIndex];

      // Display the result
      setResult(`${randomName}`);
    }
  };

  return (
    <div>
      {isSending ? (
        <Box paddingY="5%" paddingX="5%">
          <Toaster position="top-center" reverseOrder={false} />

          <Flex alignItems="center">
            <Text flex="1" fontWeight="bold">
              Send Money
            </Text>
            <Flex flex="1" justifyContent="flex-end">
              {/* <DrawerCloseButton /> */}
              <Image onClick={onCloseButtonClick} width="15%" src={cancel} />
            </Flex>
          </Flex>
          {enterPin ? (
            <Box paddingX="1%">
              <Box
                textAlign="center"
                margin={{ base: "15% 5%", md: "5%" }}
                padding="1%"
                borderRadius="20px"
                backgroundColor="white"
              >
                <Text
                  fontSize={{ base: "20px", md: "30px" }}
                  fontWeight="600"
                  marginBottom="8%"
                  marginTop="8%"
                >
                  Enter Transaction PIN for Fund Transfer
                </Text>

                <Text
                  fontSize={{ base: "14px", md: "16px" }}
                  color="#707070"
                  marginBottom="8%"
                  fontWeight="700"
                >
                  Transfer ${transferAmount} to {result}
                </Text>

                <Text
                  fontSize={{ base: "13px", md: "16px" }}
                  color="#707070"
                  marginBottom="8%"
                >
                  Enter your transfer PIN
                </Text>

                <Box marginBottom="8%" ref={inputContainerRef}>
                  <Flex justifyContent="center">
                    <HStack>
                      <PinInput otp>
                        {verificationCode.map((digit, index) => (
                          <PinInputField
                            key={index}
                            height="50px"
                            width="70px"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleCodeChange(e, index)}
                            onKeyUp={handleCodeKeyUp}
                          />
                        ))}
                      </PinInput>
                    </HStack>
                  </Flex>
                </Box>
                <Button
                  background="#558800"
                  marginTop="4%"
                  color="#fff"
                  variant="outline"
                  width="100%"
                  padding="7%"
                  borderRadius="10px"
                  fontSize="15px"
                  marginBottom="5%"
                  onClick={handlePin}
                >
                  Transfer funds
                </Button>
              </Box>
            </Box>
          ) : (
            <Verification
              amount={transferAmount}
              result={result}
              description={description}
              accountNum = {accountNum}
            />
          )}
        </Box>
      ) : (
        <Box paddingY="5%" paddingX="5%">
          <Flex alignItems="center">
            <Text flex="1" fontWeight="bold">
              Send Money
            </Text>
            <Flex flex="1" justifyContent="flex-end">
              <Image onClick={onCloseButtonClick} width="15%" src={cancel} />
            </Flex>
          </Flex>
          <Box marginTop="5%">
            <Text>Choose Account</Text>
            <Select size="lg" fontSize="14px" marginTop="3%">
              <option value="option1">
                Domestic Account - ${balance.toLocaleString()}
              </option>
              <option value="option2">
                Euro Account - ${euro.toLocaleString()}
              </option>
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
            <Text>Routing Number</Text>
            <Input
              placeholder="Enter routing number"
              padding="6% 2%"
              marginTop="3%"
              id="Amount"
              onChange={handleRoutingNumChange}
              value={RoutingNum}
            />
          </Box>
          <Box marginTop="5%">
            <Text>Swift Code</Text>
            <Input
              placeholder="Enter swift code"
              padding="6% 2%"
              marginTop="3%"
              id="Amount"
              onChange={handleSwiftCodeChange}
              value={swiftCode}
            />
          </Box>
          <Box marginTop="5%">
            <Text>Beneficiary Account Number</Text>
            <Input
              id="AccountNum"
              onChange={handleAccountNumChange}
              value={accountNum}
              padding="6% 2%"
              marginTop="3%"
              onInput={lookupName}
            />
            <Text>{result}</Text>
          </Box>
          <Box marginTop="5%">
            <Text>Amount</Text>
            <Input
              id="Amount"
              onChange={handleTransferAmountChange}
              value={transferAmount}
              padding="6% 2%"
              marginTop="3%"
            />
          </Box>
          <Box marginTop="5%">
            <Text>Narration</Text>
            <Textarea
              id="Amount"
              onChange={handleDescription}
              value={description}
              padding="1% 2%"
              height="100px"
              marginTop="3%"
            />
          </Box>
          <Button
            marginTop="5%"
            backgroundColor="#558800"
            color="white"
            width="100%"
            padding="8% 0"
            onClick={handleClick}
          >
            Send
          </Button>
        </Box>
      )}
    </div>
  );
};

export default SendMoney;
