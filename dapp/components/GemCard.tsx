import { Box, Image, Text } from "@chakra-ui/react";
import { GemTokenMetadata } from "../interfaces";

interface GemCardProps {
  metadataURI: GemTokenMetadata | undefined;
}

const GemCard = ({ metadataURI }: GemCardProps) => {
  return (
    <Box w={200}>
      <Image src={metadataURI?.image} fallbackSrc="loading.png" alt="Gem" />
      <Text>{metadataURI?.name}</Text>
      <Text>{metadataURI?.description}</Text>
    </Box>
  );
};

export default GemCard;
