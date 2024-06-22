
import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react"; import { FaEye } from "react-icons/fa";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
interface ModalCreateUserProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    service: any;
}
interface ModalViewServiceProps {
    isOpen: boolean;
    onClose: () => void;
    service: any; // Định nghĩa kiểu dữ liệu cho onClose là một hàm không tham số
}

export default function ModalViewServiceProps({ isOpen, onClose, service }: ModalViewServiceProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" backdrop="blur">
                <ModalContent className="bg-white rounded-xl p-8 w-full max-w-4xl">
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-pink-600 mb-4">
                            Xem chi tiết dịch vụ
                        </ModalHeader>
                        <ModalBody className="space-y-6">
                            {service ? (
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-1 ">

                                        <Input
                                            className="w-[300px]"
                                            value={service.name}

                                            label="Tên dịch vụ"
                                        />

                                    </div>
                                    <div className="col-span-1">
                                        <Select
                                            label="Category"
                                            className="w-[300px]"

                                        >
                                            <SelectItem key="1" value="1">
                                                Dịch vụ tắm rứa
                                            </SelectItem>
                                            <SelectItem key="2" value="2">
                                                Dịch vụ làm đẹp
                                            </SelectItem>
                                            <SelectItem key="3" value="3">
                                                Dịch vụ mát xa
                                            </SelectItem>
                                            <SelectItem key="4" value="4">
                                                Dịch vụ mát xa đặc biệt
                                            </SelectItem>
                                            <SelectItem key="5" value="5">
                                                Khách sạn thú cưng
                                            </SelectItem>

                                        </Select>


                                    </div>
                                    <div className="col-span-1">
                                        <Select
                                            label="Category"
                                            className="w-[300px]"

                                        >
                                            <SelectItem key="tag1" value="tags1">
                                                Tag 1
                                            </SelectItem>
                                            <SelectItem key="tag2" value="tags2">
                                                Tag 2
                                            </SelectItem>
                                            <SelectItem key="tag3" value="tags3">
                                                Tag 2
                                            </SelectItem>


                                        </Select>


                                    </div>
                                    <div className="col-span-1">
                                        <Input
                                            className="w-[300px]"
                                            value={service.price}
                                            label="Giá dịch vụ"
                                        />

                                    </div>

                                    <div className="col-span-1">
                                        <Select
                                            label="Loại thú cưng"
                                            className="w-[300px]"
                                            value={service.type}

                                        >
                                            <SelectItem key="DOG" value="DOG">
                                                Chó
                                            </SelectItem>
                                            <SelectItem key="CAT" value="CAT">
                                                Mèo
                                            </SelectItem>
                                        </Select>


                                    </div>
                                    <div className="col-span-1">
                                        <Input
                                            className="w-[300px]"

                                            label="Cân nặng nhỏ nhất"
                                        />

                                    </div>
                                    <div className="col-span-1">
                                        <Input
                                            className="w-[300px]"

                                            label="Cân nặng lớn nhất"
                                        />

                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <div className="w-full">
                                            <Textarea
                                                value={service.description}
                                                placeholder="Mô tả dịch vụ"
                                                className="w-full"
                                            />
                                        </div>

                                    </div>
                                </form>
                            ) : (
                                <p>Không có thông tin dịch vụ.</p>
                            )}
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

                                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                            >
                                Tạo
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>

            </Modal>
        </>
    );
}
