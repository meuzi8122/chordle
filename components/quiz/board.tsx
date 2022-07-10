import { HStack } from "@chakra-ui/react";
import Tile from "./tile";

const Board: React.FC<{log: Log}> = ({ log }) => {

    return (
        <HStack>
            <Tile chord={log[0].chord} bg={log[0].color} />
            <Tile chord={log[1].chord} bg={log[1].color} />
            <Tile chord={log[2].chord} bg={log[2].color} />
            <Tile chord={log[3].chord} bg={log[3].color} />
            <Tile chord={log[4].chord} bg={log[4].color} />
            <Tile chord={log[5].chord} bg={log[5].color} />
            <Tile chord={log[6].chord} bg={log[6].color} />
            <Tile chord={log[7].chord} bg={log[7].color} />
        </HStack>
    );

}

export default Board;