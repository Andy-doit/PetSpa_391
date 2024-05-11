import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Badge } from "@nextui-org/react";

export default function UserHeader() {
    return (
        <Navbar className="bg-transparent">
            <NavbarContent className="hidden sm:flex gap-4 font-light" justify="start" >
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="#" color="foreground">
                        How it Works
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarBrand className="sm:flex justify-center">
                <div>
                    <p className="font-bold text-3xl text-inherit">Pet Place</p>
                </div>
            </NavbarBrand>
            <NavbarContent justify="end" className="font-light">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" color="foreground">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" color="foreground">Sign up</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button isIconOnly color="default" variant="faded" aria-label="Your Cart" size="md" radius="full">
                        <Badge content="5" size="sm" color="warning">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </Badge>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
