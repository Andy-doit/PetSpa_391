'use client'
import React, { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
    Tooltip,
} from '@nextui-org/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaEye, FaPlus } from 'react-icons/fa';

import { useAppDispatch } from '@/lib/redux/store';
import { ShopInfor } from '@/models/adminModel';
// import { fetchShopInfor } from '@/lib/redux/slice/adminSlice';

export default function AccountDetail({ params }: { params: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [shop, setShop] = useState<ShopInfor | any>();
    const dispatch = useAppDispatch();
    // useEffect(() => {
    //     const petDetail = async () => {
    //         const response = await dispatch(fetchShopInfor({ slug: params }));
    //         if (response.payload) {
    //             setShop(response.payload);
    //         }
    //     };
    //     petDetail();
    // }, [dispatch, params]);
    return (
        <div>
            <Tooltip content="Xem chi tiết">
                <Button color="warning" variant="faded" isIconOnly onPress={onOpen}>
                    <FaEye size={20} />
                </Button>

            </Tooltip>

            <Modal size='lg' isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    <ModalHeader className='text-3xl text-orange-600'>Chi Tiết Shop</ModalHeader>
                    <ModalBody>
                        <div className="flex justify-between">
                            <div className="flex">
                                <div>
                                    <p className="text-xl font-light">Tên</p>
                                    <p className="text-xl font-light">Họ</p>
                                    <p className="text-xl font-light">Email</p>
                                    <p className="text-xl font-light">Tên người dùng</p>
                                    <p className="text-xl font-light">Số điện thoại</p>
                                    <p className="text-xl font-light">Status</p>

                                </div>
                                <div className="ml-20">
                                    {shop ? (
                                        <>
                                            <p className="text-xl font-medium">{shop.firstName || "Không có gì"}</p>
                                            <p className="text-xl font-medium">{shop.lastName || "Không có gì"}</p>
                                            <p className="text-xl font-medium">{shop.email || "Không có gì"}</p>
                                            <p className="text-xl font-medium">{shop.username || "Không có gì"}</p>
                                            <p className="text-xl font-medium">{shop.phone || "Không có gì"}</p>
                                            <p className="text-xl font-medium">{shop.status ? "Paused" : "Active"}</p>
                                        </>
                                    ) : (
                                        <p className="text-xl font-medium">Không có gì</p>
                                    )}
                                </div>
                            </div>

                        </div>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>
    );
};


