import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useAccount } from "../hooks";

const Home: NextPage = () => {
  const { account } = useAccount();
  useEffect(() => {
    console.log(account);
  }, [account]);
  return <Box>{account}</Box>;
};

export default Home;
