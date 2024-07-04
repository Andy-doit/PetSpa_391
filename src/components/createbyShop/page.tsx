import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner, Textarea, TimeInputValue, useDisclosure } from '@nextui-org/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/lib/redux/store';
import { createShopInfor } from '@/lib/redux/slice/shopSlice';
import { ShopInput } from '@/models/shopModel';
import { FaPlus } from 'react-icons/fa';
import { TimeInput } from "@nextui-org/react";

export default function CreateShop({ userId, onCreate }: { userId: string, onCreate: () => void }) {
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
                await dispatch(createShopInfor({ shopData })).unwrap();
                toast.success("Tạo shop thành công!", {
                    onClose: () => {
                        onClose();
                        onCreate();
                    },
                    autoClose: 1500,
                });
            }
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
                Đăng ký thông tin Shop
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
                    >Đăng ký thông tin Shop
                    </ModalHeader>
                    <ModalBody
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/32/9e/2f/329e2f6a54fdb1f53f4126991fcc6143.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",
                        }}
                    >
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
                                    <Textarea
                                        type="text"
                                        onChange={(e) => handleInputChange('shopDescription', e.target.value)}
                                        label="Mô tả"
                                        className="w-full"
                                    />
                                </div>
                                <div className='flex justify-around'>
                                    <Button className=' w-[200px]' onPress={onClose}>Đóng</Button>
                                    <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-[200px]" onPress={handleCreate} disabled={isLoading}>
                                        {isLoading ? <Spinner color="default" /> : "Tạo mới"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>
    );
}
