import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider, Textarea } from "@nextui-org/react";
import { BookingDetail, createFeedbackInput } from "@/models/userModels";
import { useAppDispatch } from "@/lib/redux/store";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { createFeedback } from "@/lib/redux/slice/userSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateFeedback({ shopData }: { shopData: BookingDetail }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [feedbackData, setFedbackData] = useState<createFeedbackInput>({
        serviceId: parseInt(shopData.serviceId),
        shopId: parseInt(shopData.shopId),
        content: '',

    });
    const dispatch = useAppDispatch();
    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setFedbackData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };
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
    const handleCreate = async () => {
        try {
            if (userId) {
                await dispatch(createFeedback({ feedbackData })).unwrap();
                toast.success("Tạo thú cưng thành công!", {
                    onClose: onOpenChange,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating service:', error);
            toast.error("Đã xảy ra lỗi khi tạo thú cưng. Vui lòng thử lại sau!");
        }
    };
    return (
        <>
            <Button radius="lg" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onPress={onOpen}>Đánh giá</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center text-3xl text-orange-600 font-bold uppercase bg-black">Đánh giá dịch vụ</ModalHeader>
                            <Divider />
                            <ModalBody
                                style={{
                                    backgroundImage: `url("https://i.pinimg.com/564x/13/2e/53/132e53913e121bd14ee6a51d6b55300d.jpg")`,
                                }}
                            >

                                <Textarea
                                    placeholder="Nhập đánh giá của bạn"
                                    onChange={(e) => handleInputChange('content', e.target.value)}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button className="w-1/2" onPress={onClose}>
                                    Huỷ
                                </Button>
                                <Button className="bg-gradient-to-tr w-1/2 from-pink-500 to-yellow-500 text-white shadow-lg " color="primary" onClick={handleCreate}>
                                    Gửi
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
                <ToastContainer />
            </Modal>
        </>
    );
}
