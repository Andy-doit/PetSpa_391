'use client';
import { Button, Chip, Input, Tooltip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import CreatePet from "@/components/createPet/page";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { MdChangeCircle, MdDelete } from "react-icons/md";
import { useAppDispatch } from "@/lib/redux/store";
import { allPetPaginationData, allShopPaginationData } from "@/models/userModels";
import { fetchAllPetPagination, fetchAllShopPagination, fetchShopInfo } from "@/lib/redux/slice/userSlice";
import PetDetail from "@/components/petDetails/page";
import DeletePet from "@/components/deletePet/page";
import UpdatePet from "@/components/updatePet/page";
import Link from "next/link";

export default function ListAllShop({ params }: { params: { slug: string } }) {
    const dispatch = useAppDispatch();
    const [pets, setPets] = useState<allShopPaginationData[]>([]);
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const serviceDetail = async () => {
            const response = await dispatch(fetchShopInfo(params));
            if (response.payload) {
                setPets(response.payload);
            }
        };
        serviceDetail();
    }, [dispatch, params]);

    useEffect(() => {
        const fetchUid = async () => {
            try {
                const { uid } = await getAccessAndRefreshCookie();
                if (uid) {
                    setUserId(uid);
                }
            } catch (error) {
                console.error('Error fetching UID:', error);
            }
        };
        fetchUid();
    }, []);

    return (
        <div className="container py-4 pb-12 flex flex-col gap-6">
            <div>
                <div className="py-2">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-black">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Trang chủ
                                </a>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-black mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-black md:ms-2 dark:text-black">Danh sách tất  cả các shop</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="w-[1200px] mx-auto ">
                {pets.length === 0 ? (
                    <div>Không có shop nào</div>
                ) : (
                    <Table aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn>Tên shop</TableColumn>
                            <TableColumn>Địa chỉ</TableColumn>
                            <TableColumn>Số  điện thoại</TableColumn>
                            <TableColumn>Email</TableColumn>
                            <TableColumn>Tổng số dịch vụ</TableColumn>
                            <TableColumn>Đánh giá</TableColumn>
                            <TableColumn>Hành động</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {pets.map((pet) => (
                                <TableRow key={pet.id}>
                                    <TableCell>{pet.shopName}</TableCell>
                                    <TableCell>{pet.shopAddress}</TableCell>
                                    <TableCell>{pet.shopPhone}</TableCell>
                                    <TableCell>{pet.shopEmail}</TableCell>
                                    <TableCell>{pet.totalServices}</TableCell>
                                    <TableCell>{pet.nomination}</TableCell>

                                    <TableCell>
                                        <div className="flex justify-end">
                                            {/* <Link href={localStorage.getItem('token') ? `/viewprofileShop/${pets?.id}` : '/logIn'}>
                                                <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-[350px]">
                                                    <FaShoppingCart size={20} className="ml-2" />
                                                    Xem chi  tiết
                                                </Button>
                                            </Link> */}
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
