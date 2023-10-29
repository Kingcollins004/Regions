import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import house from "../Assets/SVG/housing.svg"
import fdic from "../Assets/SVG/member-fdic.svg"
import facebook from "../Assets/SVG/facebook.svg"
import twitter from "../Assets/SVG/twitter.svg"
import instagram from "../Assets/SVG/instagram.svg"
import pintrest from "../Assets/SVG/pinterest.svg"
import linkedin from "../Assets/SVG/linkedin.svg"
import logoF from "../Assets/SVG/logoF.svg"

const Footer = () => {
  return (
    <div>
    <Box backgroundColor="#F5F5F5">
              <Flex paddingX="10%" paddingY="1%">
                <Text>Home / Regions Personal Banking Services</Text>
              </Flex>
            </Box>

            <Box paddingX="10%" marginTop="3%">
              <Box paddingX="5%">
                <Text fontSize="14px">1. Regions CDs are uncertificated time deposit accounts and subject to the terms and conditions of the Regions Deposit Account Agreement and other related disclosures, terms, and conditions. This page is not an offer or contract and does not amend the Deposit Agreement, the terms of which govern and control. Annual Percentage Yields (APYs) are accurate as of 08/14/23. Rates offered for CDs may be changed at any time without notice. The minimum balance required to open the CD and obtain the APY is $500. Early withdrawal of funds may result in substantial penalty.</Text>
              </Box>
            </Box>

            <Flex paddingX="10%" paddingTop="3%" justifyContent="space-between">
            <Flex flex="5">
                <Image src={logoF} />
                <Text color="#222222" marginX="2%">Personal</Text>
                <Text color="#222222" marginX="2%">Small Business</Text>
                <Text color="#222222" marginX="2%">Commercial</Text>
                <Text color="#222222" marginX="2%">Wealth</Text>
                <Text color="#222222" marginX="2%">Resources</Text>
            </Flex>
            <Flex flex="1" justifyContent="space-between">
                <Image width="20px" src={twitter}/>
                <Image width="20px" src={facebook}/>
                <Image width="20px" src={instagram}/>
                <Image width="20px" src={pintrest}/>
                <Image width="20px" src={linkedin}/>
            </Flex>
        </Flex>

        <Flex paddingX="10%" paddingTop="3%" justifyContent="center">  
            <Flex alignItems="center" justifyContent="space-between" width="75%">
                <Text color="#838383" fontSize="14px" fontWeight="600px" _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} marginX="2%">About Regions</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">Investor Relations</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">Economic Report</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">Property for sale</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">Careers</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">The regions community</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">News</Text>
            </Flex>
        </Flex>

        <Flex paddingX="10%" paddingTop="1%" justifyContent="center">           
            <Flex alignItems="center" justifyContent="space-between" width="73%">
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">Privacy and Security</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">Website Term of use</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">Online Tracking and advertising</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">Notice at Collections</Text>
                <Text _hover={{color: "#528400", borderBottom: "1.5px solid #528400", transition: "1s"}} color="#838383" fontSize="14px" fontWeight="600px" marginX="2%">Assessible Banking</Text>
            </Flex>          
        </Flex>

        <Box paddingX="10%" marginTop="5%">
        <Text fontWeight="600" fontSize="14px" marginY="1%" textAlign="center">*Investment, insurance and annuities products</Text>
          <Flex borderRadius="10px" border="1px solid lightgray" justifyContent="space-between" flexDirection="column">
          <Flex>
            <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
              <Text textAlign="center">Are Not FDIC-Insured</Text>
            </Box>
            <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
              <Text textAlign="center">Are Not Bank Guaranteed</Text>
            </Box>
            <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
              <Text textAlign="center">May Lose Value</Text>
            </Box>
            <Box flex="1" padding="1% 2%">
              <Text textAlign="center">Are Not Deposits</Text>
            </Box>
          </Flex>
          <Flex borderTop="1px solid lightgray">
            <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
              <Text textAlign="center">Are Not a Condition of Any Banking Activity</Text>
            </Box>
            <Box flex="1" padding="1% 2%" borderRight="1px solid lightgray">
              <Text textAlign="center">Are Not Insured by Any Federal Government Entity</Text>
            </Box>
          </Flex>
          </Flex>
        </Box>
      <Box marginBottom="5%" textAlign="center" marginTop="5%" paddingX="10%">
        <Text fontSize="14px">2023 Regions Bank. All Rights Reserved.</Text>
        <Text fontSize="14px"> Regions, the Regions logo, and the LifeGreen bike are registered trademarks of Regions Bank. The LifeGreen color is a trademark of Regions Bank.</Text>
        <Flex justifyContent="center" marginTop="1%" alignItems="center">
            <Image marginRight="3%" width="40px" src={house} />
            <Image width="60px" src={fdic} />
        </Flex>
      </Box>
    </div>
  )
}

export default Footer
