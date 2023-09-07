import Nav from "./Nav";


const Layout = (props) => {
    return (<>
        <Nav />
        {props.children}
    </>)
}