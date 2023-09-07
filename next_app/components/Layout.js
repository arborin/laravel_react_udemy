import Nav from "./Nav";


const Layout = ({ mainTitle, footer, children }) => {
    return (<>
        <Nav />
        <h1>{mainTitle}</h1>
        <hr />
        {children}
        <hr />
        {footer}
    </>)
}

export default Layout;