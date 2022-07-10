import { HStack } from "@chakra-ui/react";
import AnswerTile from "./tile";

const AnswerBoard: React.FC<{log: Log}> = ({ log }) => {

    return (
        <HStack>
            <AnswerTile chord={log[0].chord} bg={log[0].color} />
            <AnswerTile chord={log[1].chord} bg={log[1].color} />
            <AnswerTile chord={log[2].chord} bg={log[2].color} />
            <AnswerTile chord={log[3].chord} bg={log[3].color} />
            <AnswerTile chord={log[4].chord} bg={log[4].color} />
            <AnswerTile chord={log[5].chord} bg={log[5].color} />
            <AnswerTile chord={log[6].chord} bg={log[6].color} />
            <AnswerTile chord={log[7].chord} bg={log[7].color} />
        </HStack>
    );

}

export default AnswerBoard;