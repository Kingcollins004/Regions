import React from 'react'
import {
    Box,
    Button,
    Flex,
    Image,
    Text,
    Input,
  } from "@chakra-ui/react";
import logo from "../Assets/SVG/regionsLogo.svg";


const Dashboard = () => {
  return (
    <Box>
    <Flex>
        <Box>
            <Image src={logo} alt="Regions Logo" />
        </Box>
        <Flex>
            <Text>Overview</Text>
            <Text>Accounts</Text>
            <Text>Transactions</Text>
            <Text>Card</Text>
        </Flex>
        <Box>
            <Button>Sign out</Button>
        </Box>
    </Flex>

      <Box>
        <Flex>
            <Box>
                <Text>Total Balance</Text>
                <Text>$42,456:00</Text>
                <Text>$325.32 today, Oct 31st</Text>
            </Box>
            <Flex>
            <Box>
                <Text>View Analytics</Text>
                <Button>Send Money</Button>
                <Button>Add Money</Button>
            </Box>
            </Flex>
        </Flex>
      </Box>
      <Box>
        <Text>Overview <Text>Last 30 days</Text></Text>
        <Flex>
            <Box>
                <Image />
                <Text>Domestic account</Text>
                <Text>$32,674.01</Text>
            </Box>
            <Box>
                <Image />
                <Text>Dormicillary account</Text>
                <Text>$15,674.01</Text>
            </Box>
            <Box>
                <Image />
                <Text>Savings Accounts</Text>
                <Text>$32,674.01</Text>
            </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Dashboard
