'use client'
import React, { useEffect, useState } from 'react';
import {
    Button,
    Input,
    Select,
    SelectItem,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
    Textarea,
    Tooltip,
} from '@nextui-org/react';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/lib/redux/store';
import { allPetPaginationData, createPetInput } from '@/models/userModels';
import { updatePet } from '@/lib/redux/slice/userSlice';
import getAccessAndRefreshCookie from '@/utilities/authUtils/getCookieForValidation';
import { MdChangeCircle } from 'react-icons/md';

export default function UpdatePet({ params }: { params: allPetPaginationData }) {
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

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (userId) {
            setPetData(prevData => ({
                ...prevData,
                userId: userId,
            }));
        }
    }, [userId]);
    const [petData, setPetData] = useState<createPetInput>({
        id: params.id.toString(),
        userId: userId,
        petName: params.petName,
        petType: params.petType,
        petAge: params.petAge,
        petGender: params.petGender,
        petWeight: params.petWeight,
        petDescription: '',
        petPhoto: '',
        petNote: '',

    });
    // console.log(petData)
    const dispatch = useAppDispatch();

    const handleInputChange = (fieldName: string, newValue: string | number) => {
        setPetData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };
    const handleCreate = async () => {
        try {
            if (userId) {
                await dispatch(updatePet({ petData })).unwrap();
                toast.success("Cập nhật thú cưng thành công!", {
                    onClose: onClose,
                    autoClose: 1500,
                });
            }
        } catch (error) {
            console.error('Error creating service:', error);
            toast.error("Đã xảy ra lỗi khi tạo thú cưng. Vui lòng thử lại sau!");
        }
    };

    return (
        <div>
            <Tooltip content="Chỉnh sửa thú cưng">
                <Button variant="bordered" className='rounded-full' isIconOnly onPress={onOpen}>
                    <MdChangeCircle size={20} color="green" />
                </Button>
            </Tooltip>

            <Modal size='xl' isOpen={isOpen} onClose={onClose} placement="top-center">
                <ModalContent>
                    <ModalHeader
                        className='text-3xl flex justify-center font-bold uppercase text-white'
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/b4/38/8d/b4388d3b0601a64cad25d2fe73b2224b.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",


                        }}
                    >Chỉnh sửa thú cưng</ModalHeader>
                    <ModalBody
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/32/9e/2f/329e2f6a54fdb1f53f4126991fcc6143.jpg")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",


                        }}
                    >
                        <div className="mt-2 flex">
                            <div className="">
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <Input
                                            type="Petname"
                                            value={petData.petName}
                                            onChange={(e) => handleInputChange('petName', e.target.value)}
                                            label="Tên thú cưng"
                                            className="w-[250px]"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Select label="Loại thú cưng" className="w-[250px]"

                                            defaultSelectedKeys={[petData.petType]}
                                            onChange={(e) => handleInputChange('petType', e.target.value)}
                                        >
                                            <SelectItem key="DOG">Chó</SelectItem>
                                            <SelectItem key="CAT">Mèo</SelectItem>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex w-full mb-4">
                                    <div className="mr-4">
                                        <Input
                                            onChange={(e) => handleInputChange('petAge', e.target.value)}
                                            type="Petage"
                                            value={petData.petAge.toString()}
                                            label="Tuổi thú cưng"
                                            className="w-[250px]"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <Select label="Giới tính"
                                            defaultSelectedKeys={[petData.petGender]}
                                            onChange={(e) => handleInputChange('petGender', e.target.value)}
                                            className="w-[250px]">
                                            <SelectItem key="Male">Đực</SelectItem>
                                            <SelectItem key="Female">Cái</SelectItem>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-full mr-4">
                                        <Input
                                            value={petData.petWeight.toString()}
                                            onChange={(e) => handleInputChange('petWeight', e.target.value)}
                                            type="Petweight"
                                            label="Cân nặng"
                                            className="w-full"
                                        />

                                    </div>
                                    <div className="w-full ml-4">
                                        <Input
                                            value={petData.petDescription}
                                            onChange={(e) => handleInputChange('petDescription', e.target.value)}
                                            type="petDescription"
                                            label="Mô tả"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-full">
                                        <Textarea
                                            value={petData.petNote}
                                            onChange={(e) => handleInputChange('petNote', e.target.value)}
                                            type="petNote"
                                            label="Ghi chú"
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex w-full justify-end">
                            <Button
                                className=" mr-3 w-full"
                                onPress={onClose}
                            >
                                Huỷ
                            </Button>
                            <Button
                                type="submit"
                                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                                disabled={isLoading}
                                onPress={handleCreate}
                            >
                                {isLoading ? (
                                    <ClipLoader size={20} color="#ffffff" />
                                ) : (
                                    'Cập nhật'
                                )}
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </div>
    );
};


