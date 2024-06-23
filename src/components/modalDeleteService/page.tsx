'use client';

import { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from "@nextui-org/react";
import { ServiceInfor } from '@/models/shopModel';
import { useAppDispatch } from '@/lib/redux/store';
import getAccessAndRefreshCookie from '@/utilities/authUtils/getCookieForValidation';
import { deleteService } from '@/lib/redux/slice/shopSlice';
import { ToastContainer, toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';


const ModalDeleteService = ({ params }: { params: string }) => {


    const { isOpen, onOpen, onClose } = useDisclosure();
    const [service, setService] = useState<ServiceInfor | any>();
    const dispatch = useAppDispatch();
    const [serviceId, setServiceId] = useState<string>('');
    const handleDetete = async () => {
        try {
            if (serviceId) {
                await dispatch(deleteService({ slug: params })).unwrap();
                toast.success("Xoá dịch vụ của shop thành công!", {
                    onClose: onClose,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating service:', error);
            toast.error("Đã xảy ra lỗi khi xoá dịch vụ. Vui lòng thử lại sau!");
        }
    };
    return (

        <div>
            <Tooltip content="Xoá dịch vụ">
                <Button color="danger" variant="faded" isIconOnly onPress={onOpen}>
                    <MdDelete size={20} />
                </Button>
            </Tooltip>

            <Modal size='md' isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent>
                    <ModalHeader className='text-3xl text-orange-600'>Bạn có chắc chắn về quyết định của mình?</ModalHeader>
                    <ModalFooter>
                        <Button color="danger" variant="light" onClick={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onClick={handleDetete} >
                            Xoá
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default ModalDeleteService;