import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider, Select, SelectItem } from "@nextui-org/react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createNomiationInput } from "@/models/userModels";
import { useAppDispatch } from "@/lib/redux/store";
import getAccessAndRefreshCookie from "@/utilities/authUtils/getCookieForValidation";
import { createNomination } from "@/lib/redux/slice/userSlice";

export default function CreateNomiation({ shopData, refreshData }: { shopData: string, refreshData: () => void }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [nominationData, setNominationData] = useState<createNomiationInput>({
        shopId: parseInt(shopData),
        nominationType: '',
    });
    const dispatch = useAppDispatch();

    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setNominationData(prevData => ({
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
                await dispatch(createNomination({ nominationData })).unwrap();
                toast.success("Đánh giá shop thành công!", {
                    onClose: onOpenChange,
                    autoClose: 1500,
                });
                refreshData(); // Fetch data again after successful nomination
            }
        } catch (error) {
            toast.error("Đã xảy ra lỗi khi đánh giá shop. Vui lòng thử lại sau!");
        }
    };

    return (
        <>
            <Button radius="lg" className="bg-gradient-to-tr w-full from-pink-500 to-yellow-500 text-white shadow-lg" onPress={onOpen}>Đánh giá shop</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center text-3xl text-orange-600 font-bold uppercase bg-black">Đánh giá Shop</ModalHeader>
                            <Divider />
                            <ModalBody
                                style={{
                                    backgroundImage: `url("https://i.pinimg.com/564x/13/2e/53/132e53913e121bd14ee6a51d6b55300d.jpg")`,
                                }}
                            >
                                <Select label="Đánh giá" className="w-[400px]"
                                    onChange={(e) => handleInputChange('nominationType', e.target.value)}
                                >
                                    <SelectItem key="0">TỆ</SelectItem>
                                    <SelectItem key="1">TẠM ỔN</SelectItem>
                                    <SelectItem key="2">ỔN</SelectItem>
                                    <SelectItem key="3">TUYỆT VỜI</SelectItem>
                                </Select>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="w-1/2" onPress={onClose}>
                                    Huỷ
                                </Button>
                                <Button onClick={handleCreate}
                                    className="bg-gradient-to-tr w-1/2 from-pink-500 to-yellow-500 text-white shadow-lg " color="primary">
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