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
import { ShopInfor, allShopPaginationData } from '@/models/adminModel';
import { deleteShop } from '@/lib/redux/slice/adminSlice';
import { fetchAllServicePagination } from '@/lib/redux/slice/shopSlice';

export default function DeleteShop({ params, refetchPets }: { params: string, refetchPets: () => void }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [shop, setShop] = useState<ShopInfor | any>();
    const dispatch = useAppDispatch();
    const [shopId, setShopId] = useState<string>('');
    const [shopowner, setShoponwer] = useState<allShopPaginationData[]>([]);
    const fetchPets = async () => {
        const response = await dispatch(fetchAllServicePagination());
        setShoponwer(response.payload || []);
    };
    useEffect(() => {
        fetchPets();
    }, [dispatch]);
    useEffect(() => {
        const fetchUid = async () => {
            try {
                const { uid } = await getAccessAndRefreshCookie();
                if (uid) {
                    setShopId(uid);
                }
            } catch (error) {
                console.error('Error fetching UID:', error);
            }
        };
        fetchUid();
    }, [shopId]);
    const handleDetete = async () => {
        try {
            if (shopId) {
                await dispatch(deleteShop({ slug: params })).unwrap();
                toast.success("Xoá tài khoản shop thành công!", {
                    onClose: () => {
                        onClose();
                        refetchPets();
                    },
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating service:', error);
            toast.error("Đã xảy ra lỗi khi xoá tài khoản. Vui lòng thử lại sau!");
        }
    };


    return (
        <div>
            <Tooltip content="Xoá Tài khoản">
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


