import Link from "next/link";

const Nav = () => {
    return (
        <div className="my-nav">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </div>
    )
}


export default Nav;