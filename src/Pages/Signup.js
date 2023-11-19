import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Flex, Image, Text, Input } from "@chakra-ui/react";
import logo from "../Assets/SVG/regionsLogo.svg";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import { Toaster, toast } from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*!@#$%]).{8,24}$/;

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [validEmail, setValidemail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const userRef = useRef();

  const [show, setShow] = useState(false);

  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidemail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
  }, [password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const sendVerificationEmail = async (user) => {
    await sendEmailVerification(user);
    toast.success(
      "A verification email has been sent to your address. Please verify your email to complete the signup process."
    );
  };
  const handleDashboard = async (e) => {
    e.preventDefault();
    const isValidPwd = PWD_REGEX.test(password);
    const isValidEmail = EMAIL_REGEX.test(email);

    if (!isValidPwd || !isValidEmail) {
      toast.error("Fill in your information to sign up");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendVerificationEmail(user);
      navigate("/confirm-email", { state: { email } });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during signup. Please try again later.");
    }
  };

  return (
    <Flex align="center" flexDirection="column">
      <Toaster position="top-center" reverseOrder={false} />
      <Box marginTop={{ base: "5%", md: "2%" }}>
        <Image src={logo} />
      </Box>
      <Text
        marginTop="1%"
        fontSize={{ base: "24px", md: "52" }}
        fontWeight={{ base: "500", md: "300" }}
      >
        Create your account online
      </Text>
      <Text
        fontSize={{ base: "14px", md: "18px" }}
        marginTop="1%"
        fontWeight={{ base: "300", md: "600" }}
      >
        Open an account on our online banking platform
      </Text>
      <Box
        boxShadow="1px 2px 4px 0px rgba(0, 0, 0, 0.2)"
        padding="1% 2%"
        marginTop="2%"
        borderRadius="30px"
        width={{ base: "95%", md: "38%" }}
      >
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Email
          </Text>
          <Input
            placeholder="youremail@example.com"
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type="example@youremail.com"
            value={email}
            onChange={handleEmailChange}
            id="email"
            ref={userRef}
            required
            aria-invalid={validEmail ? "false" : "true"}
          />
        </Box>
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Password
          </Text>
          <Input
            padding={{ base: "7%", md: "5%" }}
            borderRadius="15px"
            border="3px solid #528400"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            id="password"
            onChange={handlePasswordChange}
            value={password}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <Box width="3.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={togglePasswordVisibility}
              backgroundColor="white"
              _hover={{
                bg: "wihte",
              }}
            ></Button>
          </Box>
        </Box>
        <Flex
          justifyContent="center"
          marginTop="8%"
          marginBottom="3%"
          alignItems="center"
        >
          <Button
            backgroundColor="#528400"
            color="white"
            height="50px"
            borderRadius="25px"
            width="80%"
            onClick={handleDashboard}
          >
            Sign up
          </Button>
        </Flex>
      </Box>
      <Box marginTop="1%" textAlign="center">
        <Text fontSize="14px" marginTop="2%">
          Have an Online Banking account?
          <Link to="/login" className="link">
            {" "}
            Login.
          </Link>
        </Text>
      </Box>

      <Text
        textAlign={{ base: "center", md: "left" }}
        marginTop={{ base: "7%", md: "1%" }}
        width={{ base: "85%", md: "100%" }}
        fontSize="13px"
      >
        Call <Link className="link">1-800-REGIONS (1-800-734-4667)</Link> or
        visit <Link className="link">Regions Help & Suppor</Link>t.
      </Text>
    </Flex>
  );
};

export default Signup;
