import { HStack, Input } from "@chakra-ui/react";

const FormBoard: React.FC<{register_1: any, register_2: any, register_3: any, register_4: any}> = ({ register_1, register_2, register_3, register_4 }) => {
    return (
        <HStack>
            <Input {...register_1} />
            <Input {...register_2} />
            <Input {...register_3} />
            <Input {...register_4} />
        </HStack>
    )
}

export default FormBoard;