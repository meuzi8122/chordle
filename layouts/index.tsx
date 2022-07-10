import Header from "./header";

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <Header />
            {children}
        </>
    )

}

export default Layout;