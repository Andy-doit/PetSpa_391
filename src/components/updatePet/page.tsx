'use client'
import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    Checkbox,
    Image,
    Input,
    Select,
    SelectItem,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
    Textarea,
    Tooltip,
} from '@nextui-org/react';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/lib/redux/store';
import { createPetInput } from '@/models/userModels';
import { createPet, updatePet } from '@/lib/redux/slice/userSlice';
import { FaPlus } from 'react-icons/fa';
import getAccessAndRefreshCookie from '@/utilities/authUtils/getCookieForValidation';
import { MdChangeCircle } from 'react-icons/md';

export default function UpdatePet({ params }: { params: string }) {
    const [userId, setUserId] = useState<string>('');
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
    }, [userId]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (userId) {
            setPetData(prevData => ({
                ...prevData,
                userId: userId,
            }));
        }
    }, [userId]);
    const [petData, setPetData] = useState<createPetInput>({
        userId: userId,
        petName: '',
        petType: '',
        petAge: 0,
        petGender: '',
        petWeight: 0,
        petDescription: '',
        petPhoto: '',
        petNote: '',

    });
    const dispatch = useAppDispatch();

    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setPetData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };
    const handleCreate = async () => {
        try {
            if (userId) {
                await dispatch(updatePet({ petData })).unwrap();
                toast.success("Cập nhật thú cưng thành công!", {
                    onClose: onClose,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating service:', error);
            toast.error("Đã xảy ra lỗi khi tạo thú cưng. Vui lòng thử lại sau!");
        }
    };

    return (
        <div>
            <Tooltip content="Xem chi tiết">
                <Button color="warning" variant="faded" isIconOnly onPress={onOpen}>
                    <MdChangeCircle size={20} />
                </Button>
            </Tooltip>

            <Modal size='xl' isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent>
                    <ModalHeader className='text-3xl text-orange-600'>Tạo mới thú cưng</ModalHeader>
                    <ModalBody>
                        <div className="mt-2 flex">
                            <div className="">
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <Input
                                            type="Petname"
                                            onChange={(e) => handleInputChange('petName', e.target.value)}
                                            label="Tên thú cưng"
                                            className="w-[250px]"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Select label="Loại thú cưng" className="w-[250px]"
                                            onChange={(e) => handleInputChange('petType', e.target.value)}
                                        >
                                            <SelectItem key="DOG">Chó</SelectItem>
                                            <SelectItem key="CAT">Mèo</SelectItem>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <Input
                                            onChange={(e) => handleInputChange('petAge', e.target.value)}
                                            type="Petage"
                                            label="Tuổi thú cưng"
                                            className="w-[250px]"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Select label="Giới tính"
                                            onChange={(e) => handleInputChange('petGender', e.target.value)}
                                            className="w-[250px]">
                                            <SelectItem key="Male">Đực</SelectItem>
                                            <SelectItem key="Female">Cái</SelectItem>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-full mr-4">
                                        <Input
                                            onChange={(e) => handleInputChange('petWeight', e.target.value)}
                                            type="Petweight"
                                            label="Cân nặng"
                                            className="w-full"
                                        />

                                    </div>
                                    <div className="w-full ml-4">
                                        <Input
                                            onChange={(e) => handleInputChange('petDescription', e.target.value)}
                                            type="petDescription"
                                            label="Mô tả"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-full">
                                        <Textarea
                                            onChange={(e) => handleInputChange('petNote', e.target.value)}
                                            type="petNote"
                                            label="Ghi chú"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="mt-4 flex w-full justify-end">
                            <Button
                                className=" mr-3 w-full"
                                onPress={onClose}
                            >
                                Huỷ
                            </Button>
                            <Button
                                type="submit"
                                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                                disabled={isLoading}
                                onPress={handleCreate}
                            >
                                {isLoading ? (
                                    <ClipLoader size={20} color="#ffffff" />
                                ) : (
                                    'Tạo mới'
                                )}
                            </Button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>
    );
};


