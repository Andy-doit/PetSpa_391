import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea } from "@nextui-org/react";

export default function ReasonCancel({ onClose }: { onClose: () => void }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button radius="lg" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-1/2" onPress={onOpen}>Có </Button>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="lg"
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent>

                    <>
                        <ModalHeader className="flex bg-black text-center flex-col gap-1 text-3xl text-orange-500">Lí do bạn huỷ</ModalHeader>
                        <ModalBody>
                            <Textarea className="w-full" placeholder="Vui lòng cho chúng tôi biết lí do bạn huỷ">

                            </Textarea>
                        </ModalBody>
                        <ModalFooter className="w-full flex">
                            <Button className="w-1/2" radius="lg" onPress={onClose}>
                                Huỷ
                            </Button>
                            <Button radius="lg" className="bg-gradient-to-tr w-1/2 from-pink-500 to-yellow-500 text-white shadow-lg" color="primary" onPress={onClose}>
                                Xác nhận
                            </Button>
                        </ModalFooter>
                    </>

                </ModalContent>
            </Modal>
        </>
    );
}
