import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { MINT_GEM_TOKEN_ADDRESS } from "../caverConfig";
import { useAccount, useCaver } from "../hooks";

interface MintingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MintingModal = ({ isOpen, onClose }: MintingModalProps) => {
  const { account } = useAccount();
  const { caver, mintGemTokenContract } = useCaver();

  const handleClickMint = async () => {
    if (!account || !caver || !mintGemTokenContract) return;

    //
    // const response = await mintGemTokenContract.methods.mintGemToken().send({
    //   from: account,
    //   value: caver.utils.convertToPeb(1, "KLAY"),
    //   gas: 3000000,
    // });

    const response = await caver.klay.sendTransaction({
      type: "SMART_CONTRACT_EXECUTION",
      from: account,
      to: MINT_GEM_TOKEN_ADDRESS,
      value: caver.utils.convertToPeb(1, "KLAY"),
      gas: "3000000",
      data: mintGemTokenContract.methods.mintGemToken().encodeABI(),
    });

    console.log(response);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Minting</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Do you want to minting?</Text>
          <Text>(1 Klay is consumed.)</Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" colorScheme="pink" onClick={handleClickMint}>
            Minting
          </Button>
          <Button ml={2} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MintingModal;
