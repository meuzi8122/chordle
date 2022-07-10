import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Center, Heading } from "@chakra-ui/react";
import { APP_NAME } from "../constants";

const Header: React.FC = () => {

    const router = useRouter();
    /*
    const navigateAchievementPage = () => {
        router.push("/achievement");
    }
    */

    return (
        <Center as="nav" mb="3%" p="1%" borderStyle="sharp" borderBottom="1px" borderColor="#d3d6da">
            <Image src="/logo.png" height={50} width={100} />
        </Center>
    );

}

export default Header;