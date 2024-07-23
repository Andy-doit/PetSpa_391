'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Badge, Card, CardHeader, Divider, CardBody, CardFooter, Input, Avatar } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
const typeService = [
    { label: "Dịch vụ tắm rửa", value: "gromming" },
    { label: "Dịch vụ mát xa", value: "massage" },
    { label: "Dịch vụ mát xa đặc biệt", value: "special" },
    { label: "Dịch vụ làm đẹp", value: "beauty" },
    { label: "Dịch vụ khách sạn thú cưng", value: "hotel" },
];
const SortPrice = [
    { label: "Từ cao đến thấp", value: "high" },
    { label: "Từ thấp đến cao", value: "low" },

];


export default function SortService() {

    return (
        <>
            <Navbar className="  border-1 rounded-sm ">

                <NavbarContent className="hidden sm:flex gap-4 justify-center " justify="center" >
                    <NavbarItem>


                        <Select
                            size="sm"

                            label="Dịch vụ"
                            className="w-52"
                        >
                            {typeService.map((type, index) => (
                                <SelectItem key={index}>{type.label}</SelectItem>
                            ))}
                        </Select>


                    </NavbarItem>
                    <NavbarItem>


                        <Select
                            size="sm"

                            label="Giá cả"
                            className="w-52"
                        >
                            {SortPrice.map((price, index) => (
                                <SelectItem key={index}>{price.label}</SelectItem>
                            ))}
                        </Select>


                    </NavbarItem>
                    <NavbarItem>
                    </NavbarItem>
                </NavbarContent>

            </Navbar>

        </>


    );
}
