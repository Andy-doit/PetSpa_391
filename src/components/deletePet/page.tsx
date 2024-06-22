'use client'
import React, { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
    Tooltip,
} from '@nextui-org/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/lib/redux/store';
import { PetInfor } from '@/models/userModels';
import { MdDelete } from 'react-icons/md';
import { deletePet } from '@/lib/redux/slice/userSlice';
import getAccessAndRefreshCookie from '@/utilities/authUtils/getCookieForValidation';

export default function DeletePet({ params }: { params: string }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [pet, setPet] = useState<PetInfor | any>();
    const dispatch = useAppDispatch();
    const [userId, setUserId] = useState<string>('');
    useEffect(() => {
        const fetchUid = async () => {
            try {
                const { uid } = await getAccessAndRefreshCookie();
                if (uid) {
                    setUserId(uid);
                }
            } catch (error) {
                console.error('Error fetching UID:', error);
            }
        };
        fetchUid();
    }, [userId]);
    const handleDetete = async () => {
        try {
            if (userId) {
                await dispatch(deletePet({ slug: params })).unwrap();
                toast.success("xoá thú cưng thành công!", {
                    onClose: onClose,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating service:', error);
            toast.error("Đã xảy ra lỗi khi xoá thú cưng. Vui lòng thử lại sau!");
        }
    };


    return (
        <div>
            <Tooltip content="Xoá thú cưng">
                <Button variant="bordered" className='rounded-full' isIconOnly onPress={onOpen}>
                    <MdDelete size={20} color='red' />
                </Button>
            </Tooltip>

            <Modal size='md' isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent>
                    <ModalHeader
                        className='text-3xl flex justify-center text-center font-bold bg-gray-300  text-orange-600'
                    >Bạn có chắc về quyết định của mình hay không?

                    </ModalHeader>
                    <ModalFooter>

                        <Button className='w-full' onClick={onClose}>
                            Đóng
                        </Button>
                        <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full" onClick={handleDetete} >
                            Xoá
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>

    );
};


