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
            if (response) {
                setPet(response);
            }
        };
        petDetail();
    }, [dispatch, params]);
    console.log(pet)
    return (
        <div>
            <Tooltip content="Xem chi tiết">
                <Button color="warning" variant="faded" isIconOnly onPress={onOpen}>
                    <FaEye size={20} />
                </Button>
            </Tooltip>

            <Modal size='md' isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    <ModalHeader className='text-3xl text-orange-600'>Chi Tiết thú cưng</ModalHeader>
                    <ModalBody>
                        <div className="flex justify-between">
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
                                    <p className="text-xl font-medium">{pet.petType}</p>
                                    <p className="text-xl font-medium">{pet.petName}</p>
                                    <p className="text-xl font-medium">{pet.petAge}</p>
                                    <p className="text-xl font-medium">{pet.petWeight}</p>
                                    <p className="text-xl font-medium">{pet.petGender}</p>
                                    <p className="text-xl font-medium">{pet.petDescription}</p>
                                    <p className="text-xl font-medium">{pet.petNote}</p>
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

