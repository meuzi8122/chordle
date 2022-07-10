import { Center, Text } from "@chakra-ui/react";

const Tile: React.FC<{chord: string, bg: Color}> = ({ chord, bg }) => {
    return (
        <Center p={5} w={20} borderWidth="1px" borderRadius="lg" bg={bg} >
            <Text>{chord}</Text>
        </Center>   
    )
}

export default Tile;