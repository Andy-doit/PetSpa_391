import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Badge, Card, CardHeader, Divider, CardBody, CardFooter } from "@nextui-org/react";

export default function GuestHeader() {
    return (

        <Navbar className="bg-transparent absolute fixed top-0 z-50 ">
            <NavbarContent className="hidden sm:flex gap-4 " justify="start">
                <NavbarItem>
                    <Link className="font-mono hover:text-orange-600" color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className="font-mono hover:text-orange-600" href="#" color="foreground">
                        How it Works
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="font-mono hover:text-orange-600" color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarBrand className="sm:flex justify-center text-center">
                <div>
                    <p className="font-bold text-3xl text-inherit">Pet Place</p>
                    <p className="font-mono font-light text-gray-400">Best Pet Care Service</p>
                </div>
            </NavbarBrand>
            <NavbarContent justify="end" >
                <NavbarItem className="hidden lg:flex">
                    <Link className="font-mono hover:text-orange-600" href="#" color="foreground">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="font-mono hover:text-orange-600" href="#" color="foreground">Sign up</Link>
                </NavbarItem>

            </NavbarContent>
        </Navbar>


    );
}
