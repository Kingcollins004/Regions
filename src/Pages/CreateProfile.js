import { Box, Flex, Text, Image, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../Assets/SVG/regionsLogo.svg";
import profileImg from "../Assets/SVG/profileImg.svg";
import { useNavigate, Link } from "react-router-dom";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase";
import toast, { Toaster } from "react-hot-toast";
const CreateProfile = () => {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  

  const handleUpload = (e) => {
    if (e.target.files.length > 0) {
      const selectedImage = URL.createObjectURL(e.target.files[0]);
      setImage(selectedImage);
    }
  };

  const generateRandomAmount = () => {
    const minAmount = 300000.00; // $1 million
    const maxAmount = 5000000.00; // $10 million
    const amount =
      Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
    return amount;
  };

  const amount = generateRandomAmount();

  const generateEuroAmount = () => {
    const minAmount = 3000.00; // $1 million
    const maxAmount = 15000.00; // $10 million
    const euro =
      Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
    return euro;
  };

  const euro = generateEuroAmount();

  const generateSavingAmount = () => {
    const minAmount = 6300.00; // $1 million
    const maxAmount = 20000.00; // $10 million
    const savings =
      Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
    return savings;
  };

  const savings = generateSavingAmount();

  
  const db = getFirestore()

  const handleDashboard = async (e) => {
    e.preventDefault();
  
    const user = auth.currentUser;
    const uid = user.uid;
  
    try {
      await setDoc(doc(db, "users", uid), {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phoneNumber: phoneNumber,
        state: state,
        country: country,
        imageUrl: image,
        amount: amount,
        id: uid,
        euro: euro,
        savings: savings
      });
  
      console.log(firstName);
      toast.success("Profile Successlly created. return to login page");
      navigate("/login");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Sorry an error occured")
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
        Complete your profile information
      </Text>
      <Box marginTop="3%">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {image ? (
            <Box>
              <Image
                borderRadius="10px"
                width="120px"
                height="120px"
                src={image}
                alt="Selected"
              />
              <label className="forTap" htmlFor="file">
                TAP TO CHANGE
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: "none" }}
              />
            </Box>
          ) : (
            <div>
              <Image src={profileImg} alt="Camera" />
              <label className="forTap" htmlFor="file">
                TAP TO CHANGE
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: "none" }}
              />
            </div>
          )}
        </Flex>
      </Box>
      <Box
        boxShadow="1px 2px 4px 0px rgba(0, 0, 0, 0.2)"
        padding="1% 2%"
        marginTop="2%"
        borderRadius="30px"
        width={{ base: "95%", md: "38%" }}
      >
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            First Name{" "}
            <span style={{ fontWeight: "300", fontSize: "14px" }}>
              (required)
            </span>
          </Text>
          <Input
            placeholder="Martha"
            padding={{base: "7%", md:"5%"}}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Box>
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Last Name{" "}
            <span style={{ fontWeight: "300", fontSize: "14px" }}>
              (required)
            </span>
          </Text>
          <Input
            placeholder="Snow"
            padding={{base: "7%", md:"5%"}}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Box>
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Address{" "}
            <span style={{ fontWeight: "300", fontSize: "14px" }}>
              (required)
            </span>
          </Text>
          <Input
            padding={{base: "7%", md:"5%"}}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={address}
            onChange={handleAddressChange}
          />
        </Box>
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Phone Number{" "}
            <span style={{ fontWeight: "300", fontSize: "14px" }}>
              (required)
            </span>
          </Text>
          <Input
            padding={{base: "7%", md:"5%"}}
            borderRadius="15px"
            border="3px solid #528400"
            type="number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </Box>
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            State{" "}
            <span style={{ fontWeight: "300", fontSize: "14px" }}>
              (required)
            </span>
          </Text>
          <Input
            padding={{base: "7%", md:"5%"}}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={state}
            onChange={handleStateChange}
          />
        </Box>
        <Box>
          <Text marginTop="5%" marginBottom="1%" fontWeight="600">
            Country{" "}
            <span style={{ fontWeight: "300", fontSize: "14px" }}>
              (required)
            </span>
          </Text>
          <Input
            padding={{base: "7%", md:"5%"}}
            borderRadius="15px"
            border="3px solid #528400"
            type="text"
            value={country}
            onChange={handleCountryChange}
          />
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
            Complete Profile
          </Button>
        </Flex>
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

export default CreateProfile;
