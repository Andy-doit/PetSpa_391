import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, TimeInputValue, useDisclosure } from '@nextui-org/react';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/lib/redux/store';
import { createShopInfor } from '@/lib/redux/slice/shopSlice';
import { ShopInput } from '@/models/shopModel';
import { FaPlus } from 'react-icons/fa';
import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";

export default function CreateShop({ userId }: { userId: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [shopData, setShopData] = useState<ShopInput>({
        id: '',
        shopName: '',
        shopAddress: '',
        shopPhone: '',
        area: '',
        shopDescription: '',
        openTime: '',
        closeTime: '',
        isAvailable: true,
        shopEmail: '',
        shopTitle: '',
    });

    useEffect(() => {
        if (userId) {
            setShopData(prevData => ({
                ...prevData,
                userId: userId,
            }));
        }
    }, [userId]);
    console.log(shopData)
    const dispatch = useAppDispatch();

    const handleInputChange = (fieldName: string, newValue: string) => {
        setShopData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };
    const handleOpenTimeChange = (time: TimeInputValue) => {
        const formattedTime = `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`;
        setShopData(prevData => ({
            ...prevData,
            openTime: formattedTime,
        }));
    };

    const handleCloseTimeChange = (time: TimeInputValue) => {
        const formattedTime = `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`;
        setShopData(prevData => ({
            ...prevData,
            closeTime: formattedTime,
        }));
    };
    const handleCreate = async () => {
        setIsLoading(true);
        try {
            if (userId) {
                console.log('Sending shopData:', shopData);
                await dispatch(createShopInfor({ shopData })).unwrap();
                toast.success("Tạo shop thành công!", {
                    onClose: onClose,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating shop:', error);
            toast.error("Đã xảy ra lỗi khi tạo shop. Vui lòng thử lại sau!");
        }
    };

    return (
        <div>
            <Button
                startContent={<FaPlus className='w-5' />}
                onPress={onOpen}
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
                Tạo mới shop
            </Button>

            <Modal size='xl' isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent>
                    <ModalHeader className='text-3xl text-orange-600'>Tạo mới thông tin Shop</ModalHeader>
                    <ModalBody>
                        <div className="mt-2 flex">
                            <div>
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <Input
                                            type="text"
                                            onChange={(e) => handleInputChange('shopName', e.target.value)}
                                            label="Tên shop"
                                            className="w-[250px]"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Input
                                            type="text"
                                            onChange={(e) => handleInputChange('area', e.target.value)}
                                            label="Khu vực"
                                            className="w-[250px]"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <Input
                                            type="email"
                                            onChange={(e) => handleInputChange('shopEmail', e.target.value)}
                                            label="Email"
                                            className="w-[250px]"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Input
                                            type="text"
                                            onChange={(e) => handleInputChange('shopPhone', e.target.value)}
                                            label="Số điện thoại"
                                            className="w-[250px]"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <TimeInput
                                            label="Giờ mở cửa"
                                            onChange={handleOpenTimeChange}
                                            hourCycle={24}
                                            className="w-[250px]"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <TimeInput
                                            label="Giờ đóng cửa"
                                            onChange={handleCloseTimeChange}
                                            hourCycle={24}
                                            className="w-[250px]"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        onChange={(e) => handleInputChange('shopTitle', e.target.value)}
                                        label="Tiêu đề"
                                        className="w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        onChange={(e) => handleInputChange('shopAddress', e.target.value)}
                                        label="Địa chỉ"
                                        className="w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        onChange={(e) => handleInputChange('shopDescription', e.target.value)}
                                        label="Mô tả"
                                        className="w-full"
                                    />
                                </div>

                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>Đóng</Button>
                        <Button color="primary" variant="flat" onPress={handleCreate} disabled={isLoading}>
                            {isLoading ? <ClipLoader color="white" size={20} /> : "Tạo mới"}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>
    );
}
