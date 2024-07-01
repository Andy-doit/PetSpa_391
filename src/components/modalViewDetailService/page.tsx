import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { ServiceInfor } from "@/models/shopModel";
import { useAppDispatch } from "@/lib/redux/store";
import { fetchServiceInfo } from "@/lib/redux/slice/shopSlice";

export default function ModalViewServiceProps({ params }: { params: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [shop, setShop] = useState<ServiceInfor | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getServiceDetails = async () => {
            const response = await dispatch(fetchServiceInfo({ slug: params }));
            if (response.payload) {
                setShop(response.payload);
            }
        };
        getServiceDetails();
    }, [dispatch, params]);

    return (
        <>
            <Tooltip content="Xem chi tiết">
                <Button color="warning" variant="faded" isIconOnly onPress={onOpen}>
                    <FaEye size={20} />
                </Button>
            </Tooltip>
            <Modal size='lg' isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent className="bg-white rounded-xl p-8 max-w-4xl">
                    <ModalHeader className='text-3xl flex justify-center font-bold bg-gray-300 text-orange-600'>
                        Xem chi tiết dịch vụ
                    </ModalHeader>
                    <ModalBody>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-xl font-light">Tên dịch vụ:</div>
                            <div className="text-xl font-medium">{shop?.serviceName || "Không có"}</div>

                            <div className="text-xl font-light">Giá dịch vụ:</div>
                            <div className="text-xl font-medium">{shop?.price || "Không có"}</div>

                            <div className="text-xl font-light">Nomination:</div>
                            <div className="text-xl font-medium">{shop?.nomination || "Không có"}</div>

                            <div className="text-xl font-light">Cân nặng nhỏ nhất:</div>
                            <div className="text-xl font-medium">{shop?.minWeight || "Không có"}</div>

                            <div className="text-xl font-light">Cân nặng lớn nhất:</div>
                            <div className="text-xl font-medium">{shop?.maxWeight || "Không có"}</div>

                            <div className="text-xl font-light">Mô tả dịch vụ:</div>
                            <div className="text-xl font-medium">{shop?.serviceDescription || "Không có"}</div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="flex justify-end space-x-4 mt-8">
                        <Button onClick={onClose} className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
                            Đóng
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
