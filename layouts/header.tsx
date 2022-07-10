//import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Center, Icon, IconButton } from "@chakra-ui/react";
import { MdHistory } from "react-icons/md";

const Header: React.FC = () => {

    const router = useRouter();
    
    const navigateAchievementPage = () => {
        router.push("/achievements");
    }

    return (
        <Center as="nav" mb="3%" p="1%" borderStyle="sharp" borderBottom="1px" borderColor="#d3d6da">
            <Image src="/logo.png" height={50} width={100} />
            <IconButton aria-label="history" icon={<Icon as={MdHistory} />} onClick={navigateAchievementPage} />
        </Center>
    );

}

export default Header;