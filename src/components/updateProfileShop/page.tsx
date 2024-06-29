import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, TimeInput, Textarea, Divider, TimeInputValue } from "@nextui-org/react";
import { ShopInput, shopInfor } from "@/models/shopModel";
import { useAppDispatch } from "@/lib/redux/store";
import { updateShopInfor } from "@/lib/redux/slice/shopSlice";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpadteProfileShop({ params }: { params: shopInfor }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [shopData, setShopData] = useState<ShopInput>({
        id: params.id,
        userId: '',
        shopName: params.shopName,
        shopAddress: params.shopAddress,
        shopPhone: params.shopPhone,
        area: params.area,
        shopDescription: params.shopDescription,
        openTime: params.openTime,
        closeTime: params.closeTime,
        isAvailable: params.isAvailable,
        shopEmail: params.shopEmail,
        shopTitle: params.shopTitle,
    });
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
    const handleUpdate = async () => {
        setIsLoading(true);
        try {
            if (userId) {
                console.log('Sending shopData:', shopData);
                await dispatch(updateShopInfor({ shopData })).unwrap();
                toast.success("Tạo shop thành công!", {
                    onClose: onOpenChange,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating shop:', error);
            toast.error("Đã xảy ra lỗi khi tạo shop. Vui lòng thử lại sau!");
        }
    };
    return (
        <>
            <Button onPress={onOpen} >Chỉnh sửa thông tin</Button>
            <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center text-2xl font-bold text-orange-700 uppercase ">chỉnh sửa thông tin</ModalHeader>
                            <Divider />

                            <ModalBody className="flex justify-center">
                                <div className="my-2 flex justify-center">
                                    <div>
                                        <div className="flex w-full mb-4">
                                            <div className="mr-4">
                                                <Input
                                                    type="text"
                                                    defaultValue={params.shopName}
                                                    onChange={(e) => handleInputChange('shopName', e.target.value)}
                                                    label="Tên shop"
                                                    className="w-[250px]"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <Input
                                                    type="text"
                                                    defaultValue={params.shopTitle}
                                                    label="Tiêu đề"
                                                    onChange={(e) => handleInputChange('shopTitle', e.target.value)}
                                                    className="w-[250px]"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex w-full mb-4">
                                            <div className="mr-4">
                                                <Input
                                                    type="text"
                                                    defaultValue={params.shopTitle}
                                                    label="Địa chỉ"
                                                    onChange={(e) => handleInputChange('shopAddress', e.target.value)}
                                                    className="w-[250px]"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <Input
                                                    type="text"
                                                    defaultValue={params.area}
                                                    label="Khu vực"
                                                    onChange={(e) => handleInputChange('area', e.target.value)}
                                                    className="w-[250px]"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex w-full mb-4">
                                            <div className="mr-4">
                                                <Input
                                                    type="email"
                                                    defaultValue={params.shopEmail}
                                                    onChange={(e) => handleInputChange('shopEmail', e.target.value)}
                                                    label="Email"
                                                    className="w-[250px]"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <Input
                                                    type="number"
                                                    defaultValue={params.shopPhone}
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
                                        <div className="flex w-full ">
                                            <div className="w-full">
                                                <Textarea
                                                    type="text"
                                                    defaultValue={params.shopDescription}
                                                    onChange={(e) => handleInputChange('shopDescription', e.target.value)}
                                                    label="Mô tả"
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>

                            <Divider />
                            <ModalFooter className="flex justify-around">
                                <Button className="w-1/2" onPress={onClose}>
                                    Huỷ
                                </Button>
                                <Button className="w-1/2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" radius="lg" onClick={handleUpdate}>
                                    Xác nhận
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
                <ToastContainer />
            </Modal >
        </>
    );
}
