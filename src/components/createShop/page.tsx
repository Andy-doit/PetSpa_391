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
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const [shopData, setShopData] = useState<AccountInput>({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: '',
        phone: ''
    });
    const resetForm = () => {
        setShopData({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: '',
            phone: ''
        });
        setValidationErrors([]);
    };
    const validateInput = () => {
        const errors = [];

        if (!shopData.firstName || shopData.firstName.length > 20) {
            errors.push('Tên không được để trống và không quá 20 ký tự');
        }
        if (!shopData.lastName || shopData.lastName.length > 20) {
            errors.push('Họ không được để trống và không quá 20 ký tự');
        }
        if (!shopData.email || !/\S+@\S+\.\S+/.test(shopData.email)) {
            errors.push('Email không hợp lệ');
        }
        if (!shopData.username || shopData.username.length > 20) {
            errors.push('Tên người dùng không được để trống và không quá 20 ký tự');
        }
        if (!shopData.password || shopData.password.length < 6) {
            errors.push('Mật khẩu phải có ít nhất 6 ký tự');
        }
        if (!shopData.phone || !/^\d{10}$/.test(shopData.phone)) {
            errors.push('Số điện thoại phải đủ 10 số');
        }

        return errors;
    };

    const dispatch = useAppDispatch();

    const handleInputChange = (fieldName: string, newValue: string) => {
        setShopData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };

    const handleCreate = async () => {
        const errors = validateInput();
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }

        try {
            setIsLoading(true);
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
            resetForm();
        }
    };
    const handleClose = () => {
        resetForm();
        onClose();
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

            <Modal size='xl' isOpen={isOpen} onClose={handleClose} placement="top-center">
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
                                    onChange={(e) => handleInputChange('firstName', e.target.value)}  // Corrected to 'firstname'
                                    label="Tên"
                                    value={shopData.firstName}
                                    isInvalid={!!validationErrors.find(err => err.includes('Tên'))}
                                    color={validationErrors.find(err => err.includes('Tên')) ? "danger" : "default"}
                                    errorMessage={validationErrors.find(err => err.includes('Tên'))}
                                    className="w-full"
                                />


                                <Input
                                    type="text"
                                    size='sm'
                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                    label="Họ"
                                    value={shopData.lastName}
                                    isInvalid={!!validationErrors.find(err => err.includes('Họ'))}
                                    color={validationErrors.find(err => err.includes('Họ')) ? "danger" : "default"}
                                    errorMessage={validationErrors.find(err => err.includes('Họ'))}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex w-full space-x-4">
                                <Input
                                    size='sm'
                                    type="email"
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    label="Email"
                                    value={shopData.email}
                                    isInvalid={!!validationErrors.find(err => err.includes('Email'))}
                                    color={validationErrors.find(err => err.includes('Email')) ? "danger" : "default"}
                                    errorMessage={validationErrors.find(err => err.includes('Email'))}
                                    className="w-full"
                                />
                                <Input
                                    type="text"
                                    size='sm'
                                    onChange={(e) => handleInputChange('username', e.target.value)}
                                    label="Tên người dùng"
                                    value={shopData.username}
                                    isInvalid={!!validationErrors.find(err => err.includes('Tên'))}
                                    color={validationErrors.find(err => err.includes('Người')) ? "danger" : "default"}
                                    errorMessage={validationErrors.find(err => err.includes('Tên Người'))}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex w-full space-x-4">
                                <Input
                                    size='sm'
                                    type="password"
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                    label="Mật khẩu"
                                    value={shopData.password}
                                    isInvalid={!!validationErrors.find(err => err.includes('Mật'))}
                                    color={validationErrors.find(err => err.includes('Mật')) ? "danger" : "default"}
                                    errorMessage={validationErrors.find(err => err.includes('Mật'))}
                                    className="w-full"
                                />
                                <Input
                                    size='sm'
                                    type="text"
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    label="Số điện thoại"
                                    value={shopData.phone}
                                    isInvalid={!!validationErrors.find(err => err.includes('Số'))}
                                    color={validationErrors.find(err => err.includes('Số')) ? "danger" : "default"}
                                    errorMessage={validationErrors.find(err => err.includes('Số'))}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="mt-4 flex w-full justify-end space-x-3">
                            <Button
                                className="w-full"
                                onPress={handleClose}
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
