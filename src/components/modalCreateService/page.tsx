
import React, { use, useState } from "react";
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
            <Modal isOpen={isOpen} onClose={onClose} size="xl" backdrop="blur" >
                <ModalContent className="bg-white rounded-xl p-8">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Thêm mới dịch vụ </ModalHeader>
                            <ModalBody className="space-y-6">
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-md-6">
                                        <label className="form-label">Tên dịch vụ</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Giá dịch vụ</label>
                                        <input type="password" className="form-control" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Mô tả dịch vụ :</label>
                                        <input type="text" className="form-control" />
                                    </div>





                                </form>
                            </ModalBody>
                            <ModalFooter className="flex justify-end space-x-4">
                                <Button
                                    onClick={onClose}
                                    className="hover:bg-red-500 hover:text-white"
                                >
                                    Đóng
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={onClose}
                                    className="hover:bg-blue-600"
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
