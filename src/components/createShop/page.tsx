'use client'
import React, { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/lib/redux/store';
import { createShop } from '@/lib/redux/slice/adminSlice';
import { AccountInput } from '@/models/adminModel';
import { FaPlus } from 'react-icons/fa';

export default function AddShop({ shopId, refetchShops }: { shopId: string, refetchShops: () => void }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [shopData, setShopData] = useState<AccountInput>({
        id: '',
        firstname: '',
        lastName: '',
        email: '',
        password: '',
        username: '',
        phone: ''
    });

    const dispatch = useAppDispatch();

    const handleInputChange = (fieldName: string, newValue: string) => {
        setShopData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };

    const handleCreate = async () => {
        setIsLoading(true);
        try {
            await dispatch(createShop({ shopData })).unwrap();
            toast.success("Tạo shop thành công!", {
                onClose: () => {
                    onClose();
                    refetchShops(); // Trigger refetch in the parent component
                },
                autoClose: 1500,
            });
        } catch (error) {
            console.error('Error creating shop:', error);
            toast.error("Đã xảy ra lỗi khi tạo shop. Vui lòng thử lại sau!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Button
                startContent={<FaPlus className='w-5' />}
                onPress={onOpen}
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
                Tạo tài khoản shop
            </Button>

            <Modal size='xl' isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent>
                    <ModalHeader
                        className='text-3xl flex justify-center font-bold uppercase text-white'
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/b4/38/8d/b4388d3b0601a64cad25d2fe73b2224b.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",
                        }}
                    >Tạo tài khoản Shop
                    </ModalHeader>
                    <ModalBody>
                        <div className="mt-2 flex flex-col space-y-4">
                            <div className="flex w-full space-x-4">
                                <Input
                                    size='sm'
                                    type="text"
                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                    label="Tên"
                                    className="w-full"
                                />
                                <Input
                                    type="text"
                                    size='sm'
                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                    label="Họ"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex w-full space-x-4">
                                <Input
                                    size='sm'
                                    type="email"
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    label="Email"
                                    className="w-full"
                                />
                                <Input
                                    type="text"
                                    size='sm'
                                    onChange={(e) => handleInputChange('username', e.target.value)}
                                    label="Tên người dùng"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex w-full space-x-4">
                                <Input
                                    size='sm'
                                    type="password"
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                    label="Mật khẩu"
                                    className="w-full"
                                />
                                <Input
                                    size='sm'
                                    type="text"
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    label="Số điện thoại"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="mt-4 flex w-full justify-end space-x-3">
                            <Button
                                className="w-full"
                                onPress={onClose}
                            >
                                Huỷ
                            </Button>
                            <Button
                                type="button"
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
}
