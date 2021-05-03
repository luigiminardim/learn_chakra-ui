import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Center, Container } from "@chakra-ui/layout";

export default function Home() {
  const { toggleColorMode } = useColorMode();

  return (
    <Container p="4">
      <Center>
        <Button onClick={toggleColorMode}>Mudar modo de cores</Button>
      </Center>
    </Container>
  );
}
