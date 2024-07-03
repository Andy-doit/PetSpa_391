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

    const handleOpen = async () => {
        onOpen();
        const response = await dispatch(fetchServiceInfo({ slug: params }));
        if (response.payload) {
            setShop(response.payload);
        }
    };

    return (
        <>
            <Tooltip content="Xem chi tiết">
                <Button variant="bordered" className='rounded-full' isIconOnly onPress={handleOpen}>
                    <FaEye size={20} />
                </Button>
            </Tooltip>
            <Modal size='xl' isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent>
                    <ModalHeader
                        className='text-3xl flex justify-center font-bold uppercase text-white'
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/b4/38/8d/b4388d3b0601a64cad25d2fe73b2224b.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",
                        }}
                    >
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
                        <Button onClick={onClose} className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-[200px]">
                            Đóng
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
