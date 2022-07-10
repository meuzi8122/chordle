import { NextPage, GetStaticProps } from "next";
import { useAchievementMutators } from "../stores/achievement/hooks/mutator";
import { client } from "../libs/cms";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLogs } from "../hooks/log";
import { useQuizTime } from "../hooks/time";
import { useThemeProgression } from "../hooks/progression";
import { ANSWER_LIMIT } from "../constants/quiz";
import { Box, Center, Container, VStack, Text, HStack, PinInput, FormControl, Button } from "@chakra-ui/react";
import AnswerBoard from "../components/quiz/answer/board";
import { Input } from "@chakra-ui/react";
import { Fragment } from "react";
import FormBoard from "../components/quiz/form/board";

const IndexPage: NextPage<IndexPageProps> = ({ progressions }) => {

    const { logs, resetLogs, addLog } = useLogs();

    const { quizTime, resetQuizTime, countUp } = useQuizTime();

    const { themeProgression, updateThemeProgression } = useThemeProgression(progressions);

    const { register, handleSubmit, reset } = useForm<ChordForm>();

    const onSubmit: SubmitHandler<ChordForm> = (data) => {
        addLog(Object.values(data), themeProgression!.chords, quizTime);
        countUp();
        reset();
    }

    const { addAchievement } = useAchievementMutators();

    return (
        <VStack>
            <VStack>
                {Object.values(logs).map((log, index) => 
                    <Fragment key={`answer-board-${index}`}>
                        <AnswerBoard log={log} />
                    </Fragment>
                )}
            </VStack>
            {/* 何かでフォームタグをラップする */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <HStack>
                        <FormBoard 
                            register_1={register("first", {required: "1番目のコードが入力されていません"})} 
                            register_2={register("second")} 
                            register_3={register("third")} 
                            register_4={register("fourth")}  
                        />
                    </HStack>
                    <VStack>
                        <Button type="submit">解答</Button>
                    </VStack>
                </FormControl>
            </form>
        </VStack>
        // {/*className="container">*/}

        //     <>
        //         {/* <ProgressionTile fisrt={answers[1][0]} />
        //         <ProgressionTile fisrt={answers[2][0]}/>
        //         <ProgressionTile fisrt={answers[3][0]}/>
        //         <ProgressionTile fisrt={answers[4][0]}/>
        //         <ProgressionTile fisrt={answers[5][0]}/> */}
        //     </>
        //     <div className="level">
            
        //     </div>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         {/* 3か4までは必須にする? */}
        //         <div className="field is-grouped">
        //             <Input placeholder="1番目のコード" register={register("first",/>
        //             <Input placeholder="2番目のコード" register={register("second", {required: "2番目のコードが入力されていません"})} />
        //             <Input placeholder="3番目のコード" register={register("third", {required: "3番目のコードが入力されていません"})} />
        //             <Input placeholder="4番目のコード" register={register("fourth")} />
        //         </div>
        //         <div className="field is-grouped">
        //             <Input placeholder="5番目のコード" register={register("fifth")} />
        //             <Input placeholder="6番目のコード" register={register("sixth")} />
        //             <Input placeholder="7番目のコード" register={register("seventh")} />
        //             <Input placeholder="8番目のコード" register={register("eighth")} />
        //             <SubmitButton label="回答" disabled={!(themeProgression && quizTime <= ANSWER_LIMIT)} />
        //         </div>
        //     </form>

    )

}

//progressionPattern.progressionなどに変える

export const getStaticProps: GetStaticProps = async () => {

    try {
        const res = await client.get({
            endpoint: "progressions",
            queries: {
                fields: "id,progression,type"
            }
        });
        const progressions = res.contents.map((progression: any) => {
            return {
                id: progression.id,
                chords: progression.progression.split("-"),
                type: progression.type
            }
        })
        return {
            props: {
                progressions: progressions
            }
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                progressions: []
            }
        }
    } 



} 

export default IndexPage;