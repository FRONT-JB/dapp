import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import MintingModal from "../components/MintingModal";
import { useCaver } from "../hooks";

const Home: NextPage = () => {
  const [remainGemToken, setRemainGemToken] = useState<Number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mintGemTokenContract } = useCaver();

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
        <Text mb={4}>{`Remain Gemz : ${remainGemToken}`}</Text>
        <Button colorScheme="pink" onClick={onOpen}>
          Minting
        </Button>
      </Flex>
      <MintingModal
        isOpen={isOpen}
        onClose={onClose}
        onRemainGemToken={handleRemainGemToken}
      />
    </>
  );
};

export default Home;
