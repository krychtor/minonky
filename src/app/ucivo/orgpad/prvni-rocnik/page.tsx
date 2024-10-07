import Navbar from "@/components/Navbar";
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
import {Badge} from "@/components/ui/badge";

export default function OrgPadPrvniRocnik() {
    return (
        <body>
        <Navbar />
        <section className="main mt-20 mx-14">
            <div className="flex justify-between">
                <div className="p-4">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        OrgPad
                    </h1>
                    <h6 className="mt-2 text-sm text-muted-foreground">Položky obsahující tag <Badge variant="secondary">1. ročník</Badge></h6>
                </div>
                <div className="p-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="right-10 my-4" asChild>
                            <Button>
                                <Filter className="mr-2 w-4 h-4"/>
                                Filtrovat
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel className="flex">
                                <PenLine className="mr-2 mt-0.5 w-4 h-4"/>
                                Dle autorů
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuGroup>
                                <Link href="/ucivo/orgpad/padrta">
                                    <DropdownMenuItem className="hover:cursor-pointer">
                                        <span>Mgr. Jan Padrta</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/ucivo/orgpad/roller">
                                    <DropdownMenuItem className="hover:cursor-pointer">
                                        <span>Mgr. Vladimír Roller</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuGroup>
                            <Link href="/ucivo/orgpad/kopecky">
                                <DropdownMenuItem className="hover:cursor-pointer">
                                    <span>Matěj Kopecký</span>
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/ucivo/orgpad/krychtalek">
                                <DropdownMenuItem className="hover:cursor-pointer">
                                    <span>Martin Krychtálek</span>
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/ucivo/orgpad/seidler">
                                <DropdownMenuItem className="hover:cursor-pointer">
                                    <span>Jan Seidler</span>
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator/>
                            <DropdownMenuLabel className="flex">
                                <GraduationCap className="mr-2 mt-0.5 w-4 h-4"/>
                                Dle ročníku
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <Link href="/ucivo/orgpad">
                                <DropdownMenuItem className="hover:cursor-pointer">
                                    <Check className="mr-2 w-4 h-4"/>
                                    <span>1. ročník</span>
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/ucivo/orgpad/druhy-rocnik">
                                <DropdownMenuItem className="hover:cursor-pointer">
                                    <span>2. ročník</span>
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator/>
                            <Link href="/ucivo/orgpad">
                                <Button variant="default" className="w-full" asChild>
                                    <Link href="/ucivo/orgpad">
                                        <X className="mr-2 w-4 h-4"/>
                                        Zrušit filtry
                                    </Link>
                                </Button>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Operační systémy</CardTitle>
                            <CardDescription>
                                Mgr. Vladimír Roller<br/>
                                <div className="mt-2">
                                    <Badge variant="secondary" className="mr-2">1. ročník</Badge>
                                    <Badge variant="secondary">2. ročník</Badge>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div
                                className="p-[75px] rounded-lg bg-[url('https://orgpad.info/o/DAMEg4JFBBmYU0jCOAwP2s/preview?token=DSbe3XN1ZB96N9Vhn7K6wN&t=1726085883')]"></div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" asChild>
                                <Link href="https://orgpad.info/s/3ypKW9Ln50_" target="_blank">
                                    <ExternalLink className="mr-2 w-4 h-4"/>
                                    Otevřít
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Počítačové sítě</CardTitle>
                            <CardDescription>
                                Mgr. Vladimír Roller<br/>
                                <div className="mt-2">
                                    <Badge variant="secondary" className="mr-2">1. ročník</Badge>
                                    <Badge variant="secondary">2. ročník</Badge>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div
                                className="p-[75px] rounded-lg bg-[url('https://orgpad.info/o/Bz5fAdvK1LiIpCZdU0ygaI/preview?token=BmkBDZt1hPUb0OnfWpiyie&t=1727881140')]"></div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" asChild>
                                <Link href="https://orgpad.info/s/p24r_PdphSF" target="_blank">
                                    <ExternalLink className="mr-2 w-4 h-4"/>
                                    Otevřít
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>MS SQL Server</CardTitle>
                            <CardDescription>
                                Mgr. Vladimír Roller<br/>
                                <div className="mt-2">
                                    <Badge variant="secondary" className="mr-2">1. ročník</Badge>
                                    <Badge variant="secondary">2. ročník</Badge>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div
                                className="p-[75px] rounded-lg bg-[url('https://orgpad.info/o/AVMyONSvBAA7wi0e-zTMA9/preview?token=A1k2U1DTxK_I7dQ5dX8vm6&t=1717755062')]"></div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" asChild>
                                <Link href="https://orgpad.info/s/rAG_pw1IwIm" target="_blank">
                                    <ExternalLink className="mr-2 w-4 h-4"/>
                                    Otevřít
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Kybernetická bezpečnost</CardTitle>
                            <CardDescription>
                                Mgr. Vladimír Roller<br/>
                                <div className="mt-2">
                                    <Badge variant="secondary" className="mr-2">1. ročník</Badge>
                                    <Badge variant="secondary">2. ročník</Badge>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div
                                className="p-[75px] rounded-lg bg-[url('https://orgpad.info/o/AADtxVDJlImqfeeaDXcvFM/preview?token=CebAs43jpDwZGBhMjNQBLL&t=1726651714')]"></div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" asChild>
                                <Link href="https://orgpad.info/s/T0DEaBHDtcp" target="_blank">
                                    <ExternalLink className="mr-2 w-4 h-4"/>
                                    Otevřít
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Hardware</CardTitle>
                            <CardDescription>
                                Mgr. Vladimír Roller<br/>
                                <div className="mt-2">
                                    <Badge variant="secondary" className="mr-2">1. ročník</Badge>
                                    <Badge variant="secondary">2. ročník</Badge>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div
                                className="p-[75px] rounded-lg bg-[url('https://orgpad.info/o/ADlMfjVrxJ6bxm9hqWu7w8/preview?token=Cbzuj3n5ZNP6ym5OdMtcC8&t=1727086040')]"></div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" asChild>
                                <Link href="https://orgpad.info/s/rawDJt5Lemc" target="_blank">
                                    <ExternalLink className="mr-2 w-4 h-4"/>
                                    Otevřít
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
        </body>
    );
}
