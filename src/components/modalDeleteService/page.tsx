'use client';

import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface ModalDeleteServiceProps {
    isOpen: boolean;
    onClose: () => void;
    serviceToDelete: any;
}

const ModalDeleteService = ({ isOpen, onClose, serviceToDelete }: ModalDeleteServiceProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="lg"

        >
            <ModalContent>
                <ModalHeader>
                    <h3>Xác nhận xóa dịch vụ</h3>
                </ModalHeader>
                <ModalBody>
                    Bạn có chắc chắn muốn xóa      {serviceToDelete && serviceToDelete.name} ?

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="danger"
                        onClick={onClose}
                        className="mr-4"
                    >
                        Hủy
                    </Button>
                    <Button onClick={onClose}>
                        Xác nhận
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalDeleteService;