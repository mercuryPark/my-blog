"use client";

// * basic
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// * install libraries
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// * components
import LoginFormDialog from "../dialog/LoginForm";

// * etc
import { PAGE_PATHNAME } from "@/app/(protected)/_utils/constant";

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='flex justify-between items-center'>
            <NavigationMenu className='mb-2'>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href='/home' legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href='/home' legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Menu 1
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href='/home' legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Menu 2
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href='/home' legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Menu 3
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className='flex gap-2'>
                <Button
                    onClick={() => {
                        setOpen(true);
                    }}
                    variant='secondary'
                >
                    로그인
                </Button>
                {pathname !== PAGE_PATHNAME.WRITE && (
                    <Button
                        onClick={() => {
                            router.push(PAGE_PATHNAME.WRITE);
                        }}
                        variant='secondary'
                    >
                        글쓰기
                    </Button>
                )}
            </div>

            <LoginFormDialog visible={open} setVisible={setOpen} />
        </div>
    );
};

export default Header;
