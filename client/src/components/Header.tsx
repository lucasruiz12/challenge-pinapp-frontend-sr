import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="top-0 left-0 w-full bg-[#001568] py-4 shadow-md z-50">
            <div className="container flex items-center">
                <div className="h-18 w-36">
                    <Link href="/">
                        <img src="/pinapp_logo_header.png" alt="NLG" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
