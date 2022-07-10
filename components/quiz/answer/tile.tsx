import { Center, Text } from "@chakra-ui/react";

const AnswerTile: React.FC<TileProps> = ({ chord, bg }) => {
    return (
        <Center p={5} w={20} borderWidth="1px" borderRadius="lg" bg={bg} >
            <Text>{chord}</Text>
        </Center>   
    )
}

export default AnswerTile;