import { NextPage } from "next";
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useAchievements } from "../stores/achievement/hooks";

const AchievementPage: NextPage = () => {

    const achievements = useAchievements();

    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>コード進行</Th>
                        <Th>正否</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.values(achievements).map(achievement => 
                        <Tr>
                            <Td>{achievement.progression}</Td>
                            <Td>{achievement.isCorrect}</Td>
                        </Tr>    
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    )

}

export default AchievementPage;