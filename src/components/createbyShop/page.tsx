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
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
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
    const resetForm = () => {
        setShopData({
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
        setValidationErrors([]);
    };
    const validateInput = () => {
        const errors = [];

        if (!shopData.shopName || shopData.shopName.length > 20) {
            errors.push('Tên shop không được để trống và không quá 20 ký tự');
        }
        if (!shopData.shopAddress || shopData.shopAddress.length > 50) {
            errors.push('Địa chỉ không được để trống và không quá 50 ký tự');
        }
        if (!shopData.shopEmail || !/\S+@\S+\.\S+/.test(shopData.shopEmail)) {
            errors.push('Email không hợp lệ');
        }
        if (!shopData.shopPhone || !/^\d{10}$/.test(shopData.shopPhone)) {
            errors.push('Số điện thoại không hợp lệ, phải có 10 số');
        }
        if (!shopData.area || shopData.area.length > 30) {
            errors.push('Khu vực không được để trống và không quá 30 ký tự');
        }
        if (!shopData.shopTitle || shopData.shopTitle.length > 100) {
            errors.push('Tiêu đề không được để trống và không quá 100 ký tự');
        }

        return errors;
    };

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
        const errors = validateInput();
        if (errors.length > 0) {
            setValidationErrors(errors);
            return;
        }

        try {
            setIsLoading(true);
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
                Đăng ký thông tin Shop
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
                                            value={shopData.shopName}
                                            isInvalid={!!validationErrors.find(err => err.includes('Tên'))}
                                            color={validationErrors.find(err => err.includes('Tên')) ? "danger" : "default"}
                                            errorMessage={validationErrors.find(err => err.includes('Tên'))}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Input
                                            type="text"
                                            onChange={(e) => handleInputChange('area', e.target.value)}
                                            label="Khu vực"
                                            value={shopData.area}
                                            isInvalid={!!validationErrors.find(err => err.includes('Khu'))}
                                            color={validationErrors.find(err => err.includes('Khu')) ? "danger" : "default"}
                                            errorMessage={validationErrors.find(err => err.includes('Khu vực'))}
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
                                            value={shopData.shopEmail}
                                            isInvalid={!!validationErrors.find(err => err.includes('Email'))}
                                            color={validationErrors.find(err => err.includes('Email')) ? "danger" : "default"}
                                            errorMessage={validationErrors.find(err => err.includes('Email'))}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Input
                                            type="text"
                                            onChange={(e) => handleInputChange('shopPhone', e.target.value)}
                                            label="Số điện thoại"
                                            className="w-[250px]"
                                            value={shopData.shopPhone}
                                            isInvalid={!!validationErrors.find(err => err.includes('Số'))}
                                            color={validationErrors.find(err => err.includes('Số')) ? "danger" : "default"}
                                            errorMessage={validationErrors.find(err => err.includes('Số'))}
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
                                        value={shopData.shopTitle}
                                        isInvalid={!!validationErrors.find(err => err.includes('Tiêu đề'))}
                                        color={validationErrors.find(err => err.includes('Tiêu đề')) ? "danger" : "default"}
                                        errorMessage={validationErrors.find(err => err.includes('Tiêu đề'))}
                                    />
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        onChange={(e) => handleInputChange('shopAddress', e.target.value)}
                                        label="Địa chỉ"
                                        value={shopData.shopAddress}
                                        isInvalid={!!validationErrors.find(err => err.includes('Địa chỉ'))}
                                        color={validationErrors.find(err => err.includes('Địa chỉ')) ? "danger" : "default"}
                                        errorMessage={validationErrors.find(err => err.includes('Địa chỉ'))}
                                        className="w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <Textarea
                                        type="text"
                                        onChange={(e) => handleInputChange('shopDescription', e.target.value)}
                                        label="Mô tả"
                                        className="w-full"
                                        value={shopData.shopDescription}
                                    // isInvalid={!!validationErrors.find(err => err.includes('Mô tả'))}
                                    // color={validationErrors.find(err => err.includes('Mô tả')) ? "danger" : "default"}
                                    // errorMessage={validationErrors.find(err => err.includes('Mô tả'))}
                                    />
                                </div>
                                <div className='flex justify-around'>
                                    <Button className=' w-[200px]' onPress={handleClose}>Đóng</Button>
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


