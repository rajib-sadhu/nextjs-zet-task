import Link from "next/link";
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { BsInstagram, BsFacebook, FaWhatsapp } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';

const Footer = () => {
    return (
        <div className="h-[33rem] bg-cover bg-bottom text-white" style={{ backgroundImage: "url(https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUs.085fb7a2.png&w=1920&q=100)" }} >
            <div className="px-40 py-20">
                <div className="pb-3 border-b-2">
                    <img className="w-20" src="https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg" alt="" />
                </div>
                <div className="grid grid-cols-4 mx-auto mt-10">
                    <div>
                        <h3 className="uppercase text-lg font-medium" >Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href='#'>About Us</Link></li>
                            <li><Link href='#'>Partner With Us</Link></li>
                            <li><Link href='#'>Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="uppercase text-lg font-medium" >Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href='#'>Privacy Policy</Link></li>
                            <li><Link href='#'>Terms of Use</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="uppercase text-lg font-medium" >Contact</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href='#'>hi@zetapp.in</Link></li>
                            <li><Link href='#'>+91-7417274072.in</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="uppercase text-lg font-medium" >Social</h3>
                        <ul className="mt-4 flex items-center gap-5">
                            <li><Link href='#'><FaLinkedin className="text-2xl" /></Link></li>
                            <li><Link href='#'><BsInstagram className="text-2xl" /></Link></li>
                            <li><Link href='#'><BsFacebook className="text-2xl" /></Link></li>
                            <li><Link href='#'><FaTelegramPlane className="text-2xl" /></Link></li>
                            <li><Link href='#'><ImWhatsapp className="text-2xl" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;