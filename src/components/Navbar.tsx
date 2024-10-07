"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from "@/components/ModeToggle";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Image from "next/image";

class NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full h-16 px-14 mt-[-10px] bg-background border-b-2 border-border">
            <div className="container bottom-10 mx-auto p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image src="/assets/logo.png" alt="Miňonky" width={64} height={64}/>
                        </Link>
                        <Link href="/ucivo">
                            <h1 className="ml-4 border-l-2 border-gray-600 pl-4 text-lg font-bold text-foreground">Učivo</h1>
                        </Link>
                    </div>

                <ul className="hidden text-foreground md:flex justify-center items-center">
                    <li className="mr-4">
                        <Link href="/ucivo/orgpad">
                            <Button variant="outline">
                                OrgPad
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Button variant="outline" disabled>
                                Zápisy (brzy)
                            </Button>
                        </Link>
                    </li>
                </ul>
                <div className="md:hidden flex justify-center items-center">
                    <Button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="mr-2 h-4 w-4" />
                        {mobileMenuOpen ? 'Close' : 'Menu'}
                    </Button>
                    {mobileMenuOpen && (
                        <ul className="absolute top-16 right-0 m-3 pl-10 bg-background text-primary w-full border-b-2 border-border">
                            <li className="flex mb-4 justify-center items-center">
                                <Link href="/ucivo/orgpad" className="mr-7">
                                    <Button variant="secondary">
                                        OrgPad
                                    </Button>
                                </Link>
                                <Link href="/ucivo/zapisy">
                                    <Button variant="secondary">
                                        Zápisy
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <ModeToggle/>
            </div>
        </nav>
    );
};

export default Navbar;