import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Flex,
  Button,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import TransferSuccess from "../Components/TransferSuccess";
import { useDispatch } from "react-redux";
import { updateUserBalance } from "../Feature/action";
import { useNavigate } from "react-router-dom";

const LoginVerification = (props) => {
  const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);
  const inputContainerRef = useRef(null);
  const [timer, setTimer] = useState(90);
  const userInfo = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleOtpCodeChange = (e, index) => {
    const value = e.target.value;
    setOtpCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });

    const inputFields = Array.from(inputContainerRef.current.children);
    if (value && index < inputFields.length - 1) {
      inputFields[index + 1].focus();
    }
  };

  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleOtpCodeKeyUp = (e) => {
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

  const handleVerify = () => {
    const enteredOtpCode = otpCode.join("");

    if (enteredOtpCode === "458632") {
      // toast.error(
      //   "Suspicious Activity your account has been suspended for violating the terms and conditions of region bank kindly visit one of our branch with a valid identification card to prove your identity"
      // );
      toast.success("Verification successful")
      navigate("/dashboard");
    } else {
      toast.error("Incorrect OTP");
    }
  };

  return (
    <div>
      <Box paddingX="5%">
        <Toaster position="top-center" reverseOrder={false} />
        <Box
          textAlign="center"
          margin={{ base: "15% 5%", md: "5% 5%" }}
          padding="5%"
          borderRadius="20px"
          backgroundColor="white"
        >
          <Text
            fontSize={{ base: "20px", md: "30px" }}
            fontWeight="700"
            marginBottom="8%"
          >
            Verify Your Account
          </Text>
          <Text
            fontSize={{ base: "13px", md: "16px" }}
            color="#707070"
            marginBottom="8%"
          >
            A 6-digit OTP has been sent to your emaii address
            <span className="user-num"> {userInfo.email}</span>
          </Text>
          <Box marginBottom="8%" ref={inputContainerRef}>
            <Flex justifyContent="center">
              <HStack>
                <PinInput otp>
                  {otpCode.map((digit, index) => (
                    <PinInputField
                      key={index}
                      height="50px"
                      width="50px"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpCodeChange(e, index)}
                      onKeyUp={handleOtpCodeKeyUp}
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
            width={{ base: "100%", md: "50%" }}
            padding={{ base: "7%", md: "3%" }}
            borderRadius="10px"
            fontSize="15px"
            marginBottom="5%"
            onClick={handleVerify}
          >
            Verify Account
          </Button>
          <Box color="#001233" fontSize="12px">
            {timer > 0 ? (
              <span>
                Didn't receive an OTP?
                <br /> Resend OTP in:{" "}
                <span className="verifyTimer">
                  {formattedMinutes}:{formattedSeconds}
                </span>
              </span>
            ) : (
              <button>Resend OTP</button>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LoginVerification;
