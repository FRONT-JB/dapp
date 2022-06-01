import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import MintingModal from "../components/MintingModal";
import { useCaver } from "../hooks";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mintGemTokenContract } = useCaver();

  const [remainGemToken, setRemainGemToken] = useState<Number>(0);
  const [gemTokenCount, setGemTokenCount] = useState<string[][] | undefined>(
    undefined
  );

  const handleGemTokenCount = async () => {
    try {
      if (!mintGemTokenContract) return;
      const response = await mintGemTokenContract.methods
        .getGemTokenCount()
        .call();
      setGemTokenCount(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemainGemToken = async () => {
    try {
      if (!mintGemTokenContract) return;
      const response = await mintGemTokenContract.methods.totalSupply().call();
      setRemainGemToken(1000 - parseInt(response, 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRemainGemToken();
    handleGemTokenCount();
  }, [mintGemTokenContract]);

  return (
    <>
      <Flex
        bg="red.100"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <TableContainer mb={4}>
          <Table>
            <Thead>
              <Tr>
                <Th>Rank\Type</Th>
                <Th>1</Th>
                <Th>2</Th>
                <Th>3</Th>
                <Th>4</Th>
              </Tr>
            </Thead>
            <Tbody>
              {gemTokenCount?.map((token, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  {token.map((value, index) => (
                    <Td key={index}>{value}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Text mb={4}>{`Remain Gemz : ${remainGemToken}`}</Text>
        <Button colorScheme="pink" onClick={onOpen}>
          Minting
        </Button>
      </Flex>
      <MintingModal
        isOpen={isOpen}
        onClose={onClose}
        onRemainGemToken={handleRemainGemToken}
        onGemTokenCount={handleGemTokenCount}
      />
    </>
  );
};

export default Home;
