
import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react"; import { FaEye } from "react-icons/fa";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { ServiceInfor } from "@/models/shopModel";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchServiceInfo } from "@/lib/redux/slice/shopSlice";


export default function ModalViewServiceProps({ params }: { params: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [shop, setShop] = useState<ServiceInfor | any>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const petDetail = async () => {
            const response = await dispatch(fetchServiceInfo({ slug: params }));
            if (response.payload) {
                setShop(response.payload);
            }
        };
        petDetail();
    }, [dispatch, params]);
    return (
        <>
            <Tooltip content="Xem chi tiết">
                <Button color="warning" variant="faded" isIconOnly onPress={onOpen}>
                    <FaEye size={20} />
                </Button>

            </Tooltip>
            <Modal size='lg' isOpen={isOpen} placement="top-center">
                <ModalContent className="bg-white rounded-xl p-8 w-full max-w-4xl">
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-pink-600 mb-4">
                            Xem chi tiết dịch vụ
                        </ModalHeader>
                        <ModalBody className="space-y-6">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <div>
                                        <p className="text-xl font-light">Tên dịch vụ</p>

                                        <p className="text-xl font-light">Giá dịch vụ</p>
                                        <p className="text-xl font-light">Nomination</p>
                                        <p className="text-xl font-light">Cân nặng nhỏ nhất</p>
                                        <p className="text-xl font-light">Cân nặng lớn nhất </p>
                                        <p className="text-xl font-light">Mô tả dịch vụ </p>

                                    </div>
                                    <div className="ml-20">
                                        {shop ? (
                                            <>
                                                <p className="text-xl font-medium">{shop.serviceName || "Không có gì"}</p>

                                                <p className="text-xl font-medium">{shop.price || "Không có gì"}</p>
                                                <p className="text-xl font-medium">{shop.nomination || "Không có gì"}</p>
                                                <p className="text-xl font-medium">{shop.minWeight || "Không có gì"}</p>
                                                <p className="text-xl font-medium">{shop.maxWeight || "Không có gì"}</p>
                                                <p className="text-xl font-medium">{shop.serviceDescription || "Không có gì"}</p>


                                            </>
                                        ) : (
                                            <p className="text-xl font-medium">Không có gì</p>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </ModalBody>
                        <ModalFooter className="flex justify-end space-x-4 mt-8">
                            <Button
                                onClick={onClose}
                                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                            >
                                Đóng
                            </Button>

                        </ModalFooter>
                    </>
                </ModalContent>

            </Modal>
        </>
    );
}
