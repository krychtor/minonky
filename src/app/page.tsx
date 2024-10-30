import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";

import "@/styles/orgpad.css";

import {Check, ExternalLink, Filter, GraduationCap, PenLine, X} from "lucide-react";
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import type {Metadata} from "next";
import {Badge} from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Miňonky – Minonky.eu",
    description: "Miňonky – Kakaové, Smetanové, Oříškové, Café Latté",
};

export default function Home() {
    return (
        <body>
        <section className="main">
            <object data="https://orgpad.info/s/JQnOvchAFvK?embed=true"
                    width="400"
                    height="300"
                    type="text/html"
                    className="fixed top-0 left-0 w-full h-full border-none overflow-hidden z-[9999]"
            >
                Error: Embedded data could not be displayed.
            </object>
        </section>
        </body>
    );
}
