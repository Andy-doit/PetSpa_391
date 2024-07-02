import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider, Select, SelectItem, Input } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import { CreateShopTimeSlotInput } from "@/models/shopModel";
import { useAppDispatch } from "@/lib/redux/store";
import { createShopTimeSlot } from "@/lib/redux/slice/shopSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

export default function CreateShopTimeSlot({ shopIds, refetchTimes }: { shopIds: string, refetchTimes: () => void }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    console.log(shopIds);
    const [isLoading, setIsLoading] = useState(false);
    const [timeSlotData, setTimeSlot] = useState<CreateShopTimeSlotInput>({

        shopId: shopIds,
        timeSlotId: '',
        description: '',
        totalSlot: '',
    });
    useEffect(() => {
        // Update the shopId when the prop changes
        setTimeSlot(prevData => ({
            ...prevData,
            shopId: shopIds
        }));
    }, [shopIds]);
    const dispatch = useAppDispatch();
    console.log(timeSlotData);
    const handleInputChange = (fieldName: string, newValue: string) => {
        setTimeSlot(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };
    const handleCreate = async () => {
        setIsLoading(true);
        try {
            await dispatch(createShopTimeSlot({ timeSlotData })).unwrap();
            toast.success("Tạo shop thành công!", {
                onClose: () => {
                    onOpenChange();
                    refetchTimes();
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
        <>
            <Button
                startContent={<FaPlus className='w-5' />}
                onPress={onOpen}
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
                Tạo mới khung giờ
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center text-3xl text-orange-600 font-bold uppercase bg-black">Tạo mới khung giờ</ModalHeader>
                            <Divider />
                            <ModalBody
                                style={{
                                    backgroundImage: `url("https://i.pinimg.com/564x/13/2e/53/132e53913e121bd14ee6a51d6b55300d.jpg")`,
                                }}
                            >
                                <Select label="Chọn khung giờ" className="w-full"
                                    onChange={(e) => handleInputChange('timeSlotId', e.target.value)}
                                >
                                    <SelectItem key="1">8:00 - 9:30</SelectItem>
                                    <SelectItem key="2">9:30 - 11:00</SelectItem>
                                    <SelectItem key="3">11:00 - 12:30</SelectItem>
                                    <SelectItem key="4">12:30 - 14:00</SelectItem>
                                    <SelectItem key="5">14:00 - 15:30</SelectItem>
                                    <SelectItem key="6">15:30 - 17:00</SelectItem>
                                    <SelectItem key="7">9:00 - 10:30</SelectItem>
                                    <SelectItem key="8">10:30 - 12:00</SelectItem>
                                    <SelectItem key="9">12:00 - 13:30</SelectItem>
                                    <SelectItem key="10">13:30 - 15:00</SelectItem>
                                    <SelectItem key="11">15:00 - 16:30</SelectItem>

                                </Select>
                                <Input onChange={(e) => handleInputChange('totalSlot', e.target.value)} placeholder="Slot tối đa" type="number" size="lg" />
                                <Input placeholder="Mô tả" size="lg" onChange={(e) => handleInputChange('description', e.target.value)} />
                            </ModalBody>
                            <ModalFooter>
                                <Button className="w-1/2" onPress={onClose}>
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
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
                <ToastContainer />
            </Modal>
        </>
    );
}
