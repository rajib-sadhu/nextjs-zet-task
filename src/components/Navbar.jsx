
'use client';
import Link from "next/link";
// import { useRouter } from "next/navigation";


const Navbar = () => {

    // const router = useRouter();
    // console.log(router.pathname)

    const allLinks = <>
        <li ><Link href="/" className="" >Home</Link></li>
        <li ><Link href="/about" className="" >About Us</Link></li>
        <li><Link href={``} className="" >Partner With Us</Link></li>
        <li><Link href={``} className="" >Blog</Link></li>
        <li className="bg-sky-600 text-white rounded-xl" ><Link href={``} className="">Download ZET</Link></li>
    </>

    return (
        <div className="" >
            <div className="navbar bg-base-100 shadow-md md:px-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {allLinks}
                        </ul>
                    </div>
                    <img className="w-20" src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg" alt="" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        {allLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;