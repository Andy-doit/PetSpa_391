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
import { PetInfor } from '@/models/userModels';
import { fetchPetInfor } from '@/lib/redux/slice/userSlice';

export default function PetDetail({ params }: { params: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [pet, setPet] = useState<PetInfor | any>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const petDetail = async () => {
            const response = await dispatch(fetchPetInfor({ slug: params }));
            if (response.payload) {
                setPet(response.payload);
            }
        };
        petDetail();
    }, [dispatch, params]);
    console.log(pet)
    return (
        <div>
            <Tooltip content="Xem chi tiết">
                <Button className='rounded-full' variant="bordered" isIconOnly onPress={onOpen}>
                    <FaEye size={20} color="warning" />
                </Button>
            </Tooltip>

            <Modal size='lg' isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    <ModalHeader
                        className='text-3xl flex justify-center font-bold uppercase text-white'
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/b4/38/8d/b4388d3b0601a64cad25d2fe73b2224b.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",


                        }}
                    >Chi Tiết thú cưng</ModalHeader>
                    <ModalBody
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/32/9e/2f/329e2f6a54fdb1f53f4126991fcc6143.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",


                        }}
                    >
                        <div className="flex justify-center">
                            <div className="flex">
                                <div>
                                    <p className="text-xl font-light">Loại thú cưng</p>
                                    <p className="text-xl font-light">Tên thú cưng</p>
                                    <p className="text-xl font-light">Tuổi</p>
                                    <p className="text-xl font-light">Cân nặng</p>
                                    <p className="text-xl font-light">Giới tính </p>
                                    <p className="text-xl font-light">Mô tả</p>
                                    <p className="text-xl font-light">Ghi chú</p>
                                </div>
                                <div className="ml-20">
                                    {pet ? (
                                        <>
                                            <p className="text-xl font-bold">{pet.petType || "Không có gì"}</p>
                                            <p className="text-xl font-bold">{pet.petName || "Không có gì"}</p>
                                            <p className="text-xl font-bold">{pet.petAge || "Không có gì"}</p>
                                            <p className="text-xl font-bold">{pet.petWeight || "Không có gì"}</p>
                                            <p className="text-xl font-bold">{pet.petGender || "Không có gì"}</p>
                                            <p className="text-xl font-bold">{pet.petDescription || "Không có gì"}</p>
                                            <p className="text-xl font-bold">{pet.petNote || "Không có gì"}</p>
                                        </>
                                    ) : (
                                        <p className="text-xl font-medium">Không có gì</p>
                                    )}
                                </div>
                            </div>

                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>
    );
};


