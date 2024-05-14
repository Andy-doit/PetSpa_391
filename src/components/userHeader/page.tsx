'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Badge, Card, CardHeader, Divider, CardBody, CardFooter, Input, Avatar } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, cn } from "@nextui-org/react";

export default function UserHeader() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0 w-5 h-5";
    return (
        <>
            <Navbar className=" top-0 z-50 border-1 rounded-sm ">

                <NavbarContent className="hidden sm:flex gap-4 justify-center " justify="center" >
                    <NavbarItem>
                        <Link className="font-mono hover:text-orange-600" color="foreground" href="#">
                            Service
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link className="font-mono hover:text-orange-600" href="#" color="foreground">
                            Spa Shop
                        </Link>
                    </NavbarItem>

                </NavbarContent>

                <NavbarContent justify="end" >
                    <NavbarItem className="w-48">
                        <Input size="sm" type="search" placeholder="Search"
                            endContent={
                                <Button size="sm" isIconOnly color="default" variant="light">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>

                                </Button>
                            } />
                    </NavbarItem>


                </NavbarContent>
            </Navbar>

        </>


    );
}
