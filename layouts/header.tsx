import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header: React.FC = () => {

    const router = useRouter();

    const navigateAchievementPage = () => {
        router.push("/achievement");
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item" href="https://bulma.io">
                        <Image src="/logo.png" width="112" height="35" />
                    </a>
                </Link>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button onClick={navigateAchievementPage}>履歴</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );

}

export default Header;