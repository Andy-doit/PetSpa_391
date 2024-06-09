
import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"; interface ModalCreateUserProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}
interface ModalCreateServiceProps {
    isOpen: boolean;
    onClose: () => void; // Định nghĩa kiểu dữ liệu cho onClose là một hàm không tham số
}

export default function ModalCreateService({ isOpen, onClose }: ModalCreateServiceProps) {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    return (
        <>

            {/* <Button onPress={onOpen}>Thêm mới dịch vụ</Button> */}
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" backdrop="blur">
                <ModalContent className="bg-white rounded-xl p-8 w-full max-w-4xl">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-pink-600 mb-4">
                                Thêm mới dịch vụ
                            </ModalHeader>
                            <ModalBody className="space-y-6">
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="form-label text-lg font-semibold">Tên dịch vụ</label>
                                        <input type="text" className="form-control border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="form-label text-lg font-semibold">Giá dịch vụ</label>
                                        <input type="number" className="form-control border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="form-label text-lg font-semibold">Loại thú cưng</label>
                                        <select className="form-control border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="">Chọn loại thú cưng</option>
                                            <option value="dog">Chó</option>
                                            <option value="cat">Mèo</option>
                                        </select>
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="form-label text-lg font-semibold">Mô tả dịch vụ</label>
                                        <textarea className="form-control border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter className="flex justify-end space-x-4 mt-8">
                                <Button
                                    onClick={onClose}
                                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                                >
                                    Đóng
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={onClose}
                                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Lưu
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
