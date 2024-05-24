'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Badge, Card, CardHeader, Divider, CardBody, CardFooter, Input, Avatar } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { animals } from "./data";
export default function SortService() {

    return (
        <>
            <Navbar className="  border-1 rounded-sm ">

                <NavbarContent className="hidden sm:flex gap-4 justify-center " justify="center" >
                    <NavbarItem>
                        <Select
                            size="sm"
                            items={animals}
                            label="Dịch vụ"

                            className="w-52"
                        >
                            {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
                        </Select>
                    </NavbarItem>
                    <NavbarItem >
                        <Select
                            size="sm"
                            items={animals}
                            label="Giá cả"

                            className="w-52"
                        >
                            {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
                        </Select>
                    </NavbarItem>
                    <NavbarItem >
                        <Select
                            size="sm"
                            items={animals}
                            label="Đánh giá"

                            className="w-52"
                        >
                            {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
                        </Select>
                    </NavbarItem>

                </NavbarContent>

                <NavbarContent justify="end" >
                    <NavbarItem className="w-48">
                        <Input size="md" type="search" placeholder="Search"
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
