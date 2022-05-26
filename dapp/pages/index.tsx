import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useAccount, useCaver } from "../hooks";

const Home: NextPage = () => {
  const { account } = useAccount();
  const { caver, mintGemTokenContract, saleGemTokenContract } = useCaver();
  useEffect(() => {
    console.log(caver);
  }, [caver]);
  useEffect(() => {
    console.log(mintGemTokenContract);
  }, [mintGemTokenContract]);
  useEffect(() => {
    console.log(saleGemTokenContract);
  }, [saleGemTokenContract]);

  return <Box>{account || ""}</Box>;
};

export default Home;
