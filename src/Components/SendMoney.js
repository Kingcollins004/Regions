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
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
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
  const [showModal, setShowModal] = useState(false);
  const [enterPin, setEnterPin] = useState(true);
  const [transferAmount, setTransferAmount] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTransferAmountChange = (e) => {
    setTransferAmount(e.target.value);
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

  const handleClick = () => {
    setIsSending(true);
  };

  const handlePin = () => {
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
                  Enter Transaction OTP for Fund Transfer
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
            <Verification />
          )}

          <Modal isOpen={showModal} onClose={closeModal}>
            <ModalOverlay backgroundColor="rgba(255, 255, 255, 0.1)" />
            <ModalContent
              borderRadius="25px"
              padding="0.5%"
              backgroundColor="#30CF63"
              margin="600px 22% 0% 22%"
            >
              <ModalBody>
                <ModalCloseButton marginTop="-5px" color="white" />
                <Text fontSize={{ base: "12px", md: "16px" }} color="white">
                  Verification Successful.
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
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
            />
          </Box>
          <Box marginTop="5%">
            <Text>Swift Code</Text>
            <Input
              placeholder="Enter swift code"
              padding="6% 2%"
              marginTop="3%"
            />
          </Box>
          <Box marginTop="5%">
            <Text>Beneficiary Account Number</Text>
            <Input padding="6% 2%" marginTop="3%" />
          </Box>
          <Box marginTop="5%">
            <Text>Amount</Text>
            <Input
              id="password"
              onChange={handleTransferAmountChange}
              value={transferAmount}
              padding="6% 2%"
              marginTop="3%"
            />
          </Box>
          <Box marginTop="5%">
            <Text>Narration</Text>
            <Textarea padding="1% 2%" height="100px" marginTop="3%" />
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
