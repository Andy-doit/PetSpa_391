import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import ReasonCancel from "../reasonCancelBooking/page";

export default function CancelBooking() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onPress={onOpen}>Huỷ dịch vụ </Button>
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
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex bg-black text-center flex-col gap-1 text-3xl text-orange-500">Bạn có chắc chắn về quyết định của mình không?</ModalHeader>
                            <ModalFooter className="w-full flex">
                                <Button className="w-1/2" radius="lg" onPress={onClose}>
                                    Không
                                </Button>
                                <ReasonCancel onClose={onClose} />
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}