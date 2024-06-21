"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { AddUser } from "@/components/createUser/page";
import { TableAccount } from "@/components/tableAccount/page";
import { BiUser } from "react-icons/bi";
import { MdHouse } from "react-icons/md";


export default function ManageAccount() {
    return (
        <div className=" lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Danh sách tài khoản</h3>
            <div className="flex justify-between flex-wrap gap-4 items-center">
                <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
                    <Input
                        classNames={{
                            input: "w-full",
                            mainWrapper: "w-full",
                        }}
                        placeholder="Search users"
                    />

                </div>
                <div className="flex flex-row gap-3.5 flex-wrap">
                    <AddUser />
                </div>
                {/* <div className="max-w-[95rem] mx-auto w-full">
                    <ViewDetailAccount />
                </div> */}
            </div>
            <div className="max-w-[95rem] mx-auto w-full">
                <TableAccount />
            </div>
        </div>
    );
}

