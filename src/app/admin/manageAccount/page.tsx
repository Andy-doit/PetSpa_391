"use client";
import { Button, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdHouse } from "react-icons/md";
import AddShop from "@/components/createShop/page";
import { useAppDispatch } from "@/lib/redux/store";
import { allShopPaginationData } from "@/models/adminModel";
import { fetchAllShopPagination } from "@/lib/redux/slice/adminSlice";
import AccountDetail from "@/components/accountDetail/page";
import DeleteShop from "@/components/deleteAccount/page";



export default function ManageAccount() {
    const [shopId, setShopId] = useState<string>('');
    const dispatch = useAppDispatch();
    const [shop, setShop] = useState<allShopPaginationData[]>([]);
    useEffect(() => {
        const allPet = async () => {
            const response = await dispatch(fetchAllShopPagination());
            setShop(response.payload || []);
        }
        allPet();
    }, [dispatch]);





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
                        placeholder="Tìm kiếm shop"
                    />

                </div>
                <div className="flex flex-row gap-3.5 flex-wrap">
                    <AddShop shopId={shopId} />
                </div>

            </div>

            <div className="max-w-[95rem] mx-auto w-full">
                {shop.length === 0 ? (
                    <div>Không có shop nào</div>

                ) : (
                    <Table aria-label="Example static collection table">
                        <TableHeader>

                            <TableColumn>Tên Shop</TableColumn>
                            <TableColumn>Email</TableColumn>
                            <TableColumn>Số điện thoại</TableColumn>
                            <TableColumn>Status</TableColumn>
                            <TableColumn>Hành động</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {shop.map((sp) => (
                                <TableRow key={sp.id}>
                                    <TableCell>{sp.username}</TableCell>
                                    <TableCell>{sp.email}</TableCell>
                                    <TableCell>{sp.phone}</TableCell>
                                    <TableCell>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs text-white ${sp.status ? 'bg-red-500' : 'bg-green-500'
                                                }`}
                                            style={{ opacity: 0.8 }}
                                        >
                                            {sp.status ? 'Paused' : 'Active'}
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex items-center gap-4 ">
                                            <div>
                                                <AccountDetail params={sp.id} />
                                            </div>

                                            <div>
                                                <DeleteShop params={sp.id} />
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}


                        </TableBody>
                    </Table>

                )}

            </div>

        </div>
    );
}

