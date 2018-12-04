import Link from 'next/link';
import Router from "next/router";
import nProgress from 'nprogress';
import Navbar__section from './style/s__navbar'

Router.onRouteChangeStart = () =>{
    nProgress.start()
}
Router.onRouteChangeComplete = ()=>{
    nProgress.done()
}
Router.onRouteChangeError = ()=>{
    nProgress.done()
}


const Navbar = () => (
    <Navbar__section>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>Sell</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>Hot Item</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>Order</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>Sign Up</a>
                </Link>
            </li>
        </ul>
    </Navbar__section>
)

export default Navbar;