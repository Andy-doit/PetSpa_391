import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";
import React from "react";

export const AddUser = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <>
                <Button onPress={onOpen} color="primary">
                    Tạo mới shop
                </Button>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    Tạo mới Spa Shop
                                </ModalHeader>
                                <ModalBody>
                                    <Input label="Email" variant="bordered" />
                                    <Input label="Tên Shop" variant="bordered" />
                                    <Input label="Số điện thoại" variant="bordered" />
                                    <Input label="Địa chỉ" variant="bordered" />
                                    <Input label="Mật khẩu" type="password" variant="bordered" />
                                    <Input
                                        label="Xác nhận mật khẩu"
                                        type="password"
                                        variant="bordered"
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onClick={onClose}>
                                        Đóng
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Tạo mới
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        </div>
    );
};
