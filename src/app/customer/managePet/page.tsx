"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { AddUser } from "@/components/createUser/page";
import { TablePet } from "@/components/tablePet/page";
import { BiUser } from "react-icons/bi";
import { MdHouse } from "react-icons/md";
import CreatePet from "../createPet/page";




export default function ManageAccount() {
    return (
        <div className=" lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
            <h3 className="text-3xl font-semibold text-center mt-8 mb-4">
                Danh sách thú cưng
            </h3>

            <div className="flex justify-between flex-wrap gap-4 items-center">
                <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
                    <Input
                        classNames={{
                            input: "w-full",
                            mainWrapper: "w-full",
                        }}
                        placeholder="Tìm kiếm thú cưng"
                    />

                </div>
                <div className="flex flex-row gap-3.5 flex-wrap">
                    <CreatePet />
                </div>
                {/* <div className="max-w-[95rem] mx-auto w-full">
                    <ViewDetailAccount />
                </div> */}
            </div>
            <div className="max-w-[95rem] mx-auto w-full">
                <TablePet />
            </div>
        </div>
    );
}

